<template>
  <div class="life">
    <Banner :bannerData="bannerData"></Banner>
    <div class="custom-container">
      <Podcast :podcastData="podcastData"></Podcast>
      <Youtube :youtubeData="youtubeData"></Youtube>
      <Salon :salonData="salonData"></Salon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Banner from "../components/banner/banner-2.vue"
import Podcast from "../components/posts/posts-2.vue"
import Youtube from "../components/video/video.vue"
import Salon from "../components/list/list4.vue"

const bannerData = ref({
  webImg: '/banner/banner.png',
  mobileImg: '/banner/banner-m.png'
})

const podcastData = ref({
  mainImg: '/podcast/podcast.svg',
  intro: '歡迎來到Health impact意識生活，讓Summer與Solomon用5分鐘的時間與您分享醫學知識、飲食生活、環境自然、正念態度，各種建構健康藍圖的方法。',
  lists: [
    {
      title: '15｜【食補中藥小教室-2  黃耆🌱】',
      date: '2022年6月30日',
      content: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
      link: ''
    },
    {
      title: '15｜【食補中藥小教室-2  黃耆🌱】',
      date: '2022年6月30日',
      content: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
      link: ''
    }
  ]
})

const youtubeData = ref([
  {
    iframeLink: 'https://www.youtube.com/embed/yTM0WH8pV2U',
    watchTimes: '',
    date: '',
    title: '[ 顏社 ]- 自躁浪漫 (Official Music Video)',
    person: '李英宏 aka DJ Didilong (ft.李權哲 Jerry Li)'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
    watchTimes: '',
    date: '',
    title: '[ 台北紐約Taipei New York ] Official Music Video',
    person: '馬念先'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zbSW7aIzXRM',
    watchTimes: '',
    date: '',
    title: '[ 我還繞著你在旋轉 Expired ] Official Music Video',
    person: '宇宙人'

  },
  {
    iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
    watchTimes: '',
    date: '',
    title: '[ 台北紐約Taipei New York ] Official Music Video',
    person: '馬念先'
  },
])

const salonData ={
  img: '/salon/salon.jpg',
  title: '講座分享：環保與便利共存，打造永續新日常',
  intro: 'Miss Eco已經到達＿地方，與＿人分享，身為醫學生的我們....\n演講主題包含：健康、循環經濟...\n形式包含：企業會員料理工作坊、校園工作坊、企業內部健康促進講座...',
  link: ''
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
.life
  background-color: #FFFBED
  .custom-container
    padding: 40px 15% 40px 15%
    width: 100%
@media (max-width: 540px)
  .life
    .custom-container
      padding: 40px 10% 40px 10%

</style>