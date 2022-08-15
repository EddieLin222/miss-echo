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

import { ref } from 'vue';

const list = [
  {
    img: '/promotion/promotion1.png',
    link: ''
  },
  // {
  //   img: '/promotion/promotion2.png',
  //   link: '/'
  // },
  {
    img: '/promotion/promotion3.png',
    link: ''
  },
  {
    img: '/promotion/promotion4.png',
    link: ''
  },
  {
    img: '/promotion/promotion5.png',
    link: ''
  },
  {
    img: '/promotion/promotion6.png',
    link: ''
  },
  {
    img: '/promotion/promotion7.png',
    link: ''
  }
]

const dataList = [
  {
    img: '/always/always1.png'
  },
  {
    img: '/always/always2.png'
  },
  {
    img: '/always/always3.png'
  },
  {
    img: '/always/always4.png'
  },
  {
    img: '/always/always5.png'
  },
  {
    img: '/always/always6.png'
  }
]

const stepData = [
  {
    img: '/step/step1.png',
    intro: '網站訂餐：\na. 2小時前訂餐，外送範圍為餐廳8.5公里內\nb. 使用線上金流：信用卡、LINE PAY'
  },
  {
    img: '/step/step2.png',
    intro: '取餐：\n由Miss Eco外送夥伴為您送餐'
  },
  {
    img: '/step/step3.png',
    intro: '清洗餐盒：\n淨空廚餘、軟海綿清洗油汙，自然風乾'
  },
  {
    img: '/step/step4.png',
    intro: '歸還餐盒：\n請於「四周內」歸還餐盒\na. 【自行歸還】：自行前往任意合作店家進行歸還\nb. 【外送夥伴歸還】：您可透過下一次訂餐，取餐時將上次的餐盒交還給外送夥伴，由夥伴協助到店家歸還唷'
  }
]

const faqData = [
  {
    title: '我要如何歸還循環餐盒呢？',
    intro: '<p>【方法1｜自行歸還】<br>於訂餐網站之首頁列表 ----> 點選 餐盒回收 ----> 點選 抵達合作店家歸還餐盒 ----> 選擇歸還數目、品項 ----> 點選 產生回收驗證碼 ----> 出示您的回收驗證碼(QRCODE)給店家掃描 ----> 完成歸還餐盒<br><br>【方法2｜外送夥伴歸還】<br>於訂餐網站下訂餐點 ----> 點選 結帳 ----> 點選 選擇這次要歸還的餐盒 ----> 選擇歸還數目、品項 ----> 點選 確認歸還 ----> 取餐時將餐盒歸還給外送夥伴 ----> 完成歸還餐盒</p>',
    open: false
  },
  {
    title: '循環餐盒衛生安全怎麼把關？',
    intro: '<p>平台依循衛福部食藥署的餐具良好清洗作業指引規範，與北市認證合格之廠商合作，並定期抽查合格清消餐廳之狀態，送驗SGS以把關衛生安全，維護循環餐具的清消環節。<br><br>衛福部規範：<a href="https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179">https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179</a><br>合作清洗廠商：<a href="http://www.songwei2015.com">http://www.songwei2015.com</a></p>',
    open: false
  }
]

const intro = 'Miss Eco環保外送平台與健康永續的餐飲業者合作，推廣低碳飲食，讓您輕鬆實踐永續飲食態度。包含在地小農餐點、醜蔬果、格外品；以原型食物入菜，健康水煮呈現，最純粹的料理方式；更棒的是，平台提供豐富多元的潮流蔬食，讓愛吃肉的你也能體驗美味新境界。希望在您照顧地球健康的同時也能吃得好，吃得健康！'
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
</style>