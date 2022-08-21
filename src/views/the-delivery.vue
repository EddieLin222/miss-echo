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

import { ref, watchEffect } from 'vue';
import { AlwaysIntroduction, AlwaysType, FaqType, PromotionType, StepType } from "@/types/delivery.type";

import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore'

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

</script>

<style scoped lang="sass">
</style>