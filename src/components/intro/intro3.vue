<template>
  <div class="intro-container">
    <div class="intro-box">
      <Title title="服務介紹"></Title>
      <div class="lists">
        <div
          class="list"
          v-for="(item, index) in props.serviceIntro"
          :key="index"
        >
          <div class="box left">
            <q-responsive :ratio="16 / 10">
              <img
                :src="item.img"
                alt=""
              >
            </q-responsive>
          </div>
          <div class="box right">
            <h4 class="list-title">{{ item.title }}</h4>
            <div class="list-content">
              <!-- <div class="inner-container"> -->
                <!-- <div class="tag-container"> -->
                  {{ item.content }}
                <!-- </div> -->
              <!-- </div> -->
            </div>
            <div class="list-btn">
              <QRouterLink
                class="btn"
                to="https://forms.gle/cE73TMwrm5byNT7UA"
              >我要預約</QRouterLink>
              <QRouterLink
                class="btn"
                :to="item.link"
              >了解更多</QRouterLink>
            </div>
          </div>
          <img class="tree" src="/intro/tree.svg" alt=""/>
        </div>
      </div>
      <!-- <h1 class="title">環保外送</h1> -->
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import { ref, onMounted } from 'vue';

interface Props {
  serviceIntro?: any
}
const props = withDefaults(defineProps<Props>(), {
  serviceIntro: [
    {
      title: '',
      content: '',
      img: '',
      link: ''
    },
  ]
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.intro-container
  width: 100%
  display: flex
  flex-direction: column
  align-items: center
  padding: 0px 20% 80px 20%
  background-color: #FFFBED
  .intro-box
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 100%
    .lists
      width: 100%
      margin-top: 20px
      .list
        display: flex
        background-color: #DDEFE0
        padding: 30px
        position: relative
        .tree
          position: absolute
          left: 0
          bottom: 0%
          transform: translateX(-50%)
          height: 45%
        .left
          flex: 1
          width: 100%
          .q-responsive
            height: 100%
            background-color: #B8B8B8
            img
              object-fit: cover
        .right
          flex: 1.5
          display: flex
          flex-direction: column
          align-items: flex-start
          justify-content: space-between
          margin-left: 20px
          .list-title
            background-color: #fff
            padding: 0px 20px
            font-weight: 900
            font-size: 18px
            border-radius: 30px
            width: 100%
            font-family: 'Noto Serif TC', serif
          .list-content
            width: 100%
            padding: 20px 10px
            line-height: 25px
            display: flex
            justify-content: flex-start
            // .inner-container
            //   display: flex
            //   justify-content: center
            //   width: 100%
            //   max-width: 250px
            //   flex-wrap: wrap
            //   .tag-container
            //     display: flex
            //     padding: 5px
            //     width: 50%
            //     .tag
            //       text-align: center
            //       white-space: nowrap
            // .tag-container:nth-child(odd)
            //   justify-content: flex-start
            // .tag-container:nth-child(even)
            //   justify-content: flex-start
          .list-btn
            width: 100%
            display: flex
            justify-content: flex-end
            .btn
              background-color: #78A780
              color: #fff
              padding: 5px 15px
              border-radius: 30px
            .btn:first-child
              margin-right: 15px
      .list:not(:last-child)
          margin-bottom: 30px

@media (max-width: 980px)
  .intro-container
    padding: 0px 10% 80px 10%
    .intro-box
      .lists
        .list
          .tree
            display: none

@media (max-width: 840px)
  .intro-container
    .intro-box
      .lists
        .list
          flex-direction: column
          .right
            align-items: center
            margin-top: 25px
            margin-left: 0px
            .list-title, .list-content, .list-btn
              width: auto

</style>