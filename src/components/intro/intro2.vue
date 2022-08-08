<template>
  <div class="intro-container">
    <div class="intro-box">
      <Title title="永續健康餐點"></Title>
      <!-- <h1 class="title">環保外送</h1> -->
      <div class="content">
        <div class="high-light">
          <div class="bg"></div>
          <p>
            "點一份您的餐點，一份地球的健康。"
          </p>
        </div>
        <div class="text">
          <p>
            Miss Eco是全台首創的環保外送平台，與健康永續的餐飲業者合作，透過循環餐盒外送餐點，減少外送大量的一次性垃圾。
            <br>我們相信人們，其實不是不環保、不愛海龜、討厭北極熊，或喜歡製造垃圾，而是生活中缺少自由選擇的權利。
            <br>環境議題不該總是站在便利生活的對立面。Miss Eco期待打造兼顧環保與便利的新選擇，與您一起共創永續新日常！
          </p>
        </div>
      </div>
    </div>
    <div class="intro-box">
      <div class="slide-block">
        <!-- <div class="prev-btn">
            <q-icon name="expand_circle_down"/>
        </div> -->
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ clickable: true }"
          navigation
          :slides-per-view="1"
          :space-between="30"
        >
          <swiper-slide v-for="(list, index) in dataList" :key="index">
            <q-responsive ratio="1">
              <div class="img-block"></div>
            </q-responsive>
          </swiper-slide>
        </swiper>
        <!-- <div class="next-btn">
            <q-icon name="expand_circle_down"/>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Title from "../title/title-1.vue"
import { ref, onMounted } from 'vue';

const dataList = ref([
  {
    img: '',
    name: '唐鳳',
    text: '推薦文字推薦文字推薦文字推薦文字'
  },
  {
    img: '',
    name: '唐鳳',
    text: '推薦文字推薦文字推薦文字推薦文字'
  },
  {
    img: '',
    name: '唐鳳',
    text: '推薦文字推薦文字推薦文字推薦文字'
  },
  {
    img: '',
    name: '唐鳳',
    text: '推薦文字推薦文字推薦文字推薦文字'
  }
])

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
  padding: 0px 10% 80px 10%
  background-color: #FFFBED
  gap: 40px
  .intro-box
    flex: 1
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    // padding: 10px 40px
    .content
      position: relative
      margin-top: 15px
      .high-light
        position: relative
        display: inline-block
        margin-bottom: 10px
        .bg
          width: 100%
          height: 100%
          bottom: 0
          position: absolute
          background-color: #F2E7CE
        p
          padding: 0px 5px
          position: relative
      .text
        p
          line-height: 28px
    .slide-block
      display: flex
      width: 40vw
      .swiper
        --swiper-navigation-size: 30px
        width: 100%
        .swiper-slide
          display: flex
          flex-direction: column
          justify-content: flex-start
          align-items: center
          .q-responsive
            width: 100%
            .img-block
              height: 200px
              width: 100%
              background-color: #d9d9d9
        :deep() .swiper-button-prev
          padding: 20px
          color: #ACBEAF
          font-weight: 900
        :deep() .swiper-button-disabled
          opacity: 1
        :deep() .swiper-button-next
          padding: 20px
          color: #ACBEAF
          font-weight: 900
        :deep() .swiper-pagination-bullet
          background-color: #fff
          transition-duration: .5s
          opacity: 1
        :deep() .swiper-pagination-bullet-active
          width: 15px
          border-radius: 5px
@media (max-width: 800px)
  .intro-container
    flex-direction: column
    .intro-box
      .slide-block
        width: 84vw
</style>