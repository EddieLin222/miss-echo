<template>
    <div class="boxs">
        <Title :title="props.showTitle"></Title>
        <div class="boxs-container" v-if="width >= 840">
            <div class="box" v-for="(item, index) in props.list" :key="index">
                <QRouterLink :to="item.link" v-if="item.link != ''">
                    <q-responsive :ratio="1">
                        <img :src="item.img" alt="">
                    </q-responsive>
                </QRouterLink>
                <div v-else>
                    <q-responsive :ratio="1">
                        <img :src="item.img" alt="">
                    </q-responsive>
                </div>
            </div>
        </div>
        <div class="slide-block" v-else>
            <div class="prev">
                <q-icon name="chevron_left" />
            </div>
            <swiper
                :modules="[Navigation, Pagination]"
                :pagination="{ clickable: true }"
                :navigation="{ nextEl: '.next', prevEl: '.prev' }"
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
            <div class="next">
                <q-icon name="chevron_right" />
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
        name: '餐點宣傳1',
        link: '/'
    },
    {
        img: '/promotion/promotion2.jpg',
        name: '餐點宣傳2',
        link: '/'
    },
    {
        img: '/promotion/promotion3.jpg',
        name: '餐點宣傳3',
        link: '/'
    },
    {
        img: '/promotion/promotion4.jpg',
        name: '餐點宣傳4',
        link: '/'
    },
    {
        img: '/promotion/promotion5.jpg',
        name: '餐點宣傳5',
        link: '/'
    },
    {
        img: '/promotion/promotion6.jpg',
        name: '餐點宣傳6',
        link: '/'
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
</script>

<style scoped lang="sass">
.boxs
    padding: 40px 20% 100px 20%
    background-color: #FFFBED
    display: flex
    flex-direction: column
    align-items: center
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
            img
                position: absolute
                top: 50%
                left: 50%
                transform: translate(-50%, -50%)
                object-fit: cover
    .slide-block
        display: flex
        width: 100%
        margin-top: 30px
        .prev
            display: flex
            align-items: center
            cursor: pointer
            .q-icon
                font-size: 35px
                color: #acbeaf
        .next
            display: flex
            align-items: center
            cursor: pointer
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