<template>
  <div class="header">
    <div class="brand">
      <QRouterLink
        class="img-box"
        to="/"
      >
        <img
          src="/logo/logo.png"
          alt=""
          v-if="width>992"
        >
        <img
          src="/logo/logo-m.png"
          alt=""
          v-else
        >
      </QRouterLink>
    </div>
    <div
      class="toggle-btn"
      @click="openMenu = !openMenu"
      :class="{show: openMenu}"
    >
      <div class="line top-line"></div>
      <div class="line center-line"></div>
      <div class="line bottom-line"></div>
    </div>
    <div
      class="nav"
      :class="{show: openMenu}"
    >
      <div class="nav-menu">
        <template v-for="(item, index) in navItems">
          <QRouterLink
            :hasSticker="index!==navItems.length-1"
            :showSticker="currentActive === index && path.path === item.link"
            class="item"
            :to="item.link"
            @click="toggleActive(index)"
          >{{ item.name }}</QRouterLink>
        </template>
      </div>
      <div class="s-block">
        <div class="social-block">
          <QRouterLink
            class="item"
            to="https://www.facebook.com/misseco.tw"
          >
            <img src="/social/fb.svg">
          </QRouterLink>
          <QRouterLink
            class="item"
            to="https://www.instagram.com/misseco.tw/"
          >
            <img src="/social/ig.svg">
          </QRouterLink>
          <QRouterLink
            class="item"
            to="https://lin.ee/35kz9K7"
          >
            <img src="/social/line.svg">
          </QRouterLink>
        </div>
        <div class="mail">misseco.tw@gmail.com</div>
      </div>
    </div>
  </div>
  <div class="header-space"></div>

</template>
<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { useWindowSize } from '@vueuse/core'
import { useElementHover } from '@vueuse/core'

import { useRoute } from 'vue-router'

const currentActive = ref()
const toggleActive = (index: number)=>{
  currentActive.value = index
  openMenu.value = false
}

const path = useRoute()

const openMenu = ref(false)
const { width } = useWindowSize()


const navItems = ref([
  {
    name: ' 環保外送',
    link: '/home'
  },
  {
    name: '活動訂餐',
    link: '/landing-page'
  },
  {
    name: '有意識生活',
    link: '/life'
  },
  {
    name: '關於我們',
    link: '/about'
  },
  {
    name: '永續日記',
    link: '/journal'
  },
  {
    name: '我要訂餐',
    link: '/menu'
  }

])
const social = [
  {
    name: 'facebook',
    url: '',
    link: ''
  },
  {
    name: 'instagram',
    url: '',
    link: ''
  },
  {
    name: 'twitter',
    url: '',
    link: ''
  },
]


watch(path, ()=>{
  currentActive.value = navItems.value.findIndex((item)=>item.link === path.path)
},{
  immediate: true,
  deep: true
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

.nest-item:hover
  & ul
    height:145px

.header
  background-color: #fff
  display: flex
  align-items: center
  justify-content: space-between
  position: fixed
  width: 100%
  z-index: 9999
  padding: 5px 25px
  box-shadow: 0px 2px 6px 1px rgba(0,0,0,0.3)
  top: 0
  .brand
    width: 120px
    display: flex
    .img-box
      img
        width: 100%
  .toggle-btn
    height: 34px
    width: 28px
    border-radius: 3px
    justify-content: space-between
    align-items: center
    flex-direction: column
    padding: 7px 6px
    display: none
    position: relative
    .line
      border-top: solid 3px #78A780
      width: 100%
      position: absolute
      transform-origin: center
      transition-duration: .5s
      opacity: 1
  .toggle-btn.show
    .top-line
      top: 15px
      transform: rotate(45deg)
    .center-line
      opacity: 0
    .bottom-line
      top: 15px
      transform: rotate(-45deg)
  .toggle-btn:not(.show)
    .top-line
      top: 6px
    .center-line
      top: 15px
    .bottom-line
      top: 24px
  .nav
    display: flex
    flex-direction: column
    .nav-menu
      display: flex
      color: #000
      font-weight: 700
      justify-content: center
      align-items: center
      .item
        margin: 0px 5px 
        padding: 3px 18px
        font-size: 15px
      .item:last-child
        background-color: #749279
        color: #fff
        border-radius: 30px
    .s-block
      // display: flex
      flex-direction: column
      align-items: center
      margin-top: 50px
      display: none
      .mail
        font-size: 16px
        color: #778D7E
      .social-block
        display: flex
        justify-content: center
        margin-bottom: 10px
        .item
          border-radius: 30px
          width: 30px
          height: 30px
          margin: 0px 10px

@media (max-width: 992px)
  .header
    flex-wrap: wrap
    justify-content: space-between
    .brand
      width: 150px
    .toggle-btn
      display: flex
    .nav
      width: 100%
      overflow: hidden
      transition-duration: .5s
      display: flex
      justify-content: center
      align-items: center
      height: calc(100vh - 60px)
      .s-block
        display: flex
      .nav-menu
        flex-direction: column
        .item
          margin: 20px
    .nav:not(.show)
      height: 0
    .social
      display: none
    
</style>