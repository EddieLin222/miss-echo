<template>
  <div class="life">
    <!-- <Banner :bannerData="bannerData"></Banner> -->
    <div class="custom-container">
      <Podcast :podcastData="podcastData"></Podcast>
      <Youtube :youtubeData="youtubeData"></Youtube>
      <Salon :salonData="salonData"></Salon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue';
import Banner from "../components/banner/banner-2.vue"
import Podcast from "../components/posts/posts-2.vue"
import Youtube from "../components/video/video.vue"
import Salon from "../components/list/list4.vue"
import { useHead } from "@vueuse/head"
import { BannerType, PodcastType, SalonType, YoutubeType } from '@/types/life.type';
import { useFirestore } from '@vueuse/firebase';
import { db } from '@/common/firebase';

const bannerData = ref<BannerType>({
  webImg: '',
  mobileImg: ''
})

const podcastData = ref<PodcastType>({
  mainImg: '',
  intro: '',
  lists: []
})

const youtubeData = ref<YoutubeType[]>([])

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
  bannerData: BannerType,
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    bannerData.value = pageHomeData.value.bannerData;
    podcastData.value = pageHomeData.value.podcastData;
    youtubeData.value = pageHomeData.value.youtubeData;
    salonData.value = pageHomeData.value.salonData;
  }
})


// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return 'Miss Eco｜有意識生活'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return 'Miss Eco｜有意識生活'
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