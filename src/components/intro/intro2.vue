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
          <p v-html="props.intro"></p>
        </div>
      </div>
    </div>
    <div class="intro-box">
      <div class="slide-block">
        <div class="prev-btn">
          <img src="/arrow/left.svg" alt="">
        </div>
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{clickable: true}"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
          :slides-per-view="1"
          :space-between="30"
        >
          <swiper-slide v-for="(list, index) in props.dataList" :key="index">
            <q-responsive ratio="1">
              <div class="img-block">
                <img :src="list.img" alt="">
              </div>
            </q-responsive>
          </swiper-slide>
        </swiper>
        <div class="next-btn">
            <img src="/arrow/right.svg" alt="">
        </div>
      </div>
    </div>
    <img class="bird" src="/intro/bird.svg" alt=""/>
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

interface Props {
  intro?: string,
  dataList?: any
}
const props = withDefaults(defineProps<Props>(), {
  intro: '',
  dataList: [
    {
      img: ''
    }
  ]
});

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
  position: relative
  .bird
    position: absolute
    z-index: 1
    bottom: 8%
    left: 50%
    height: 40%
    transform: translateX(-50%)
  .intro-box
    flex: 1
    display: flex
    flex-direction: column
    align-items: flex-start
    justify-content: center
    position: relative
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
      .prev-btn
        display: flex
        align-items: center
        cursor: pointer
        .q-icon
          font-size: 35px
          transform: rotate(90deg)
      .next-btn
        display: flex
        align-items: center
        cursor: pointer
        .q-icon
          font-size: 35px
          transform: rotate(-90deg)
      .swiper
        --swiper-navigation-size: 30px
        width: 100%
        margin: 0px 15px
        .swiper-slide
          display: flex
          flex-direction: column
          justify-content: flex-start
          align-items: center
          .q-responsive
            width: 100%
            .img-block
              height: 100%
              width: 100%
              img
                object-fit: cover
                min-height: 100%
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
@media (max-width: 1280px)
  .intro-container
    .bird
      display: none
@media (max-width: 800px)
  .intro-container
    flex-direction: column
    .intro-box
      .slide-block
        width: 100%
</style>