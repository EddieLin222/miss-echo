<template>
  <div class="booking">
    <Service :serviceData="serviceData"></Service>
    <Intro :serviceIntro="serviceIntro"></Intro>
    <List :companyList="companyList"></List>
  </div>
</template>

<script setup lang="ts">
import Service from "../components/service/service.vue"
import Intro from "../components/intro/intro3.vue"
import List from "../components/list/list2.vue"
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore';
import { ref, watchEffect, computed } from "vue";
import { ServiceDataType, ServiceIntroType, CompanyType } from '@/types/booking.type'
import { useHead } from "@vueuse/head"


const serviceData = ref<ServiceDataType>({
  introduction: '',
  partner: {
    img: '',
    info: ''
  },
  event: {
    img: '',
    info: ''
  },
  reduce: {
    img: '',
    info: ''
  }
})

const serviceIntro = ref<ServiceIntroType[]>([])
const companyList = ref<CompanyType[]>([])

// Firestore
const pageHomeDB = db().collection('Page').doc('Booking')
const pageHomeData = ref<{
  serviceData: ServiceDataType,
  serviceIntro: ServiceIntroType[],
  companyList: CompanyType[],
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    serviceData.value = pageHomeData.value.serviceData;
    serviceIntro.value = pageHomeData.value.serviceIntro;
    companyList.value = pageHomeData.value.companyList;
  }
})
// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return '活動訂餐｜Miss Eco｜搭配健康永續餐點，舉辦一場零廢棄的低碳饗宴吧'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return '活動訂餐｜Miss Eco｜搭配健康永續餐點，舉辦一場零廢棄的低碳饗宴吧'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        const introduction = serviceData.value.introduction ?? 'Miss Eco是全台首創零廢棄環保外送服務，與健康永續的餐飲業者合作，透過循環餐具外送餐點，減少外送製造的大量一次性垃圾。'
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