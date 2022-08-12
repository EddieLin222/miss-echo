<template>
  <div class="boxs">
    <div class="boxs-container" v-if="width>=840">
        <div class="box" v-for="(item, index) in data" :key="index">
            <q-responsive :ratio="(index == 0 || index == 3 || index == 4) ? 16/18 : 16/10">
            </q-responsive>
            <div class="card-bottom">
                <div class="text">
                    {{item.name}}
                </div>
                <a href="" class="more">
                    閱讀更多
                    <q-icon name="arrow_circle_right" class="material-icons-outlined"></q-icon>
                </a>
            </div>
        </div>
    </div>
    <div class="slide-block" v-else>
        <div class="prev-btn">
            <q-icon name="chevron_left"/>
        </div>
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ clickable: true }"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
          :slides-per-view="$q.screen.lt.sm ? 1 : $q.screen.lt.md ? 2 : 3"
          :space-between="30"
        >
          <swiper-slide v-for="(list, index) in props.list" :key="index">
            <q-responsive ratio="1">
              <div class="img-block">
                <img :src="list.img" alt="">
              </div>
            </q-responsive>
          </swiper-slide>
        </swiper>
        <div class="next-btn">
            <q-icon name="chevron_right"/>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from '../title/title-1.vue'
import { useWindowSize } from '@vueuse/core'

import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const { width } = useWindowSize()

const data = ref([
    {
        img: '/promotion/promotion1.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代文字替代文字',
        link: '/'
    },
    {
        img: '/promotion/promotion2.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
        link: '/'
    },
    {
        img: '/promotion/promotion3.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代代文字替代文字替代文字文字替代文字替代文字替代',
        link: '/'
    },
    {
        img: '/promotion/promotion4.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
        link: '/'
    },
    {
        img: '/promotion/promotion5.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字',
        link: '/'
    },
    {
        img: '/promotion/promotion6.jpg',
        name: '替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字替代文字文字替代文字替代文字替代文字替代文字',
        link: '/'
    }
])
interface Props {
  list?: any;
}
const props = withDefaults(defineProps<Props>(), {
    list: [
        {
            img: '',
            name: '',
            link: ''
        }
    ]
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.boxs
    padding: 40px 15% 40px 15%
    background-color: #FFFBED
    display: flex
    flex-direction: column
    align-items: center
    // height: calc(100vh - 56px)
    .boxs-container
        display: grid
        width: 100%
        height: 100%
        gap: 15px
        margin-top: 30px
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr
        grid-template-columns: 1fr 1fr 1fr
        .box
            background-color: #fff
            border-radius: 3px
            overflow: hidden
            .q-responsive
                background-color: #d2d2d2
                width: 100%
            .card-bottom
                padding: 15px
                .text
                    margin-bottom: 10px
                    display: -webkit-box
                    -webkit-box-orient: vertical
                    -webkit-line-clamp: 2
                    overflow: hidden
                    font-size: 16px
                .more
                    color: #78A780
                    font-size: 16px
                
        .box:first-child, .box:nth-child(4), .box:nth-child(5)
            grid-row: auto / span 3
        .box:nth-child(2), .box:nth-child(3), .box:nth-child(6)
            grid-row: auto / span 2
        // .q-responsive
        //     width: 100%
        //     position: relative
        //     overflow: hidden
        //     img
        //         position: absolute
        //         top: 50%
        //         left: 50%
        //         transform: translate(-50%, -50%)
        //         object-fit: cover
    .slide-block
        display: flex
        width: 100%
        margin-top: 30px
        .prev-btn
            display: flex
            align-items: center
            .q-icon
                font-size: 35px
                color: #acbeaf
        .next-btn
            display: flex
            align-items: center
            .q-icon
                font-size: 35px
                color: #acbeaf

        .swiper
            --swiper-navigation-size: 30px
            width: 100%
            display: flex
            flex-direction: column
            margin: 0px 15px
            .swiper-slide
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: center
            
                .q-responsive
                    width: 100%
                    .img-block
                        min-width: 100%
                        min-height: 100%
                        background-color: #d9d9d9
                        overflow: hidden
                        img
                            min-width: 100%
                            min-height: 100%
                            object-fit: cover
            :deep() .swiper-pagination
                position: relative
                bottom: 0px
                margin-top: 5px
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
                background-color: #78A780
                transition-duration: .5s
                opacity: 1
            :deep() .swiper-pagination-bullet-active
                width: 15px
                border-radius: 5px
@media (max-width: 840px)
    .boxs
        padding: 40px 8% 100px 8%

</style>