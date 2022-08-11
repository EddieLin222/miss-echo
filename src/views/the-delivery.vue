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
    img: '/promotion/promotion1.jpg',
    link: '/'
  },
  {
    img: '/promotion/promotion2.jpg',
    link: '/'
  },
  {
    img: '/promotion/promotion3.jpg',
    link: '/'
  },
  {
    img: '/promotion/promotion4.jpg',
    link: '/'
  },
  {
    img: '/promotion/promotion5.jpg',
    link: '/'
  },
  {
    img: '/promotion/promotion6.jpg',
    link: ''
  }
]

const dataList = [
  {
    img: '/always/always1.jpg'
  },
  {
    img: '/always/always2.jpg'
  },
  {
    img: '/always/always3.jpg'
  },
  {
    img: '/always/always4.jpg'
  }
]

const stepData = [
  {
    img: '/step/step1.png',
    intro: '<p>前一天至 miss eco 網站訂餐<br>外送範圍 : 距離店家7km<br>線上付款 : 信用卡、Line Pay</p>'
  },
  {
    img: '/step/step2.png',
    intro: '<p>等待外送夥伴送達餐點<br>全程 "0接觸" 取餐</p>'
  },
  {
    img: '/step/step3.png',
    intro: '<p>食用完畢清洗餐盒<br>放置陰涼處風乾</p>'
  },
  {
    img: '/step/step4.png',
    intro: '<p>➊ 四週內歸還上次的餐盒<br>➋ 於下次訂餐歸還給外送夥伴或自行到合作店家歸還。</p>'
  }
]

const faqData = [
  {
    title: '我要如何歸還循環餐盒呢？',
    intro: '<p>【方法1｜自行歸還】於訂餐網站之首頁列表 > 點選 餐盒回收 > 點選 抵達合作店家歸還餐盒 > 選擇歸還數目、品項 > 點選 產生回收驗證碼 > 出示您的回收驗證碼(QRCODE)給店家掃描 > 完成歸還餐盒<br><br>【方法2｜外送夥伴歸還】於訂餐網站下訂餐點 > 點選 結帳 > 點選 選擇這次要歸還的餐盒 > 選擇歸還數目、品項 > 點選 確認歸還 > 取餐時將餐盒歸還給外送夥伴 > 完成歸還餐盒</p>',
    open: false
  },
  {
    title: '循環餐盒衛生安全怎麼把關？',
    intro: '<p>平台依循衛福部食藥署的餐具良好清洗作業指引規範，與北市認證合格之廠商合作，並定期抽查合格清消餐廳之狀態，送驗SGS以把關衛生安全，維護循環餐具的清消環節。<br><br>參考資料<br>衛福部規範：<a href="https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179">https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179</a><br>合作清洗廠商：<a href="http://www.songwei2015.com">http://www.songwei2015.com</a></p>',
    open: false
  }
]

const intro = 'Miss Eco是全台首創的環保外送平台，與健康永續的餐飲業者合作，透過循環餐盒外送餐點，減少外送大量的一次性垃圾。<br>我們相信人們，其實不是不環保、不愛海龜、討厭北極熊，或喜歡製造垃圾，而是生活中缺少自由選擇的權利。<br>環境議題不該總是站在便利生活的對立面。Miss Eco期待打造兼顧環保與便利的新選擇，與您一起共創永續新日常！'
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