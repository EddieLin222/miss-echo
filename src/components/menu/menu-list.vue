<template>
  <div class="menu-area">
    <div class="more">{{props.listData.name}}</div>
    <div class="slide-block">
      <div :class="prev" class="prev-btn">
        <img src="/arrow/left.svg" alt="" class="arrow">
      </div>
      <swiper
        :modules="[Navigation]"
        :navigation="{ nextEl: `.${next}`, prevEl: `.${prev}` }"
        :slides-per-view="width < 1240 ? (props.listData.menu.length>=3 ? 3 : props.listData.menu.length) : width >= 1240 && width < 1400? (props.listData.menu.length >= 4 ? 4 : props.listData.menu.length) : (props.listData.menu.length >= 6 ? 6 : props.listData.menu.length)"
        :space-between="width > 780 ? 20 : 10"
        :scrollbar="{ draggable: true }"
        @click="handleClick"
      >
        <swiper-slide v-for="(item, index) in props.listData.menu" :key="index">
          <div class="img-block">
            <img :src="item.img" alt="">
          </div>
        </swiper-slide>
      </swiper>
      <div :class="next" class="next-btn">
        <img src="/arrow/right.svg" alt="" class="arrow">
      </div>
    </div>
    <div class="popup" :class="{show: isOpenPopup}">
      <div class="close-btn" @click="isOpenPopup = false">
        <q-icon name="cancel"></q-icon>
      </div>
      <div class="pop-block">
        <div class="prev-arrow">
          <img src="/arrow/left.svg" alt="" class="arrow">
        </div>
        <swiper
          v-if="isOpenPopup"
          :modules="[Navigation]"
          :navigation="{ nextEl: '.next-arrow', prevEl: '.prev-arrow' }"
          :slides-per-view="1"
          :space-between="20"
          :scrollbar="{ draggable: true }"
          :initialSlide="currentIndex"
          @active-index-change="handleChange"
        >
          <swiper-slide v-for="(list, index) in props.listData.menu" :key="index">
            <div class="img-block">
              <img :src="list.img" alt="">
            </div>
          </swiper-slide>
        </swiper>
        <div class="next-arrow">
          <img src="/arrow/right.svg" alt="" class="arrow">
        </div>
      </div>
      <div class="btn-block" v-if="currentIndex>=0">
        <QRouterLink class="btn" :to="props.listData.menu[currentIndex].link">我要訂餐</QRouterLink>
      </div>
    </div>
  </div>
</template>
<script  setup lang="ts">
import { nanoid } from 'nanoid';
import { ref, computed, watchEffect, onMounted } from 'vue';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useWindowSize } from '@vueuse/core'

const prev = 'prev'+nanoid();
const next = 'next'+nanoid();

const { width } = useWindowSize()


const currentIndex = ref(-1)
const isOpenPopup = ref(false)

const handleClick = (swiper: any) => {
  currentIndex.value = swiper.clickedIndex
  isOpenPopup.value = true
}

const handleChange = (swiper: any) => {
  currentIndex.value = swiper.realIndex
}

interface Props {
  listData?: any
}
const props = withDefaults(defineProps<Props>(), {
  listData: ()=> ({
    name: '',
    menu:[
      {
        img: '',
        link: ''
      }
    ]
  })
});
</script>

<style scoped lang="sass">
.menu-area
  padding: 30px 0px
  .more
    font-size: 20px
    font-weight: 500
  .slide-block
    display: flex
    padding: 15px 0px 20px 0px
    max-height: 40vh
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
  .popup
    display: flex
    flex-direction: column
    transition-duration: .3s
    position: fixed
    background-color: #DDEFE0
    height: 100vh
    height: calc(var(--vh, 1vh) * 100)
    width: 100%
    top: 0
    left: 0
    z-index: 9998
    padding: 100px 10%
    opacity: 0
    pointer-events: none
    .btn-block
      display: flex
      justify-content: center
      margin-top: 15px
      .btn
        background-color: #78A780
        color: #fff
        border-radius: 30px
        padding: 5px 18px
        font-size: 18px
    .close-btn
      display: inline-flex
      justify-content: flex-end
      cursor: pointer
      .q-icon
        font-size: 40px
    .pop-block
      display: flex
      height: calc(100% - 80px)
      align-items: center
      margin: 10px 0px 10px 0px
      .swiper
        height: 100%
        .swiper-slide
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          .img-block
            max-height: 100%
            max-width: 100%
            display: flex
            flex-direction: column
            justify-content: center
            align-items: center
            img
              // max-height: calc(100% - 80px)
              max-height: 100%
              max-width: 100%
              object-fit: contain
      .prev-arrow, .next-arrow
        display: flex
        align-items: center
        cursor: pointer
        padding: 15px
        .arrow
          width: 50px
          max-width: 50px
.show
  opacity: 1 !important
  pointer-events: auto !important

// @media (max-width: 960px)
//   .menu-area
//     .slide-block
//       .prev-btn, .next-btn
//         display: none
@media (max-width: 780px)
  .menu-area
    .arrow
      width: 30px !important
    .popup
      .pop-block
        .prev-arrow, .next-arrow
          display: none
</style>