<template>
  <div class="slide">
    <div class="title-block">
        <Title :title="props.title"></Title>
    </div>
    <div class="slide-block">
        <div class="prev-btn">
            <q-icon name="chevron_left"/>
        </div>
        <swiper
            ref="el"
            :modules="[Navigation]"
            :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
            :slides-per-view="width>680 ? 3 : width>430 ? 2 : 1"
            :space-between="30"
            :scrollbar="{ draggable: true }"
        >
            <swiper-slide v-for="(item, index) in list" :key="index">
                <div class="img-block">
                    <img :src="item['img']" alt="">
                </div>
                <div class="intro">
                    <div class="slide-title">{{item['name']}}</div>
                    <div class="content">
                        <div v-for="(word, index) in item['text']" :key="index">
                            <span>{{word}}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="next-btn">
            <q-icon name="navigate_next"/>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import { useElementSize } from '@vueuse/core'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref, onMounted, computed } from 'vue';
interface Props {
  title?: string,
  list?: any
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  list: [
    {
      img: '',
      name: '',
      text: ''
    }
  ]
});
const dataList = ref([])
onMounted(()=>{
    dataList.value = props.list
})

const el = ref(null)
const { width } = useElementSize(el)

// const text = ref('推薦文字推薦文字推薦文字推薦文字')
// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.slide
    padding: 30px 0%
    background-color: #FFFBED
    justify-content: center
    // --swiper-theme-color: red
    .title-block
        width: 100%
        display: flex
        justify-content: center
    .slide-block
        display: flex
        
        .prev-btn
            display: flex
            align-items: center
            cursor: pointer
            .q-icon
                color: #acbeaf
                font-size: 50px
        .next-btn
            display: flex
            align-items: center
            cursor: pointer
            .q-icon
                color: #acbeaf
                font-size: 50px
        .swiper
            --swiper-navigation-size: 30px
            // padding: 50px 0px
            .swiper-slide
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
                .img-block
                    height: 200px
                    width: 200px
                    border-radius: 100%
                    overflow: hidden
                    margin-bottom: 20px
                    background-color: #d2d2d2
                    img
                        min-width: 100%
                        min-height: 100%
                        object-fit: cover
                .intro
                    display: flex
                    flex-direction: column
                    justify-content: center
                    align-items: center
                    .slide-title
                        font-size: 18px
                        margin-bottom: 15px
                        font-weight: 700
                    .content
                        display: flex
                        flex-wrap: wrap
                        max-width: 250px
                        div
                            height: 30px
                            span
                                height: 10px
                                background: #F2E7CE
                                padding: 0px 1px
                                font-weight: 500
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
@media (max-width: 840px)
    .slide
        padding: 30px 2%
</style>