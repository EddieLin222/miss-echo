<template>
  <div class="banner">
    <img class="bg" :src="props.bannerData.webImg" alt="" v-if="width>960">
    <img class="bg" :src="props.bannerData.mobileImg" alt="" v-else>
    <!-- <div class="banner-box">
      <div class="title">{{ bannerData.title }}</div>
      <div class="divider"></div>
      <div class="content">{{ bannerData.content }}</div>
    </div> -->
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
// const bannerData = {
//   title: "Cool Title",
//   content: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
//   link: "",
//   webImg: "/banner/banner.jpg",
//   mobileImg: "/banner/banner-m.jpg"
// }
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
    min-height: 100%
    min-width: 100%
    object-fit: cover
  .banner-box
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    width: 80%
    max-width: 500px
    color: #fff
    .title
      font-size: 36px
      font-weight: 900
    .content
      font-size: 20px
      font-weight: 900
</style>