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
    img: '/service/service1.png',
    info: '27+'
  },
  event: {
    img: '/service/service2.png',
    info: '87'
  },
  reduce: {
    img: '/service/service3.png',
    info: '??'
  }
}

const serviceIntro = [
  // 第五篇
  {
    title: '蔬食無肉日',
    tags: ['#循環餐盒外送', '#多元潮流美味蔬食', '#訂閱服務', '#免清洗當日回收'],
    img: '/service/intro1.jpg',
    link: ''
  },
  // 第一篇
  {
    title: '企業訂餐',
    tags: ['#循環餐盒外送', '#健康水煮餐盒', '#精緻會議餐盒', '#免清洗當日回收'],
    img: '/service/intro2.jpg',
    link: ''
  },
  // 第三篇
  {
    title: '永續論壇/活動',
    tags: ['#循環餐盒外送', ' #下午茶輕食', '#工作坊午餐', '#免清洗當日回收'],
    img: '/service/intro3.jpg',
    link: ''
  }
]

const companyList = [
  {
    img: '/service/company1.png',
    name: '天下雜誌',
    text: '感謝Miss Eco讓我們締造永續活動的創舉，完成一場低碳饗宴的論壇。'
  },
  {
    img: '/service/company2.jpg',
    name: '綠藤生機',
    text: '謝謝你們提供這麼好的服務，每次收到糖果色的餐盒都像在拆禮物一樣，期待今天吃的是什麼。'
  },
  {
    img: '/service/company3.png',
    name: '循環台灣基金會',
    text: '謝謝你們讓參與永續工作坊的學員能夠親身體驗，如何從日常減廢、循環，回扣課程的核心價值。'
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