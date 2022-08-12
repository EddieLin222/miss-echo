<template>
  <Header></Header>
  <router-view />
  <Book></Book>
  <Bubbles></Bubbles>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Header from "../components/header/header-1.vue"
import Book from "../components/book/book.vue"
import Bubbles from "../components/bubbles/bubbles.vue"
import Footer from "../components/footer/footer-1.vue"
</script>
