<template>
  <div class="boxs">
    <Title :title="props.showTitle"></Title>
    <div class="boxs-container">
      <div class="box" v-for="(item, index) in data" :key="index" @click="handlePopup(index)">
        <q-responsive :ratio="1">
          <img class="bg" :src="item.img" alt="">
          <div class="mask"></div>
          <div class="front">
            <div class="space"></div>
            <h4>{{ item.subTitle }}</h4>
            <h3>{{ item.mainTitle }}</h3>
            <div class="btn">
              <img :src="ImageIcon" alt="">
              <p>more</p>
            </div>
          </div>
        </q-responsive>
        <!-- <div v-else>
          <q-responsive :ratio="1">
            <img :src="item.img" alt="">
          </q-responsive>
        </div> -->
      </div>
    </div>
  </div>
  <carousel-dialog :data="currentData" v-model="dialog"></carousel-dialog>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';

import CarouselDialog from '../../components/carousel-dialog.vue';
import Title from '../title/title-1.vue'
import { useWindowSize } from '@vueuse/core'

import Tableware1 from '../../assets/image/tableware-1.png'
import Tableware2 from '../../assets/image/tableware-2.png'
import Tableware3 from '../../assets/image/tableware-3.png'
import Tableware4 from '../../assets/image/tableware-4.png'
import Tableware5 from '../../assets/image/tableware-5.png'
import Tableware6 from '../../assets/image/tableware-6.png'

import ImageIcon from '../../assets/image/image.svg'

const { width } = useWindowSize()

const currentIndex = ref(0)

const currentData = computed(()=>{
  return data.value[currentIndex.value].imgs
})

const handlePopup = (index: number)=>{
  currentIndex.value = index
  // dialog.value = true
}

const data = ref([
  {
    img: Tableware1,
    name: '餐點宣傳1',
    mainTitle: '單格餐盒',
    subTitle: '復古款',
    imgs: [
      ''
    ]
  },
  {
    img: Tableware2,
    name: '餐點宣傳2',
    mainTitle: '三格餐盒',
    subTitle: '極簡款',
    imgs: [
      ''
    ]
  },
  {
    img: Tableware3,
    name: '餐點宣傳3',
    mainTitle: '不鏽鋼餐盒',
    subTitle: '奢華款',
    imgs: [
      ''
    ]
  },
  {
    img: Tableware4,
    name: '餐點宣傳4',
    mainTitle: '循環杯',
    subTitle: '霧面感',
    imgs: [
      ''
    ]
  },
  {
    img: Tableware5,
    name: '餐點宣傳5',
    mainTitle: '餐具',
    subTitle: '糖果色',
    imgs: [
      ''
    ]
  },
  {
    img: Tableware6,
    name: '餐點宣傳6',
    mainTitle: '',
    subTitle: '更多餐具 \n 敬請期待',
    imgs: [
      ''
    ]
  }
])
interface Props {
    showTitle?: string;
    list?: {
        img: string,
        link: string
    }[];
}
const props = withDefaults(defineProps<Props>(), {
    showTitle: '環保外送',
    list: () => []
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();

const dialog = ref(false)
</script>

<style scoped lang="sass">
.boxs
  padding: 40px 20% 100px 20%
  background-color: #FFFBED
  display: flex
  flex-direction: column
  align-items: center
  cursor: pointer
  // width: 100%
  .boxs-container
    display: flex
    width: 100%
    flex-wrap: wrap
    justify-content: space-between
    margin-top: 30px
    .box
      width: calc(33% - 5px)
      padding: 5px
      margin-top: 10px
    .q-responsive
      width: 100%
      position: relative
      overflow: hidden
      :deep() .q-responsive__content
        border-radius: 10px
        overflow: hidden
      img.bg
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
        object-fit: cover
      .mask
        position: absolute
        width: 100%
        height: 100%
        background-color: rgba(0, 0, 0, .1)
      .front
        font-size: 20px
        color: #fff
        font-weight: 700
        display: flex
        justify-content: center
        align-items: center
        position: relative
        flex-direction: column
        .space
          height: 45px
        h4
          font-size: 24px
          white-space: pre-line
        h3
          font-size: 32px
        .btn
          padding: 7px 30px 6px 30px
          display: flex
          align-items: center
          gap: 5px
          background-color: rgba(255, 255, 255, .8)
          border-radius: 30px
          margin-top: 20px
          opacity: 0
          transition-duration: .5s
          p
            color: #000
            transform: translateY(-3px)
        &:hover
          .btn
            opacity: 1
@media (max-width: 980px)
  .boxs
    .boxs-container
      .box
        width: calc(50% - 8px)
@media (max-width: 475px)
  .boxs
    .boxs-container
      .q-responsive
        .front
          padding: 10px
          h4
            font-size: 18px
            line-height: 24px
          h3
            font-size: 24px
            line-height: 40px
          .space
            display: none
          .btn
            margin-top: 10px
            display: none
</style>