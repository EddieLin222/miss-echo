<template>
  <div class="slide">
    <div class="title-block">
        <Title :title="props.title"></Title>
    </div>
    <div class="slide-block">
        <div class="prev-btn">
            <q-icon name="expand_circle_down"/>
        </div>
        <swiper
            :modules="[Navigation]"
            :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
            :slides-per-view="$q.screen.lt.sm ? 1 : $q.screen.lt.md ? 2 : 3"
            :space-between="30"
            :scrollbar="{ draggable: true }"
        >
            <swiper-slide v-for="(list, index) in dataList" :key="index">
                <div class="img-block"></div>
                <div class="intro">
                    <div class="title">{{list['name']}}</div>
                    <div class="content">
                        <div v-for="(word, index) in list['text']" :key="index">
                            <span>{{word}}</span>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
        <div class="next-btn">
            <q-icon name="expand_circle_down"/>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ref, onMounted } from 'vue';

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

// const text = ref('推薦文字推薦文字推薦文字推薦文字')

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.slide
    padding: 30px 10%
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
            .q-icon
                font-size: 35px
                transform: rotate(90deg)
        .next-btn
            display: flex
            align-items: center
            .q-icon
                font-size: 35px
                transform: rotate(-90deg)
        .swiper
            --swiper-navigation-size: 30px
            padding: 50px 0px
            .swiper-slide
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
                .img-block
                    height: 200px
                    width: 200px
                    border-radius: 100%
                    background-color: #d9d9d9
                    margin-bottom: 20px
                .intro
                    display: flex
                    flex-direction: column
                    justify-content: center
                    align-items: center
                    .title
                        font-size: 20px
                        margin-bottom: 15px
                        font-weight: 700
                    .content
                        display: flex
                        flex-wrap: wrap
                        width: 180px
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
</style>