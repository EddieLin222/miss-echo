<template>
  <router-view />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useMainStore } from './stores/main.store';

import { handleCacheError } from '@/common/firebase'

// import slider1 from './components/slider-1.vue'

const store = useMainStore();

document.addEventListener('error', handleCacheError, true)

</script>

<style lang="sass">
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Noto+Sans+TC:wght@500;700;900&family=Noto+Serif+TC:wght@500;600;700;900&display=swap')
html, body, #app
  width: 100%
  // height: 100%
  padding: 0
  margin: 0
  box-sizing: border-box
  font-family: 'Noto Sans TC', sans-serif
#app
  display: flex
  flex-direction: column
  .header-space
    min-height: 55px
</style>
