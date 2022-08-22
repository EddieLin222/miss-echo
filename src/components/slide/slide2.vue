<template>
  <div class="slide">
    <div class="title-block">
      <Title title="影音故事"></Title>
    </div>
    <div class="slide-block">
      <div class="prev-btn">
        <q-icon name="chevron_left"/>
      </div>
      <swiper
        :modules="[Navigation, Pagination]"
        :pagination="{clickable: true}"
        :navigation="{ nextEl: '.next-btn', prevEl: '.prev-btn'}"
        :slides-per-view="1"
        :space-between="30"
      >
        <swiper-slide v-for="(list, index) in props.storyList" :key="index">
          <QRouterLink class="img-box" :to="list.link">
            <q-responsive :ratio="16/8">
              <div class="img-block">
                <img :src="list.img" alt="">
              </div>
            </q-responsive>
            <div class="title">
                <p class="text">
                  {{list.text}}
                </p>
            </div>
          </QRouterLink>
        </swiper-slide>
      </swiper>
      <div class="next-btn">
        <q-icon name="chevron_right"/>
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
  storyList?: any
}
const props = withDefaults(defineProps<Props>(), {
  storyList: [
    {
      img: '',
      text: '',
      link: ''
    }
  ]
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.slide
    background-color: #FFFBED
    justify-content: center
    // --swiper-theme-color: red
    margin-top: 50px
    .title-block
        width: 100%
        display: flex
    .slide-block
        display: flex
        width: 100%
        margin-top: 30px
        .prev-btn
            display: flex
            align-items: center
            .q-icon
                font-size: 40px
                color: #78A780
        .next-btn
            display: flex
            align-items: center
            .q-icon
                font-size: 40px
                color: #78A780
        .swiper
            --swiper-navigation-size: 30px
            width: 100%
            margin: 0px 15px
            // overflow: visible
            overflow-x: hidden
            padding-bottom: 40px 
            .swiper-slide
                display: flex
                flex-direction: column
                .q-responsive
                    width: 100%
                    .img-block
                        img
                            object-fit: cover
                            width: 100%
                            height: 100%
                .title
                    width: 100%
                    text-align: center
                    font-size: 18px
                    margin-top: 15px
                    .text
                        width: 100%
                        word-break: break-all
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

@media (max-width: 740px)
  .slide
    .slide-block
      .prev-btn, .next-btn
        display: none
      .swiper
        margin: 0px

</style>