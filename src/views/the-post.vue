<template>
  <div class="post">
    <div class="title-block">
        <div class="tag">{{data.tag}}</div>
        <div class="title">{{data.title}}</div>
        <div class="date">{{data.date}}</div>
    </div>
    <div class="fb-block">
        <div class="fb-like" data-href="https://developers.facebook.com/docs/plugins/s" data-width="" data-layout="standard" data-action="like" data-size="small" data-share="true" data-colorscheme="dark"></div>
    </div>
    <div class="img-block">
        <img src="" alt="">
    </div>
    <div class="intro">{{data.intro}}</div>
    <div class="content" v-html="data.content"></div>
    <div class="epilogue">
        <div class="symbol-left">
            <div class="dot">“</div>
        </div>
        <div class="symbol-right">
            <div class="dot">”</div>
        </div>
        {{data.epilogue}}
    </div>
    <div class="next"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const data = ref({
    tag: '優惠資訊',
    title: '自主防疫是什麼？我不是同住家人需要自主防疫嗎？',
    date: '2022/05/17',
    img: '',
    intro: '（前言）新冠肺炎疫情在台灣正在如火如荼發燒中，人心惶惶之餘，我們還能做什麼來降低我們對covid-19的恐懼呢？我想，就從因應對策開始了解吧！至少可以對預防、確診後續、密切接觸處理有基礎的認識，但政策日新月異，許多人也對滾動式調整感到疲憊，今天我們就來談談「自主防疫」是什麼吧！',
    content: '（內文）根據指揮中心於2022/05/16發布的最新防疫政策規定，確診者維持7天居家隔離＋7天自主健康管理，而同住家人及親友則遵循兩原則：<br>一、【0+7】完成3劑疫苗接種者得：免居家隔離，但需配合7天自主防疫，期間應遵守自主防疫規範，如需外出工作及採買生活必需品，需有2日內家用抗原快篩陰性證明，有症狀時建議在家休息，並以快篩試劑進行快篩。<br>二、【3+4】未完成3劑疫苗接種者：維持「3天居家隔離+4天自主防疫」，隔離期間應留在家中，禁止外出，於隔離期滿後繼續4天自主防疫，另須配合於隔離期間完成匡列時進行快篩，自主防疫期間，如需外出工作及採買生活必需品，需有2日內家用抗原快篩陰性證明，有症狀時建議在家休息，並以快篩試劑進行快篩。',
    epilogue: '（結語）面臨疫情高峰期，最辛苦的醫護人員也正在為台灣的民眾們站在第一線付出，目前政策雖變化動盪，我們能做的就是盡量遵守防疫政策，並保護好自身的健康安全，14天防疫假期將隨時為您更新與整理最新的防疫政策資訊，讓我們一起度過這次的難關！',
    nextPostTitle: '相關文章：居家隔離、居家檢疫、自主健康管理防疫旅館懶人包',
    nextPostLink: ''
})

onMounted(()=>{
    const id = route.params.postId
    console.log(id)
})


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
.post
    background-color: #FFFBED
    padding: 40px 20%
    .title-block
        .tag
            color: #9C9C9C
        .title
            font-size: 20px
            font-weight: 700
        .date
            color: #9C9C9C
    .fb-block
        filter: grayscale(80%)
        margin: 20px 0px 10px 0px
        .fb-like
            filter: hue-rotate(290deg)
            // filter: saturate(40%)
    .intro
        color: #749279
        border-left: solid 5px #749279
        padding-left: 10px
        margin-bottom: 20px
        line-height: 25px
    .content
        line-height: 25px
        margin-bottom: 40px
    .epilogue
        line-height: 25px
        border-top: solid 1px #78A780
        border-bottom: solid 1px #78A780
        padding: 20px 30px
        position: relative
    
        .symbol-left
            position: absolute
            top: 0
            left: 0
            background-color: #FFFBED
            display: flex
            align-items: center
            transform: translateY(-50%)
            padding: 0px 0px
            .dot
                width: 100%
                height: 100%
                font-size: 50px
                transform: translate(-30px, 10px)
                color: #78A780
        .symbol-right
            position: absolute
            bottom: 0
            right: 0
            background-color: #FFFBED
            display: flex
            align-items: center
            transform: translateY(50%)
            padding: 0px 10px
            .dot
                width: 100%
                height: 100%
                font-size: 50px
                transform: translate(30px, 10px)
                color: #78A780


</style>