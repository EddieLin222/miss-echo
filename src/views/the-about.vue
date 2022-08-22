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
import { ref } from 'vue';
import Banner from "../components/banner/banner-3.vue"
import Intro from "../components/intro/intro4.vue"
import Posts from "../components/posts/posts.vue"
import Story from "../components/slide/slide2.vue"

const bannerData = ref({
  webImg: '/banner/banner2.jpg',
  mobileImg: '/banner/banner2.jpg'
})

const introData = ref({
  firstText: 'Helping people help themselves Helping people help themselves',
  introText: '內文內文內文內文內文內文內文\n\n內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文內文'
})

const postList = ref([
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  },
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  },
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  },
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  },
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  },
  {
    img: '/post/post1.jpg',
    link: '',
    title: '標題標題標題標題',
    content: '內文內文內文內文'
  }
])

const storyList = ref([
  {
    img: '/sliders/bg-1.jpeg',
    text: '影片標題影片標題影片標題影片標題影片標題影片標題',
    link: '/'
  },
  {
    img: '/sliders/bg-1.jpeg',
    text: '影片標題影片標題影片標題影片標題影片標題影片標題',
    link: '/'
  },
  {
    img: '/sliders/bg-1.jpeg',
    text: '影片標題影片標題影片標題影片標題影片標題影片標題',
    link: '/'
  }
])
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