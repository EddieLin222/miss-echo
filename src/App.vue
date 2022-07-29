<template>
  <router-view />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';
// import slider1 from './components/slider-1.vue'

const store = useMainStore();

document.title += ` v${import.meta.env.PACKAGE_VERSION}`
</script>

<style lang="sass">
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
</style>
