<template>
  <PostDB />
  <div class="journal">
    <Boxs :gridData="gridData"></Boxs>
    <div class="custom-container">
      <Posts :postsData="postsData"></Posts>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { computed, ref, watchEffect } from 'vue';
import Boxs from "../components/boxs/boxs2.vue"
import Posts from "../components/posts/posts-filter.vue"
import PostDB from '@/components/firestore/PostDB.vue';
import { usePostStore } from "@/stores/post.store";
import { isEmpty } from "lodash";
import { PromotionType } from "@/types/journal.type";
import { db } from "@/common/firebase";
import { useFirestore } from "@vueuse/firebase";
const PostStore = usePostStore()

const gridData = ref<PromotionType[]>([])
// Firestore
const pageHomeDB = db().collection('Page').doc('Journal')
const pageHomeData = ref<{
  promotionList
: PromotionType[],
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    gridData.value = pageHomeData.value.promotionList;
  }
})
const postsData = ref({
  tags: [] as any[],
  posts: [] as any[]
})
watchEffect(() => {
  const postCategoryArray = PostStore.postCategoryArray
  if (!isEmpty(postCategoryArray)) {
    postsData.value.tags = [
      {
        name: 'All',
        value: 0
      },
      ...postCategoryArray.map((o) => ({
        name: o.postCategory_name,
        value: o.postCategory_id
      }))]
  }
})
watchEffect(() => {
  const postArray = PostStore.postArray
  if (!isEmpty(postArray)) {
    postsData.value.posts = postArray.map((o) => {
      const imgSrc = o.img
      const text = o.content ?? o.intro ?? o.epilogue ?? ''
      const el = document.createElement("div");
      el.innerHTML = text
      const imgEl = el.querySelector('img') as HTMLImageElement
      return {
        img: imgSrc ? imgSrc : (imgEl ? imgEl.src : 'https://missecotw.com/logo/logo.png'),
        link: `/post/${o.title}`,
        date: o.date,
        title: o.title,
        content: (el.textContent ?? '').replaceAll('\n', '').replaceAll(' ', '').replaceAll(/\u00a0/g, ''),
        tag: o.category_id
      }
    })

  }
})


// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return 'Miss Eco｜永續日記'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return 'Miss Eco｜永續日記'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        return 'Miss Eco環保外送平台與健康永續的餐飲業者合作，推廣低碳飲食，讓您輕鬆實踐永續飲食態度。包含在地小農餐點、醜蔬果、格外品；以原型食物入菜，健康水煮呈現，最純粹的料理方式；更棒的是，平台提供豐富多元的潮流蔬食，讓愛吃肉的你也能體驗美味新境界。希望在您照顧地球健康的同時也能吃得好，吃得健康！'
      }),
    },
    {
      property: `og:image`,
      content: computed(() => {
        return 'https://missecotw.com/logo/logo.png'
      }),
    },
  ],
})
</script>

<style scoped lang="sass">
.journal
  padding: 40px 15% 40px 15%
  background-color: #FFFBED
@media (max-width: 840px)
  .journal
    padding: 40px 0% 40px 0%
    .custom-container
      padding: 0px 10% 0px 10%

</style>