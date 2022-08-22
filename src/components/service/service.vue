<template>
  <div class="service">
    <Title title="服務簡介"></Title>
    <div class="second-title">
      <span class="symbol">
        <img src="/symbol/left.svg" alt="">
      </span>
      <span class="text">{{props.serviceData.introduction}}</span>
      <span class="symbol">
        <img src="/symbol/right.svg" alt="">
      </span>
    </div>
    <div class="items">
      <div class="item">
        <q-responsive ratio="1">
          <img :src="props.serviceData.partner.img" alt="">
        </q-responsive>
        <div class="content">
          合作夥伴： {{props.serviceData.partner.info}}
        </div>
      </div>
      <div class="item">
        <q-responsive ratio="1">
          <img :src="props.serviceData.event.img" alt="">
        </q-responsive>
        <div class="content">
          場次： {{props.serviceData.event.info}}
        </div>
      </div>
      <div class="item">
        <q-responsive ratio="1">
          <img :src="props.serviceData.reduce.img" alt="">
        </q-responsive>
        <div class="content">
          減碳： {{props.serviceData.reduce.info}}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import { ref, onMounted } from 'vue';
interface Props {
  serviceData?: any;
}
const props = withDefaults(defineProps<Props>(), {
  serviceData: {
    introduction: '',
    partner: {
      img: '',
      info: ''
    },
    event: {
      img: '',
      info: ''
    },
    reduce: {
      img: '',
      info: ''
    }
  },
});

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
    align-items: flex-start
    margin-top: 20px
    .symbol
      transform: translateY(-50%)
      img
        width: 30px
        max-width: 30px !important
    .text
      font-size: 16px
      margin: 0px 10px
  .items
    width: 100%
    display: flex
    justify-content: space-between
    .item
      width: 33.33%
      .q-responsive
        width: 100%
      .content
        text-align: center
        margin-top: 20px
        font-size: 16px
        display: none
@media (max-width: 980px)
  .service
    padding: 40px 10% 100px 10%
@media (max-width: 540px)
  .service
    .items
      flex-direction: column
      .item
        width: 100%

</style>