<template>
  <div class="header">
    <div class="brand">
      <a class="img-box" href="/">
        <img src="/logo/logo.png" alt="" v-if="width>992">
        <img src="/logo/logo-m.png" alt="" v-else>
      </a>
    </div>
    <div class="toggle-btn" @click="openMenu = !openMenu" :class="{show: openMenu}">
      <div class="line top-line"></div>
      <div class="line center-line"></div>
      <div class="line bottom-line"></div>
    </div>
    <div class="nav" :class="{show: openMenu}">
      <div class="nav-menu">
        <a class="item" v-for="(item, index) in navItems" :href="item.link">{{ item.name }}</a>
      </div>
      <div class="s-block">
        <div class="social-block">
          <a class="item" href="https://www.facebook.com/misseco.tw" target="_blank">
            <img src="/social/fb.svg">
          </a>
          <a class="item" href="https://www.instagram.com/misseco.tw/" target="_blank">
            <img src="/social/ig.svg">
          </a>
          <a class="item" href="https://lin.ee/35kz9K7" target="_blank">
            <img src="/social/line.svg">
          </a>
        </div>
        <div class="mail">misseco.tw@gmail.com</div>
      </div>
    </div>
  </div>
  <div class="header-space"></div>

</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useWindowSize } from '@vueuse/core'

const openMenu = ref(false)
const { width } = useWindowSize()

const navItems = [
  {
    name: ' 環保外送',
    link: '/delivery'
  },
  {
    name: '活動訂餐',
    link: '/booking'
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
    link: 'https://misseco-customer.web.app'
  }

]
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
    width: 105px
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
        background-color: #C8EEC8
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
      width: 130px
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