<template>
  <div class="footer">
    <div class="l-block">
      <QRouterLink class="logo" to="/">
        <img src="/logo/logo-footer.png" alt="">
      </QRouterLink>
      <div class="text">
        Miss Eco 環保外送 打造永續新日常
      </div>
    </div>
    <div class="r-block">
      <div class="mail">misseco.tw@gmail.com</div>
      <div class="social-block">
        <QRouterLink class="item" to="https://www.facebook.com/misseco.tw">
          <img src="/social/fb.svg">
        </QRouterLink>
        <QRouterLink class="item" to="https://www.instagram.com/misseco.tw/">
          <img src="/social/ig.svg">
        </QRouterLink>
        <QRouterLink class="item" to="https://lin.ee/35kz9K7">
          <img src="/social/line.svg">
        </QRouterLink>
      </div>
      <div class="company">
        <p>統編：90704867</p>
        <p>一口覓食股份有限公司</p>
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
      font-family: 'Noto Serif TC', serif
  .r-block
    display: flex
    flex-direction: column
    align-items: center
    flex: 1
    .mail
      font-size: 18px
      color: #778D7E
      margin-bottom: 15px
      font-family: 'Times New Roman'
    .social-block
      display: flex
      .item
        border-radius: 30px
        width: 35px
        height: 35px
        margin: 0px 10px
    .company
      color: #778D7E
      display: flex
      flex-direction: column
      align-items: center
      margin-top: 20px
      font-size: 12px
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