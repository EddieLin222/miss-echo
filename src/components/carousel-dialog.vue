<template>
  <q-dialog class="carousel-dialog" :style="{'z-index': 9999}" >
    <div class="content bg-white !rounded-[10px]">
      <div class="q-pa-md">
        <q-responsive :ratio="16/9" :style="[carouselSize.height, carouselSize.width]" v-if="windowWidth>1024">
          <q-carousel
            v-if="props.data"
            animated
            v-model="slide"
            arrows
            :navigation="props.data.length>1?true : false"
            infinite
          >
            <template v-for="img, i in props.data">
              <q-carousel-slide :name="1" :img-src="img" />
            </template>

          </q-carousel>
        </q-responsive>
        <q-responsive :ratio="9/16" :style="[carouselMobileSize.height, carouselMobileSize.width]" v-else>
          <q-carousel
            v-if="props.data"
            animated
            v-model="slide"
            arrows
            :navigation="props.data.length>1?true : false"
            infinite
          >
            <template v-for="img, i in props.mobileData">
              <q-carousel-slide :name="1" :img-src="img" />
            </template>

          </q-carousel>
        </q-responsive>
        <q-btn class="bottom" v-close-popup>
          關閉
        </q-btn>
      </div>
    </div>
  </q-dialog>
</template>
<script setup lang="ts">
import Title from '../components/title/title-1.vue'
import { useWindowSize } from '@vueuse/core'
import { computed, ref } from 'vue';
interface Props {
  data?: string[];
  mobileData?: string[];
}
const props = defineProps<Props>();
const slide = ref(1)
const { width: windowWidth, height: windowHeight } = useWindowSize();
const carouselSize = computed(()=>{
  if(windowWidth.value/16 > windowHeight.value/9 ) {
    return {
      height: `height: ${windowHeight.value - windowHeight.value/5 - 60}px`,
      width: `width: ${(windowHeight.value - windowHeight.value/5 - 60)/9*16}px`
    }
  }else{
    return {
      width: `width: ${windowWidth.value - windowWidth.value/5}px`,
      height: `height: ${(windowWidth.value - windowWidth.value/5)/16*9}px`
    }
  }
  
})
const carouselMobileSize = computed(()=>{
  if(windowWidth.value/9 > windowHeight.value/16 ) {
    return {
      height: `height: ${windowHeight.value - windowHeight.value/5 - 60}px`,
      width: `width: ${(windowHeight.value - windowHeight.value/5 - 60)/16*9}px`
    }
  }else{
    return {
      width: `width: ${windowWidth.value - windowWidth.value/5}px`,
      height: `height: ${(windowWidth.value - windowWidth.value/5)/9*16}px`
    }
  }
  
})
</script>
<style lang="sass">
.carousel-dialog
  background-color: rgba(0, 0, 0, .7)
  .q-dialog__inner--minimized > div
    max-width: none !important
    max-height: calc(100vh - 40px) !important
  .bottom
    width: 100%
    background-color: #749279
    color: #fff
    font-size: 16px
  .title-area
    display: flex
    justify-content: center
    padding: 30px 0px
  .title-block
    position: relative
    display: inline-block !important
    margin-bottom: 5px
    font-weight: 900
    font-family: 'Noto Serif TC', serif
    width: auto !important
    .bg
      background-color: #C8EEC8
      position: absolute
      width: 100%
      height: 50%
      bottom: 0
    .title
      position: relative
      font-size: 24px
      line-height: 24px
      letter-spacing: 1px
  .text-content
    padding: 0px 50px
  ol
    list-style: decimal !important
    li
      font-size: 16px
      font-weight: 500
      margin: 5px 0px
</style>