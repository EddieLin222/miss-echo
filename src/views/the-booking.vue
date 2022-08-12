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

const serviceData = {
  partner: {
    img: '',
    info: '27+'
  },
  event: {
    img: '',
    info: '87'
  },
  reduce: {
    img: '',
    info: '??'
  }
}

const serviceIntro = [
  {
    title: '蔬食無肉日',
    content: '為您提供減碳數據\n養成員工環保習慣',
    img: '',
    link: ''
  },
  {
    title: '企業訂餐',
    content: '為您提供減碳數據\n養成員工環保習慣',
    img: '',
    link: ''
  },
  {
    title: '永續論壇/活動',
    content: '為您提供減碳數據\n養成員工環保習慣',
    img: '',
    link: ''
  }
]

const companyList = [
  {
    img: '../img.png',
    name: '企業名稱',
    text: '推薦文字推薦文字推薦文字推薦'
  },
  {
    img: '../img.png',
    name: '企業名稱',
    text: '推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦'
  },
  {
    img: '../img.png',
    name: '企業名稱',
    text: '推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦'
  }
]

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