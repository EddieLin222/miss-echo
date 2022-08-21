<template>
  <div class="home">
    <Banner :bannerData="bannerData"></Banner>
    <Intro
      :intro="intro"
      :growNumbers="growNumbers"
    ></Intro>
    <List :list="list"></List>
    <Slide
      v-if="personList && personList.length > 0"
      title="聽名人說，你想像的永續日常"
      :list="personList"
    ></Slide>
    <!-- <Carousel2></Carousel2>
    <Collapse></Collapse> -->
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/banner/banner-1.vue"
import Intro from "../components/intro/intro.vue"
import List from "../components/list/list.vue"
import Slide from "../components/slide/slide.vue"

// import Carousel2 from "../components/carousel/demo_2/carousel.vue"
// import Collapse from "../components/collapse/collapse-1.vue"
// import Container1 from "../components/container/container-1.vue"
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore';
import { BannerType, IntroductionType, GrowType, PostType, PersonType } from '@/types/home.type'

import { ref, watchEffect } from 'vue';

const bannerData = ref<BannerType>({
  webImg: '/banner/banner.png',
  mobileImg: '/banner/banner-m.png'
})

const intro = ref<IntroductionType>('')
// 'Miss Eco是全台首創的環保外送平台，與健康永續的餐飲業者合作，透過循環餐盒外送餐點，減少外送大量的一次性垃圾。\n我們相信人們，其實不是不環保、不愛海龜、討厭北極熊，或喜歡製造垃圾，而是生活中缺少自由選擇的權利。\nMiss Eco期待打造兼顧環保與便利的新選擇，與你共度永續新日常！'

const growNumbers = ref<GrowType[]>([])
//  [
//   {
//     title: '減少一次性垃圾',
//     number: 30000,
//     unit: '件'
//   },
//   {
//     title: '減少紙容器包裝',
//     number: 10000,
//     unit: '個'
//   },
//   {
//     title: '減少碳排量',
//     number: 8000,
//     unit: '公斤'
//   }
// ]

const list = ref<PostType[]>([])
// [
//   // 第四篇
//   {
//     title: '兩個醫學生的永續之路',
//     content: '嗨大家好，我們今年從實習醫院畢業了！並且順利考過國考取得醫師執照了。我們是Miss Eco環保外送的共同創辦人',
//     link: '/post/關於兩個醫學生的創業',
//     img: '/link/link1.jpg'
//   },
//   // 第三篇
//   {
//     title: '舉辦一場零廢棄的低碳饗宴吧！',
//     content: '什麼是低碳饗宴呢?永續當道之時，每場活動最重要的指標之一就是如何減碳、減廢，讓活動',
//     link: '/post/舉辦一場永續活動，零廢棄的低碳饗宴吧！',
//     img: '/link/link2.jpg'
//   },
//   // 第二篇
//   {
//     title: '全台首創環保外送',
//     content: 'Miss Eco是全台首創的環保外送平台，透過循環餐盒外送餐點，減少外送產生的大量一次性垃圾',
//     link: '/post/全台首創，環保外送！',
//     img: '/link/link3.jpg'
//   }
// ]

const personList = ref<PersonType[]>([])
// [
//   {
//     img: '/person/person1.jpg',
//     name: '唐鳳｜數位發展部 部長',
//     text: 'Be a good enough ancestor'
//   },
//   {
//     img: '/person/person2.jpg',
//     name: '鄭涵睿｜綠藤生機共同創辦人暨CEO',
//     text: '有意識的選擇'
//   },
//   {
//     img: '/person/person3.jpg',
//     name: '黃昭勇｜CSR@天下總編輯',
//     text: '永續不難，做就對了'
//   }
// ]


const pageHomeDB = db().collection('Page').doc('Home')
const pageHomeData = ref<{
  bannerData: BannerType,
  intro: IntroductionType,
  growNumberList: GrowType[],
  postList: PostType[],
  personList: PersonType[],
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    bannerData.value = pageHomeData.value.bannerData;
    intro.value = pageHomeData.value.intro;
    growNumbers.value = pageHomeData.value.growNumberList;
    list.value = pageHomeData.value.postList;
    personList.value = pageHomeData.value.personList;
  }
})
</script>

<style scoped lang="sass">
.slider-info
  position: absolute
  top: 0
  left: 0
  width: 100%
  max-height: 100%
  height: 100%
  img
    min-width: 100%
    height: 100%
    object-fit: cover
</style>
