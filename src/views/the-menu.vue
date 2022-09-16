<template>
  <div class="menu">
    <Title title="菜單介紹"></Title>
    <!-- <Banner :bannerData="bannerData"></Banner> -->
    <div class="custom-container">
      <div class="main" @click="setIndex(0)">
        <img :src="menuList[0].img" alt="">
        <div class="intro">
          <div class="title">標題標題標題</div>
          <div class="content">介紹介紹介紹介紹介紹介紹介紹介紹介紹介紹</div>
        </div>
      </div>
      <div class="more">更多菜單</div>
      <div class="slide-block">
        <div class="prev-btn">
          <img src="/arrow/left.svg" alt="" class="arrow">
        </div>
        <swiper
          :modules="[Navigation]"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
          :slides-per-view="width < 1240 ? (smallList.length>=3 ? 3 : smallList.length) : width >= 1240 && width < 1400? (smallList.length >= 4 ? 4 : smallList.length) : (smallList.length >= 6 ? 6 : smallList.length)"
          :space-between="10"
          :scrollbar="{ draggable: true }"
          @click="handleClick"
        >
          <swiper-slide
            v-for="(list, index) in smallList"
            :key="index"
          >
            <div  class="img-block">
              <img :src="list.img" alt="">
            </div>
          </swiper-slide>
        </swiper>
        <div class="next-btn">
          <img src="/arrow/right.svg" alt="" class="arrow">
        </div>
      </div>
    </div>
    <div class="popup" :class="{show: isOpenPopup}">
      <div class="close-btn" @click="isOpenPopup = false">
        <q-icon name="cancel"></q-icon>
      </div>
      <div class="pop-block">
        <div class="prev-btn">
          <img src="/arrow/left.svg" alt="" class="arrow">
        </div>
        <swiper v-if="isOpenPopup"
          :modules="[Navigation]"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn' }"
          :slides-per-view="1"
          :space-between="30"
          :scrollbar="{ draggable: true }"
          :initialSlide="currentIndex"
        >
          <swiper-slide
            v-for="(list, index) in menuList"
            :key="index"
          >
            <div class="img-block">
              <img :src="list.img" alt="">
            </div>
          </swiper-slide>
        </swiper>
        <div class="next-btn">
          <img src="/arrow/right.svg" alt="" class="arrow">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "../components/title/title-1.vue"
import { ref, computed, watchEffect } from 'vue';
import { useHead } from "@vueuse/head"

import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const currentIndex = ref(0)
const isOpenPopup = ref(false)

const menuList = ref([
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
  },
  {
    img: '/always/always1.png'
  },
  {
    img: '/always/always2.png'
  }
])

const smallList = computed(()=>{
  const result = menuList.value.filter((e, i)=>i!==0)
  return result
})

const setIndex = (index: number) => {
  currentIndex.value = index
  isOpenPopup.value = true
  console.log(index)
}

const handleClick = (swiper: any) => {
  currentIndex.value = swiper.clickedIndex + 1
  isOpenPopup.value = true
  console.log(currentIndex.value)
} 


// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return 'Miss Eco｜菜單介紹'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return 'Miss Eco｜菜單介紹'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        return '歡迎來到Health impact意識生活，讓Summer與Solomon用5分鐘的時間與您分享醫學知識、飲食生活、環境自然、正念態度，各種建構健康藍圖的方法。'
      }),
    },
    {
      property: `og:image`,
      content: computed(() => {
        return 'https://missecotw.com/logo/logo.png'
      }),
    },
  ],
})

</script>

<style scoped lang="sass">
.menu
  background-color: #FFFBED
  height: calc(100vh - 56px)
  padding: 60px 100px
  position: relative
  .popup
    display: flex
    flex-direction: column
    transition-duration: .3s
    position: fixed
    background-color: #DDEFE0
    height: 100vh
    width: 100%
    top: 0
    left: 0
    z-index: 9998
    padding: 100px 60px
    opacity: 0
    pointer-events: none
    .close-btn
      display: inline-flex
      justify-content: flex-end
      margin-bottom: 30px
      .q-icon
        font-size: 40px
    .pop-block
      display: flex
      height: calc(100% - 70px)
      align-items: center
      .swiper
        height: 100%
        .swiper-slide
          display: flex
          flex-direction: column
          justify-content: flex-start
          align-items: center
          .img-block
            width: 100%
            height: 100%
            display: flex
            justify-content: center
            align-items: center
            img
              height: 100%
              max-height: 100%
              max-width: 100%
              // object-fit: contain
      .prev-btn, .next-btn
        display: flex
        align-items: center
        cursor: pointer
        padding: 15px
        .arrow
          width: 50px
          max-width: 50px
  .custom-container
    margin-top: 20px
    height: 100%
    .more
      font-size: 18px
      margin: 20px 0px 10px 0px
    .main
      height: 50%
      overflow: hidden
      position: relative
      img
        position: absolute
        object-fit: cover
        min-width: 100%
        min-height: 100%
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      .intro
        position: absolute
        color: #fff
        top: 50%
        left: 30px
        transform: translateY(-50%)
        max-width: calc(100% - 60px)
        pointer-events: none
        .title
          font-size: 28px
          font-weight: 700
          margin-bottom: 5px
          text-shadow: 1px 1px 2px black
        .content
          font-size: 20px
          font-weight: 700
          text-shadow: 1px 1px 2px black
    .slide-block
      display: flex
      height: calc(50% - 60px)
      padding: 0px 0px 20px 0px
      .prev-btn
        display: flex
        align-items: center
        cursor: pointer
        padding: 15px
        .arrow
          width: 50px
          max-width: 50px
      .next-btn
        display: flex
        align-items: center
        cursor: pointer
        padding: 15px
        .arrow
          width: 50px
          max-width: 50px
      .swiper
        --swiper-navigation-size: 30px
        .swiper-slide
          display: flex
          flex-direction: column
          justify-content: flex-start
          align-items: center
          .img-block
            display: flex
            height: 100%
            width: 100%
            overflow: hidden
            background-color: #d2d2d2
            img
              min-width: 100%
              min-height: 100%
              object-fit: cover
        :deep() .swiper-button-prev
          padding: 20px
          color: #000
          font-weight: 900
        :deep() .swiper-button-disabled
          opacity: 1
        :deep() .swiper-button-next
          padding: 20px
          color: #000
          font-weight: 900
.show
  opacity: 1 !important
  pointer-events: auto !important
@media (max-width: 960px)
  .menu
    .custom-container
      .slide-block
        .prev-btn, .next-btn
          display: none

@media (max-width: 780px)
  .menu
    padding: 70px 15%
    .custom-container
      .main
        height: 60%
      .slide-block
        height: calc(40% - 60px)
    .arrow
      width: 30px !important
@media (max-width: 580px)
  .menu
    padding: 60px 10%
@media (max-width: 440px)
  .menu
    .prev-btn, .next-btn
      display: none !important
</style>