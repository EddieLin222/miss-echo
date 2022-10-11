<template>
  <div class="menu">
    <Title title="菜單介紹"></Title>
    <!-- <Banner :bannerData="bannerData"></Banner> -->
    <div class="custom-container">
      <div class="main">
        <img :src="menuData.textArea.image" alt="">
        <div class="intro">
          <div class="title">{{menuData.textArea.title}}</div>
          <div class="content">{{menuData.textArea.content}}</div>
        </div>
      </div>
      <template v-for="(list, index) in menuData.menuList">
        <MenuList :listData="list"></MenuList>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase';

import Title from "../components/title/title-1.vue"
import { ref, computed, watchEffect, onMounted } from 'vue';
import { menuType } from '@/types/menu.type';
import { useHead } from "@vueuse/head"

import MenuList from "../components/menu/menu-list.vue"

const menuData = ref<menuType>({
  textArea: {
    title: '標題',
    content: '內文',
    image: '/always/always1.png'
  },
  menuList: [
    {
      name: '更多菜單',
      menu:[
        {
          img: '/always/always1.png',
          link: ''
        },
        {
          img: '/always/always2.png',
          link: ''
        },
        {
          img: '/always/always3.png',
          link: ''
        },
        {
          img: '/always/always4.png',
          link: ''
        },
        {
          img: '/always/always5.png',
          link: ''
        },
        {
          img: '/always/always6.png',
          link: ''
        },
        {
          img: '/always/always1.png',
          link: ''
        },
        {
          img: '/always/always2.png',
          link: ''
        }
      ]
    },
    {
      name: '測試菜單',
      menu:[
        {
          img: '/always/always2.png',
          link: ''
        },
        {
          img: '/always/always3.png',
          link: ''
        },
        {
          img: '/always/always4.png',
          link: ''
        },
        {
          img: '/always/always5.png',
          link: ''
        },
        {
          img: '/always/always6.png',
          link: ''
        },
        {
          img: '/always/always1.png',
          link: ''
        },
        {
          img: '/always/always2.png',
          link: ''
        },
        {
          img: '/always/always3.png',
          link: ''
        }
      ]
    }
  ]
})

const safariHacks = () => {
  let windowsVH = window.innerHeight / 100;
  const el = document.querySelector('.popup');
  if (el && el instanceof HTMLElement) {
    el.style.setProperty('--vh', windowsVH + 'px')
  }
}

onMounted(() => {
  safariHacks()
  window.addEventListener('resize', safariHacks)
})

// Firestore
const pageHomeDB = db().collection('Page').doc('Menu')
const pageHomeData = ref<menuType>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    menuData.value.textArea = pageHomeData.value.textArea;
    menuData.value.menuList = pageHomeData.value.menuList;
  }
})


// SEO
useHead({
  // Can be static or computed
  title: computed(() => {
    return 'Miss Eco｜菜單介紹'
  }),
  meta: [
    {
      property: `og:title`,
      content: computed(() => {
        return 'Miss Eco｜菜單介紹'
      }),
    },
    {
      property: `og:type`,
      content: 'website',
    },
    {
      name: `description`,
      content: computed(() => {
        return '歡迎來到Health impact意識生活，讓Summer與Solomon用5分鐘的時間與您分享醫學知識、飲食生活、環境自然、正念態度，各種建構健康藍圖的方法。'
      }),
    },
    {
      property: `og:image`,
      content: computed(() => {
        return 'https://missecotw.com/logo/logo.png'
      }),
    },
  ],
})

</script>

<style scoped lang="sass">
.menu
  background-color: #FFFBED
  height: 100%
  min-height: calc(100vh - 56px)
  padding: 60px 100px
  position: relative
  .custom-container
    margin-top: 20px
    height: 100%
    .main
      height: 40vh
      overflow: hidden
      position: relative
      img
        position: absolute
        object-fit: cover
        min-width: 100%
        min-height: 100%
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
      .intro
        position: absolute
        color: #fff
        top: 50%
        left: 30px
        transform: translateY(-50%)
        max-width: calc(100% - 60px)
        pointer-events: none
        .title
          font-size: 28px
          font-weight: 700
          margin-bottom: 5px
          text-shadow: 1px 1px 2px black
        .content
          font-size: 20px
          font-weight: 700
          text-shadow: 1px 1px 2px black

@media (max-width: 780px)
  .menu
    padding: 70px 15%
    .custom-container
      .main
        height: 60vh

@media (max-width: 580px)
  .menu
    padding: 60px 10%
</style>