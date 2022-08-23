<template>
  <div class="life">
    <div class="custom-container">
      <Podcast :podcastData="podcastData"></Podcast>
      <Youtube :youtubeData="youtubeData"></Youtube>
      <Salon :salonData="salonData"></Salon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import Podcast from "../components/posts/posts-2.vue"
import Youtube from "../components/video/video.vue"
import Salon from "../components/list/list4.vue"
import { useHead } from "@vueuse/head"
import { PodcastType, SalonType, YoutubeType } from '@/types/life.type';
import { useFirestore } from '@vueuse/firebase';
import { db } from '@/common/firebase';


const podcastData = ref<PodcastType>({
  mainImg: '',
  intro: '',
  lists: [
    // {
    //   title: '15｜【食補中藥小教室-2  黃耆🌱】',
    //   date: '2022年6月30日',
    //   content: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
    //   link: ''
    // },
    // {
    //   title: '15｜【食補中藥小教室-2  黃耆🌱】',
    //   date: '2022年6月30日',
    //   content: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
    //   link: ''
    // }
  ]
})

const youtubeData = ref<YoutubeType[]>([
  // {
  //   iframeLink: 'https://www.youtube.com/embed/yTM0WH8pV2U',
  //   watchTimes: '',
  //   date: '',
  //   title: '[ 顏社 ]- 自躁浪漫 (Official Music Video)',
  //   person: '李英宏 aka DJ Didilong (ft.李權哲 Jerry Li)'
  // },
  // {
  //   iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
  //   watchTimes: '',
  //   date: '',
  //   title: '[ 台北紐約Taipei New York ] Official Music Video',
  //   person: '馬念先'
  // },
  // {
  //   iframeLink: 'https://www.youtube.com/embed/zbSW7aIzXRM',
  //   watchTimes: '',
  //   date: '',
  //   title: '[ 我還繞著你在旋轉 Expired ] Official Music Video',
  //   person: '宇宙人'

  // },
  // {
  //   iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
  //   watchTimes: '',
  //   date: '',
  //   title: '[ 台北紐約Taipei New York ] Official Music Video',
  //   person: '馬念先'
  // },
])

const salonData = ref<SalonType>({
  img: '',
  title: '',
  intro: '',
  link: ''
}) 



// Firestore
const pageHomeDB = db().collection('Page').doc('Life')
const pageHomeData = ref<{
  podcastData: PodcastType,
  youtubeData: YoutubeType[],
  salonData: SalonType,
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    podcastData.value = pageHomeData.value.podcastData;
    youtubeData.value = pageHomeData.value.youtubeData;
    salonData.value = pageHomeData.value.salonData;
  }
})


// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return 'Miss Eco｜有意識的生活，讓生活更有意思'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return 'Miss Eco｜有意識的生活，讓生活更有意思'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        return '歡迎來到Health impact意識生活，讓Summer與Solomon用5分鐘的時間與您分享醫學知識、飲食生活、環境自然、正念態度，各種建構健康藍圖的方法。'
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