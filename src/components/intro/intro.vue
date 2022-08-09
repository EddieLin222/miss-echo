<template>
  <div class="intro-container">
    <div class="intro-box">
      <Title title="環保外送"></Title>
      <!-- <h1 class="title">環保外送</h1> -->
      <div class="content">
        <img class="bg" src="/intro/bg2.png" alt="">
        <div class="text">
          <p>
            Miss Eco是全台首創的環保外送平台，與健康永續的餐飲業者合作，透過循環餐盒外送餐點，減少外送大量的一次性垃圾。
            <br>我們相信人們，其實不是不環保、不愛海龜、討厭北極熊，或喜歡製造垃圾，而是生活中缺少自由選擇的權利。
            <br>環境議題不該總是站在便利生活的對立面。Miss Eco期待打造兼顧環保與便利的新選擇，與您一起共創永續新日常！
          </p>
        </div>
        <div class="leaf">
          <img src="/intro/leaf.svg" alt="">
        </div>
      </div>
    </div>
    <div class="intro-box number-grow">
      <NumberGrow v-for="(item, index) in growNumbers" :key="index" :number="item.number" :title="item.title" :unit="item.unit"></NumberGrow>
    </div>
  </div>
</template>
<script setup lang="ts">
import NumberGrow from "../effect/number-grow.vue"
import Title from "../title/title-1.vue"
import { ref, onMounted } from 'vue';

const growNumbers = [
  {
    title: '減少一次性垃圾',
    number: 25000,
    unit: '件'
  },
  {
    title: '減少紙容器包裝',
    number: 8000,
    unit: '個'
  },
  {
    title: '減少碳排量',
    number: 5000,
    unit: '公斤'
  }
]


// interface Props {
//   time?: number,
//   value?: number
// }
// const props = withDefaults(defineProps<Props>(), {
//   time: 2,
//   value: 5000
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.intro-container
  width: 100%
  display: flex
  align-items: stretch
  padding: 8%
  background-color: #FFFBED
  .intro-box
    flex: 1
    display: flex
    flex-direction: column
    align-items: flex-start
    padding: 10px 40px
    .content
      position: relative
      height: 100%
      margin-top: 15px
      padding: 15px
      .bg
        display: block
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        width: 100%
        height: 100%
        min-height: 100%
        min-width: 100%
      .text
        height: 100%
        display: flex
        align-items: center
        padding: 30px 40px
        p
          position: relative
          letter-spacing: 1px
          line-height: 30px
          color: #fff
      .leaf
        position: absolute
        height: 40%
        right: 0
        bottom: 0
        transform: translateX(60%)
        img
          height: 100%
          transform: rotate(5deg)

@media(max-width: 960px)
  .intro-container
    flex-direction: column
    .intro-box
      padding: 20px 40px
      .content
        padding: 20px
        .leaf
          height: auto
          width: 25%
          max-width: 80px
          transform: translateX(40%)
    .number-grow
      display: flex
      flex-direction: row
      justify-content: center
      margin-top: 30px

@media(max-width: 720px)
  .intro-container
    padding: 8% 2%
    .number-grow
      flex-direction: column
      align-items: center
</style>