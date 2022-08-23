<template>
  <div class="delivery">
    <Boxs :list="list"></Boxs>
    <Intro :intro="intro" :dataList="dataList"></Intro>
    <Step :stepData="stepData"></Step>
    <Faq :faqData="faqData"></Faq>
  </div>
</template>

<script setup lang="ts">
import Boxs from "../components/boxs/boxs.vue"
import Intro from "../components/intro/intro2.vue"
import Step from "../components/step/step.vue"
import Faq from "../components/faq/faq.vue"

import { ref, watchEffect, computed } from 'vue';
import { AlwaysIntroduction, AlwaysType, FaqType, PromotionType, StepType } from "@/types/delivery.type";

import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { useHead } from "@vueuse/head"

const list = ref<PromotionType[]>([])
const intro = ref<AlwaysIntroduction>('')
const dataList = ref<AlwaysType[]>([])
const stepData = ref<StepType[]>([])
const faqData = ref<FaqType[]>([])


// Firestore
const pageHomeDB = db().collection('Page').doc('Delivery')
const pageHomeData = ref<{
    promotionList: PromotionType[],
    alwaysIntroduction: AlwaysIntroduction,
    alwaysList: AlwaysType[],
    stepList: StepType[],
    faqList: FaqType[],
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
    if (pageHomeData.value) {
        list.value = pageHomeData.value.promotionList;
        intro.value = pageHomeData.value.alwaysIntroduction;
        dataList.value = pageHomeData.value.alwaysList;
        stepData.value = pageHomeData.value.stepList;
        faqData.value = pageHomeData.value.faqList;
    }
})
// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return '環保外送｜Miss Eco｜點一份您的餐點，一份地球的健康'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return '環保外送｜Miss Eco｜點一份您的餐點，一份地球的健康'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        const introduction = intro.value ?? 'Miss Eco環保外送平台與健康永續的餐飲業者合作，推廣低碳飲食，讓您輕鬆實踐永續飲食態度。包含在地小農餐點、醜蔬果、格外品；以原型食物入菜，健康水煮呈現，最純粹的料理方式；更棒的是，平台提供豐富多元的潮流蔬食，讓愛吃肉的你也能體驗美味新境界。希望在您照顧地球健康的同時也能吃得好，吃得健康！'
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
</style>