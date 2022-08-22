<template>
  <div class="journal">
    <Boxs :gridData="gridData"></Boxs>
    <div class="custom-container">
      <Posts :postsData="postsData"></Posts>
    </div>
  </div>
</template>

<script setup lang="ts">
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

// interface Props {
//   label?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   label: '',
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
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