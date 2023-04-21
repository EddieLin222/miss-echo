<template>
  <q-dialog :style="{'z-index': 9999}" >
    <div class="content w-[100%] h-[calc(100%_-_10px)] bg-white !rounded-[10px]">
      <div class="title-area">
        <div class="title-block">
          <div class="bg"></div>
          <div class="title">{{ props.data.title }}</div>
        </div>
      </div>
      <div class="w-full h-[calc(100%_-_176px)] flex items-between justify-end relative !rounded-[10px] overflow-hidden">
        <q-scroll-area style="height: calc(100% - 0px); width: 100%;">
          <div class="text-content">
            <ol>
              <li v-for="item in props.data.listArr">{{ item }}</li>
            </ol>
          </div>
        </q-scroll-area>
      </div>
      <q-btn class="bottom" v-close-popup>
        我了解囉
      </q-btn>
    </div>
  </q-dialog>
</template>
<script setup lang="ts">
import Title from '../components/title/title-1.vue'
import { ref } from 'vue';
interface Props {
  data?: any;
}
const props = defineProps<Props>();
</script>
<style lang="sass">
.q-dialog
  background-color: rgba(0, 0, 0, .7)
  .title-area
    display: flex
    justify-content: center
    padding: 30px 0px
  .title-block
    position: relative
    display: inline-block !important
    margin-bottom: 5px
    font-weight: 900
    font-family: 'Noto Serif TC', serif
    width: auto !important
    .bg
      background-color: #C8EEC8
      position: absolute
      width: 100%
      height: 50%
      bottom: 0
    .title
      position: relative
      font-size: 34px
      line-height: 34px
      letter-spacing: 1px
  .text-content
    padding: 0px 50px
  .q-btn
    padding: 25px 0px
    background-color: #749279
    text-align: center
    color: #fff
    font-size: 16px
    cursor: pointer
    width: 100%
    border-radius: 0px 0px 5px 5px
  ol
    list-style: decimal !important
    li
      font-size: 16px
      font-weight: 500
      margin: 5px 0px
</style>