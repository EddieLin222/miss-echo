<template>
  <div class="footer">
    <div class="top">
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
    <div class="bottom">
      <p>Copyright 2023 © 一口覓食 Miss Eco</p>
      <a target="_blank" href="https://bgmotion.com.tw/home?utm_source=partner&utm_medium=msow_footer&utm_id=misseco_ow">© 2023 背景模式 BGMotion Web Design, all rights reserved</a>
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
  display: flex
  flex-direction: column
  align-items: center
  .top
    background-color: #DDEFE0
    font-weight: 700
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    padding: 25px
  .bottom
    display: flex
    flex-direction: column
    text-align: center
    width: 100%
    background-color: #749279
    padding: 12px 25px
    color: #fff
    p
      font-size: 14px
      margin-bottom: 4px
    a
      font-size: 12px
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
      margin-bottom: 20px
      font-family: 'Times New Roman'
    .social-block
      display: flex
      .item
        border-radius: 30px
        width: 50px
        height: 50px
        margin: 0px 10px
    .company
      color: #778D7E
      display: flex
      flex-direction: column
      align-items: center
      margin-top: 20px
      font-size: 12px
      font-weight: 500
@media (max-width: 580px)
  .footer
    .top
      flex-direction: column
      padding: 25px 25px 40px 25px
    .r-block
      flex-direction: column-reverse
      .social-block
        margin-top: 30px
      .mail
        margin-top: 20px
</style>