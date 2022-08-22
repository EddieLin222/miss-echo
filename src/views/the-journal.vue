<template>
  <div class="journal">
    <Boxs :gridData="gridData"></Boxs>
    <div class="custom-container">
      <Posts :postsData="postsData"></Posts>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "@vueuse/head"
import { computed } from 'vue';
import Boxs from "../components/boxs/boxs2.vue"
import Posts from "../components/posts/posts-filter.vue"

const gridData = [
  {
    img: '/promotion/promotion1.png',
    name: '1替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代文字替代文字',
    link: '/'
  },
  {
    img: '/promotion/promotion2.png',
    name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
    link: '/'
  },
  {
    img: '/promotion/promotion3.png',
    name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代代文字替代文字替代文字文字替代文字替代文字替代',
    link: '/'
  },
  {
    img: '/promotion/promotion4.png',
    name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
    link: '/'
  },
  {
    img: '/promotion/promotion5.png',
    name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
    link: '/'
  },
  {
    img: '/promotion/promotion6.png',
    name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代文字替代文字',
    link: '/'
  }
]

const postsData = {
  tags: [
    {
      name: 'All',
      value: 0
    },
    {
      name: 'Miss碎碎念',
      value: 1
    },
    {
      name: '永續日常',
      value: 2
    },
    {
      name: '健康意識',
      value: 3
    },
    {
      name: '活動花絮',
      value: 4
    }
  ],
  posts: [
    {
      img: '/promotion/promotion1.png',
      link: '/',
      date: '2022/05/30',
      title: '機場搭防疫計程車我們付費，文章標題第二列-1',
      content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
      tag: 1
    },
    {
      img: 'promotion/promotion2.png',
      link: '/',
      date: '2022/05/30',
      title: '機場搭防疫計程車我們付費，文章標題第二列-2',
      content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
      tag: 2
    },
    {
      img: 'promotion/promotion3.png',
      link: '/',
      date: '2022/05/30',
      title: '機場搭防疫計程車我們付費，文章標題第二列-3',
      content: '現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文現在只要預訂「台北市的防疫旅館」您的計程車費我來出！內文',
      tag: 3
    }
  ]
}

// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return '永續日記｜Miss Echo｜點一份您的餐點，一份地球的健康'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return '永續日記｜Miss Echo｜點一份您的餐點，一份地球的健康'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        return  'Miss Eco環保外送平台與健康永續的餐飲業者合作，推廣低碳飲食，讓您輕鬆實踐永續飲食態度。包含在地小農餐點、醜蔬果、格外品；以原型食物入菜，健康水煮呈現，最純粹的料理方式；更棒的是，平台提供豐富多元的潮流蔬食，讓愛吃肉的你也能體驗美味新境界。希望在您照顧地球健康的同時也能吃得好，吃得健康！'
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