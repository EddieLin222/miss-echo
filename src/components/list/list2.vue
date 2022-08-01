<template>
  <div class="list">
    <Title title="企業好評推薦"></Title>
    <div class="list-block">
      <div class="list-item" v-for="(item, index) in listData.items" :key="index">
        <div class="img-block">
          <div class="img"></div>
        </div>
        <div class="list-title">{{item.title}}</div>
        <div class="list-intro">
          <div v-for="(word, index) in item.intro">
            <span>{{word}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from "../title/title-1.vue"
const listData = {
  title: "Cool Title .",
  items: [
    {
      img: '../img.png',
      title: '企業名稱',
      intro: '“推薦文字推薦文字推薦文字推薦”'
    },
    {
      img: '../img.png',
      title: '企業名稱',
      intro: '“推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦”'
    },
    {
      img: '../img.png',
      title: '企業名稱',
      intro: '“推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦推薦文字推薦文字推薦文字推薦”'
    }
  ]
}
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
.list
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 50px 20% 80px 20%
  font-weight: 900
  background-color: #FFFBED
  .title
    font-size: 28px
  .list-block
    display: flex
    width: 100%
    margin: 50px 0px
    justify-content: space-between
    .list-item
      display: flex
      flex-direction: column
      align-items: center
      list-style: none
      margin: 0px 15px

      .img-block
        width: 180px
        height: 180px
        border-radius: 100%
        padding: 5px
        margin-bottom: 15px
        .img
          background-color: #ddd
          width: 100%
          height: 100%
          border-radius: 100%
      .list-title
        font-size: 16px
        font-weight: 700
      .list-intro
        margin-top: 10px
        font-size: 14px
        display: flex
        flex-wrap: wrap
        width: 150px
        div
          height: 30px
          span
            height: 10px
            background: #F2E7CE
            padding: 0px 1px
            font-weight: 400
@media (max-width: 1190px)
  .list
    .list-block
      flex-wrap: wrap
      .list-item
        width: 45%
        margin: 30px 15px
        .list-intro
          max-width: 300px

@media (max-width: 580px)
  .list
    .list-block
      .list-item
        width: 80%
</style>