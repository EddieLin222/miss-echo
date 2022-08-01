<template>
  <div class="carousel">
    <div class="arrow-left" @click="slideLeft">
        <q-icon name="expand_circle_down"/>
    </div>
    <div class="outer-container">
        <div class="inner-container" ref="container">
            <div class="slide" :ref="setSlides" v-for="(item, index) in slideList" :class="{change: alignChange === true}">
                <!-- <div class="slide-bg" ref="slide-bg"></div> -->
                <div class="slide-box">
                    <q-responsive :ratio="16/12">
                        <div class="rounded-borders bg-black text-white flex flex-center">
                            {{ item.index }}
                        </div>
                    </q-responsive>
                </div>
            </div>
        </div>
    </div>
    <div class="arrow-right" @click="slideRight">
        <q-icon name="expand_circle_down"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed, onBeforeUpdate } from 'vue';
import { gsap } from 'gsap';

const slideList = ref([
    {
        index: 0
    },
    {
        index: 1
    },
    {
        index: 2
    },
    {
        index: 3
    },
    {
        index: 1
    },
    {
        index: 2
    },
    {
        index: 3
    },
    {
        index: 1
    },
    {
        index: 2
    },
    {
        index: 3
    },
    {
        index: 3
    }
])

const slideWidth =ref<any>(0);
let currentIndex = ref(0);
const groupNum = ref(3);
const alignChange = ref(false);

let slideRefs: any[]= [];
const setSlides = (el: any) => {
    if(el){
       slideRefs.push(el)
    }
}

const container = ref<HTMLDivElement>()

const slideLeft= () => {
    if(container.value && currentIndex.value > 0 ){
        alignChange.value = !alignChange.value
        currentIndex.value -= 1
        gsap.to(".inner-container", {
            duration: 1, 
            x: -container.value?.offsetWidth * currentIndex.value,
            // onComplete: function(){
            // }
        });
    }
}
const slideRight = () => {
    if(container.value && currentIndex.value < getSlideFrequency.value - 1 ){
        console.log(slideRefs.length)
        alignChange.value = !alignChange.value
        currentIndex.value += 1
        gsap.to(".inner-container", {
            duration: 1, 
            x: -container.value?.offsetWidth * currentIndex.value,
            // onComplete: function(){
            // }
        });
        // gsap.to(slideRefs, {
        //     className: "slide align-change"
        // })
    }
}
const getSlideFrequency = computed(() => {
    return Math.ceil(slideRefs.length / groupNum.value)
})

onBeforeUpdate(() => {
    slideRefs = []
})
onMounted(() => {
    slideWidth.value = slideRefs[0].offsetWidth
})


// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.carousel
  max-height: 100vh
  background-color: #FFFBED
  position: relative
  display: flex
  justify-content: center
  align-items: center
  padding: 8% 0%
  .arrow-left
    transform: rotate(90deg)
    .q-icon
        font-size: 40px
  .arrow-right
    transform: rotate(-90deg)
    .q-icon
        font-size: 40px
  .outer-container
    overflow: hidden
    width: 70%
    margin: 0px 20px
    .inner-container
        white-space: nowrap
        .slide
            display: inline-flex
            width: 33.3333333333%
            height: 400px
            position: relative
            // .slide-bg
            //     position: absolute
            //     width: 100%
            //     height: 100%
            //     background-color: #000
            //     transform: rotate(0deg)
            // padding: 10px
            .slide-box
                color: #fff
                width: 100%
                transition-duration: 1s
                padding: 10px
                .q-responsive
                    margin: 0
        .slide:nth-child(odd)
            .slide-box
                position: absolute
                top: 0
        .slide:nth-child(even)
            .slide-box
                position: absolute
                bottom: 0
        .slide.change:nth-child(odd)
            .slide-box
                position: absolute
                top: calc(100%)
                transform: translateY(-100%)
        .slide.change:nth-child(even)
            .slide-box
                position: absolute
                bottom: calc(100%)
                transform: translateY(100%)

</style>