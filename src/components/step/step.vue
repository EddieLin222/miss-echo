<template>
  <div class="step">
    <Title title="環保外送・訂餐流程"></Title>
    <div class="step-name">
      <div class="brand">MISS ECO</div>
      <div class="book-step">訂餐流程</div>
    </div>
    <div class="list">
        <div class="item" v-for="(item, index) in props.stepData" :key="index">
            <q-responsive :ratio="1">
                <div class="img-block">
                  <img :src="item.img" alt=""/>
                </div>
            </q-responsive>
            <p class="intro" v-text="item.intro"></p>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from "../title/title-1.vue"

interface Props {
  stepData?: any;
}
const props = withDefaults(defineProps<Props>(), {
  stepData: [
    {
      img: '',
      intro: ''
    }
  ]
});

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
  background-color: #FFFBED
  font-size: 28px
  .step-name
    width: 100%
    display: flex
    align-items: flex-end
    color: #79A980
    margin-top: 20px
    .brand
      border-bottom: solid 2px #79A980
      line-height: 40px
      margin-right: 10px
    .book-step
      font-size: 20px
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
        margin-bottom: 15px
        overflow: hidden
        position: relative
        padding: 10px
        .img-block
          position: relative
          img
            position: relative
            width: 100%
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            display: block
      .intro
        font-size: 14px
        font-weight: 700
        letter-spacing: 1px
        color: #79A980
        white-space: pre-line
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