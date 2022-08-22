<template>
  <div class="about">
    <Banner :bannerData="bannerData"></Banner>
    <div class="custom-container">
      <Intro :introData="introData"></Intro>
      <Posts :postList="postList"></Posts>
      <Story :storyList="storyList"></Story>
    </div>
  </div>
</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { BannerType, IntroType, PostType, StoryType } from '@/types/about.type';
import { useFirestore } from '@vueuse/firebase';
import { useHead } from '@vueuse/head';
import { ref, watchEffect, computed } from 'vue';
import Banner from "../components/banner/banner-3.vue"
import Intro from "../components/intro/intro4.vue"
import Posts from "../components/posts/posts.vue"
import Story from "../components/slide/slide2.vue"

const bannerData = ref<BannerType>({
  webImg: '',
  mobileImg: ''
})
const introData = ref<IntroType>({
  firstText: '',
  introText: ''
})
const postList = ref<PostType[]>([])
const storyList = ref<StoryType[]>([])
// Firestore
const pageHomeDB = db().collection('Page').doc('About')
const pageHomeData = ref<{
  bannerData: BannerType,
  introData: IntroType,
  postList: PostType[],
  storyList: StoryType[],
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    bannerData.value = pageHomeData.value.bannerData;
    introData.value = pageHomeData.value.introData;
    postList.value = pageHomeData.value.postList;
    storyList.value = pageHomeData.value.storyList;
  }
})
// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return '關於我們｜Miss Echo｜搭配健康永續餐點，舉辦一場零廢棄的低碳饗宴吧'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return '關於我們｜Miss Echo｜搭配健康永續餐點，舉辦一場零廢棄的低碳饗宴吧'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        const introduction = introData.value.introText ?? 'Miss Eco是全台首創零廢棄環保外送服務，與健康永續的餐飲業者合作，透過循環餐具外送餐點，減少外送製造的大量一次性垃圾。'
        return introduction
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
.about
  background-color: #FFFBED
  .custom-container
    padding: 70px 15% 40px 15%
    width: 100%
    display: flex
    flex-direction: column
    gap: 40px
@media (max-width: 540px)
  .about
    .custom-container
      padding: 70px 10% 40px 10%
</style>