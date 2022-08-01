<template>
  <div class="home">
    <Banner></Banner>
    <Intro></Intro>
    <List></List>
    <Slide></Slide>
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

import { ref } from 'vue';

const carouselItems = [
  {
    name: "bg-1",
    location: "./public/sliders/bg-1.jpeg"
  }, 
  { 
    name: "bg-2",
    location: "./public/sliders/bg-2.jpeg"
  },
  {
    name: "bg-3",
    location: "./public/sliders/bg-3.jpeg"
  }
];

const growNumbers = [
  {
    title: '減少一次性垃圾',
    number: 10000,
    unit: '件'
  },
  {
    title: '減少紙容器包裝',
    number: 3000,
    unit: '個'
  },
  {
    title: '減少碳排量',
    number: 5000,
    unit: '公斤'
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
