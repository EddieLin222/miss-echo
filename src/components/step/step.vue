<template>
  <div class="step">
    <Title title="環保外送・訂餐流程"></Title>
    <div class="list">
        <div class="item" v-for="(item, index) in listData" :key="index">
            <q-responsive :ratio="1">
                <img src="" alt=""/>
            </q-responsive>
            <p class="intro" v-html="item.intro"></p>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from "../title/title-1.vue"
const listData = [
    {
      intro: '<p>前一天至 miss eco 網站訂餐<br>外送範圍 : 距離店家7km<br>線上付款 : 信用卡、Line Pay</p>'
    },
    {
      intro: '<p>等待外送夥伴送達餐點<br>全程 "0接觸" 取餐</p>'
    },
    {
      intro: '<p>食用完畢清洗餐盒<br>放置陰涼處風乾</p>'
    },
    {
      intro: '<p>➊ 四週內歸還上次的餐盒<br>➋ 於下次訂餐歸還給外送夥伴或自行到合作店家歸還。</p>'
    }
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
.step
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 50px 10% 80px 10%
  font-weight: 900
  background-color: #FFFBED
  font-size: 28px
  .list
    display: flex
    width: 100%
    margin: 50px 0px
    justify-content: space-between
    gap: 15px
    .item
      display: flex
      flex-direction: column
      align-items: center
      list-style: none
      width: calc(25% - 30px)

      .q-responsive
        width: 100%
        border-radius: 100%
        padding: 5px
        margin-bottom: 15px
        overflow: hidden
        position: relative
        img
          position: absolute
          top: 50%
          left: 50%
          transform: translate(-50%, -50%)
          background-color: #ddd
          width: 100%
          height: 100%
          border-radius: 100%
      .intro
        font-size: 14px
        font-weight: 700
        color: #78A780
        letter-spacing: 1px
@media (max-width: 890px)
  .step
    .list
      flex-wrap: wrap
      .item
        width: calc(48% - 30px)
        margin: 30px 15px
        .list-intro
          max-width: 300px
          font-size: 20px

@media (max-width: 580px)
  .step
    .list
      .item
        width: 100%
</style>