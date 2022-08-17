<template>
  <div class="comming-soon">
    <h4 class="title">Coming Soon...</h4>
    <img src="/logo/logo-footer.png" alt="">
    <a class="btn" href="/">返回首頁</a>
    <div class="block">
      <div class="social-block">
        <a class="item" href="https://www.facebook.com/misseco.tw" target="_blank">
          <img src="/social/fb.svg">
        </a>
        <a class="item" href="https://www.instagram.com/misseco.tw/" target="_blank">
          <img src="/social/ig.svg">
        </a>
        <a class="item" href="https://lin.ee/35kz9K7" target="_blank">
          <img src="/social/line.svg">
        </a>
      </div>
      <div class="mail">misseco.tw@gmail.com</div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped lang="sass">
.comming-soon
    width: 100%
    height: calc(100vh - 100px)
    background-color: #FFFBED
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
    // background-color: #DDEFE0
    .title
        font-size: 40px
        font-weight: 900
        margin-bottom: 40px
        margin-top: 40px
    img
        width: 200px
        margin-bottom: 40px
    .btn
        background-color: #778D7E
        border-radius: 30px
        padding: 6px 35px
        font-weight: 700
        color: #fff
        font-size: 16px
        letter-spacing: 1px
        margin-bottom: 50px
    .block
        display: flex
        flex-direction: column
        align-items: center
        .mail
            font-size: 16px
            color: #778D7E
            display: none
        .social-block
            display: flex
            justify-content: center
            margin-bottom: 10px
            .item
                border-radius: 30px
                width: 40px
                height: 40px
                margin: 0px 10px
@media (max-width: 480px)
    .comming-soon
        .title
            font-size: 32px

</style>