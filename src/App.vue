<template>
  <Header></Header>
  <div class="header-space"></div>
  <router-view />
  <Book></Book>
  <Footer></Footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';
import Header from "./components/header/header-1.vue"
import Book from "./components/book/book.vue"
import Footer from "./components/footer/footer-1.vue"

// import slider1 from './components/slider-1.vue'

const store = useMainStore();

document.title += ` v${import.meta.env.PACKAGE_VERSION}`
</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+TC:wght@500;700;900&family=Noto+Serif+TC:wght@500;600;700;900&display=swap')
html, body, #app
  width: 100%
  height: 100%
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: 'Noto Sans TC', sans-serif
#app
  display: flex
  flex-direction: column
  .header-space
    min-height: 50px
</style>
