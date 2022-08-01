<template>
  <div class="service">
    <Title title="服務簡介"></Title>
    <div class="second-title">
      <span class="symbol">“</span>
      <span class="text">減廢 減碳 活動次數</span>
      <span class="symbol">”</span>
    </div>
    <div class="items">
      <div class="item">
        <q-responsive ratio="1">
          <img src="" alt="">
        </q-responsive>
        <div class="content">
          合作夥伴：27+
        </div>
      </div>
      <div class="item">
        <q-responsive ratio="1">
          <img src="" alt="">
        </q-responsive>
        <div class="content">
          場次：87
        </div>
      </div>
      <div class="item">
        <q-responsive ratio="1">
          <img src="" alt="">
        </q-responsive>
        <div class="content">
          減碳：
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted } from 'vue';
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
.service
  background-color: #FFFBED
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 40px 20% 100px 20%
  .second-title
    display: flex
    align-items: center
    .symbol
      font-size: 60px
      color: #F2E7CE
      line-height: 60px
    .text
      font-size: 16px
      margin: 0px 20px
  .items
    width: 100%
    display: flex
    justify-content: space-between
    .item
      width: 30%
      .q-responsive
        width: 100%
        background-color: #D9D9D9
      .content
        text-align: center
        margin-top: 20px
        font-size: 16px
</style>