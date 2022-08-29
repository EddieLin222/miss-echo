<template>
  <div class="banner">
    <img class="bg" :src="props.bannerData.webImg" alt="" v-if="width>=480">
    <img class="bg" :src="props.bannerData.mobileImg" alt="" v-else>
    <div class="banner-box">
      <div class="title-block">
        <div class="text-bg"></div>
        <h4 class="title">關於我們</h4>
      </div>
      <!-- <Title title="關於我們"></Title> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const bannerData = {
  webImg: "/banner/banner2.jpg",
}
interface Props {
  bannerData?: any;
}
const props = withDefaults(defineProps<Props>(), {
  bannerData: {
    webImg: '',
    mobileImg: ''
  },
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.banner
  display: flex
  justify-content: center
  align-items: center
  min-height: calc(100vh - 55px)
  min-width: 100%
  position: relative
  overflow: hidden
  .bg
    position: absolute
    width: 100%
    height: 100%
    min-height: 100%
    min-width: 100%
    object-fit: cover
  .banner-box
    position: absolute
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    bottom: 40px
    left: 80px
    .title-block
      position: relative
      display: inline-block !important
      margin-bottom: 5px
      font-weight: 900
      font-family: 'Noto Serif TC', serif
      width: auto !important
      .text-bg
        background-color: #C8EEC8
        position: absolute
        width: 100%
        height: 50%
        bottom: 0
      .title
        position: relative
        font-size: 24px
        line-height: 20px
        letter-spacing: 1px
        color: #fff
        text-shadow: #000 0.05em 0.05em 0.1em
@media (max-width: 1280px)
  .banner
    min-height: calc(60vh - 55px)
@media (max-width: 780px)
  .banner
    min-height: calc(80vh - 55px)
    
@media (max-width: 540px)
  .banner
    .banner-box
      left: 10%
      :deep() .title-block
        .bg
          background-color: #749279
        //   display: none
        .title
          color: #fff
</style>