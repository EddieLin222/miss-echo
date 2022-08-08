<template>
  <div class="boxs">
    <Title title="環保外送"></Title>
    <div class="boxs-container" v-if="width>=840">
        <a href="" v-for="(item, index) in data" :key="index">
            <q-responsive :ratio="1">
                <!-- <img src="" alt=""> -->
                <div class="title">{{item.name}}</div>
            </q-responsive>
        </a>
    </div>
    <div class="slide-block" v-else>
        <div class="prev-btn">
            <q-icon name="expand_circle_down"/>
        </div>
        <swiper
          :modules="[Navigation, Pagination]"
          :pagination="{ clickable: true }"
          :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
          :slides-per-view="2"
          :space-between="30"
        >
          <swiper-slide v-for="(list, index) in data" :key="index">
            <q-responsive ratio="1">
              <div class="img-block">{{list.name}}</div>
            </q-responsive>
          </swiper-slide>
        </swiper>
        <div class="next-btn">
            <q-icon name="expand_circle_down"/>
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
        img: '',
        name: '餐點宣傳1',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳2',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳3',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳4',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳5',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳6',
        link: ''
    }
])
// interface Props {
//   label?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   label: '',
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.boxs
    padding: 40px 20% 100px 20%
    background-color: #FFFBED
    display: flex
    flex-direction: column
    align-items: center
    .boxs-container
        display: flex
        width: 100%
        flex-wrap: wrap
        justify-content: space-between
        gap: 10px
        margin-top: 30px
        a
            width: calc(33% - 5px)
            background-color: #d9d9d9
        .q-responsive
            width: 100%
    .slide-block
        display: flex
        width: 100%
        margin-top: 30px
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
                        height: 200px
                        width: 100%
                        background-color: #d9d9d9
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