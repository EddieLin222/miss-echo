<template>
  <div class="footer">
    <div class="l-block">
      <div class="logo">
        <img src="/logo/logo-footer.png" alt="">
      </div>
      <div class="text">
        Miss Eco 環保外送 打造永續新日常
      </div>
    </div>
    <div class="r-block">
      <div class="mail">misseco.tw@gmail.com</div>
      <div class="social-block">
        <div class="item">
          <img src="/social/fb.svg">
        </div>
        <div class="item">
          <img src="/social/ig.svg">
        </div>
        <div class="item">
          <img src="/social/line.svg">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
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
.footer
  background-color: #DDEFE0
  display: flex
  align-items: center
  justify-content: space-between
  width: 100%
  z-index: 9999
  padding: 25px
  font-weight: 700
  .l-block
    display: flex
    flex-direction: column
    align-items: center
    flex: 1
    .logo
      width: 240px
      margin-bottom: 10px
    .text
      color: #778D7E
      letter-spacing: 1px
  .r-block
    display: flex
    flex-direction: column
    align-items: center
    flex: 1
    .mail
      font-size: 16px
      color: #778D7E
      margin-bottom: 30px
    .social-block
      display: flex
      .item
        border-radius: 30px
        width: 35px
        height: 35px
        margin: 0px 10px
@media (max-width: 580px)
  .footer
    flex-direction: column
    padding: 25px 25px 40px 25px
    .r-block
      flex-direction: column-reverse
      .social-block
        margin-top: 30px
      .mail
        margin-top: 20px
</style>