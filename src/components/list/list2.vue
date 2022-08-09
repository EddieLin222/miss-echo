<template>
  <div class="list">
    <Title title="企業好評推薦"></Title>
    <div class="list-block" v-if="width>=840">
      <div class="list-item" v-for="(item, index) in props.companyList" :key="index">
        <q-responsive :ratio="1">
          <div class="img-block">
            <div class="img"></div>
          </div>
        </q-responsive>
        <div class="list-title">{{item.name}}</div>
        <div class="list-intro">
          <div v-for="(word, index) in item.text.split('')">
            <span>{{word}}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-block" v-else>
      <Slide :list="props.companyList"></Slide>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from "../title/title-1.vue"
import Slide from "../slide/slide.vue"
import { useWindowSize } from '@vueuse/core'
const { width } = useWindowSize()


interface Props {
  companyList?: any;
}
const props = withDefaults(defineProps<Props>(), {
  companyList: [
    {
      img: '',
      name: '',
      text: ''
    }
  ]
});

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
      .q-responsive
        width: 100%
        margin-bottom: 15px
        .img-block
          width: 180px
          border-radius: 100%
          padding: 5px

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
        width: 200px
        div
          height: 30px
          span
            height: 10px
            background: #F2E7CE
            padding: 0px 1px
            font-weight: 400
  .swiper-block
    width: 100%
@media (max-width: 1190px)
  .list
    // padding: 0px 15% 80px 15%
    .list-block
      flex-wrap: wrap
      .list-item
        width: calc(50% - 30px)
        margin: 30px 15px
        .list-intro
          max-width: 300px
@media (max-width: 980px)
  .list
    padding: 0px 10% 80px 10%
@media (max-width: 840px)
  .list
    padding: 0px 0% 80px 0%
@media (max-width: 600px)
  .list
    .list-block
      flex-direction: column
      .list-item
        width: 100%
        margin: 30px 0px
</style>