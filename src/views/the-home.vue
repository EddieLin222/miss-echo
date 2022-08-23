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
import { computed, ref, watchEffect } from 'vue';
import { useHead } from "@vueuse/head"

const bannerData = ref<BannerType>({
  webImg: '/banner/banner.png',
  mobileImg: '/banner/banner-m.png'
})
const intro = ref<IntroductionType>('')
const growNumbers = ref<GrowType[]>([])
const list = ref<PostType[]>([])
const personList = ref<PersonType[]>([])

// Firestore
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
        return 'Miss Eco是全台首創零廢棄環保外送服務，與健康永續的餐飲業者合作，透過循環餐具外送餐點，減少外送製造的大量一次性垃圾。'
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
