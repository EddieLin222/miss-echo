<template>
  <div class="video-block">
    <Title title="Youtube"></Title>
    <q-responsive class="video" :ratio="width >= 980 ? 25/11 : 12/16">
      <q-responsive :ratio="16/11" class="left">
        <iframe :src="currentVideo.iframeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </q-responsive>
      <div class="right">
        <div class="main-title">
          播放列表
        </div>
        <div class="list-container">
          <div class="list" v-for="(item, index) in transList" :index="index" @click="listClick(index)">
            <q-icon name="play_arrow"></q-icon>
            <q-responsive :ratio="16/11">
              <img :src="`https://img.youtube.com/vi/${item.iframeLink}/1.jpg`" alt="">
              <!-- <iframe :src="item.iframeLink" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
            </q-responsive>
            <div class="info">
              <div class="title">
                {{item.title}}
              </div>
              <div class="content">
                {{item.person}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </q-responsive>
  </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import { ref, onMounted, computed } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()

const index = ref(0)

const data = [
  {
    iframeLink: 'https://www.youtube.com/embed/yTM0WH8pV2U',
    link: '',
    title: '[ 顏社 ]- 自躁浪漫 (Official Music Video)',
    person: '李英宏 aka DJ Didilong (ft.李權哲 Jerry Li)'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
    link: '',
    title: '[ 台北紐約Taipei New York ] Official Music Video',
    person: '馬念先'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zbSW7aIzXRM',
    link: '',
    title: '[ 我還繞著你在旋轉 Expired ] Official Music Video',
    person: '宇宙人'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
    link: '',
    title: '[ 台北紐約Taipei New York ] Official Music Video',
    person: '馬念先'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zbSW7aIzXRM',
    link: '',
    title: '[ 我還繞著你在旋轉 Expired ] Official Music Video',
    person: '宇宙人'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zQGiiIMqisQ',
    link: '',
    title: '[ 台北紐約Taipei New York ] Official Music Video',
    person: '馬念先'
  },
  {
    iframeLink: 'https://www.youtube.com/embed/zbSW7aIzXRM',
    link: '',
    title: '[ 我還繞著你在旋轉 Expired ] Official Music Video',
    person: '宇宙人'
  }
]

const transList = computed(() => {
  let newData = data.map(e=>{
    return {
      iframeLink: e.iframeLink.replace('https://www.youtube.com/embed/', ''),
      link: e.link,
      title: e.title,
      person: e.person
    }
  })
  return newData
})

const currentVideo = computed(() => {
  let video = data.filter((e, i)=>i==index.value)
  return video[0]
})

const listClick = (i:number)=>{
  index.value = i
}
// interface Props {
//   title?: string;
// }
// const props = withDefaults(defineProps<Props>(), {
//   title: ''
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.video-block
  display: flex
  flex-direction: column
  align-items: flex-start
  margin-top: 80px
  .video
    width: 100%
    margin-top: 20px
    :deep() .q-responsive__content
      display: flex
      gap: 20px
      .q-responsive.left
        width: 63% !important
        iframe
          width: 100%
      .right
        width: 37% !important
        border: solid 2px #D9D9D9
        padding: 15px
        height: 100%
        display: flex
        flex-direction: column
        border-radius: 3px
        .main-title
          font-size: 16px
          font-weight: 700
          margin-bottom: 10px
        .list-container
          width: 100%
          height: 100%
          overflow-y: scroll
          .list
            display: flex
            margin: 10px 0px
            align-items: center
            width: 100%
            cursor: pointer
            .q-icon
              font-size: 25px
              margin-right: 10px
              width: 10px
            .q-responsive
              width: 100px
            .info
              margin-left: 8px
              .title
                font-size: 14px
                font-weight: 700
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
              .content
                font-size: 12px
                font-weight: 700
                color: #888787
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden

@media (max-width: 980px)
  .video-block
    .video
      :deep() .q-responsive__content
        flex-direction: column
        .q-responsive.left
          width: 100% !important
          height: 40% !important
          // display: none
        .right
          width: 100% !important
          height: calc(60% - 20px) !important
          background-color: #fff
</style>