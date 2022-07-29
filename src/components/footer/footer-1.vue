<template>
  <div class="footer">
    <div class="t-block">
      <div class="logo">LOGO</div>
      <div class="nav-block">
        <div class="nav-item" v-for="(item, index) in navItems">{{item.name}}</div>
      </div>
    </div>
    <div class="line"></div>
    <div class="b-block">
      <div class="brand-name">Brand Name</div>
      <div class="social-block">
        <div class="item"></div>
        <div class="item"></div>
        <div class="item"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const navItems = [
  {
    name: 'Home',
    link: ''
  },
  {
    name: 'About',
    link: ''
  },
  {
    name: 'News',
    link: ''
  },
  {
    name: 'Product',
    link: ''
  },
  {
    name: 'Blog',
    link: ''
  }
]
const social = [
  {
    name: 'facebook',
    url: '',
    link: ''
  },
  {
    name: 'instagram',
    url: '',
    link: ''
  },
  {
    name: 'twitter',
    url: '',
    link: ''
  },
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
.footer
  background-color: #000
  display: flex
  align-items: center
  justify-content: space-between
  flex-direction: column
  width: 100%
  z-index: 9999
  padding: 25px
  color: #fff
  font-weight: 900
  .t-block
    display: flex
    width: 100%
    justify-content: space-between
    .logo
      font-size: 24px
    .nav-block
      display: flex
      align-items: center
      .nav-item
        margin: 0px 10px
        font-size: 18px
      .nav-item:first-child
        margin-left: 0px
      .nav-item:last-child
        margin-right: 0px
  .line
    border: solid 2px #fff
    width: 100%
    margin: 15px 0px
  .b-block
    display: flex
    align-items: center
    justify-content: space-between
    width: 100%
    .brand-name
      font-size: 16px
    .social-block
      display: flex
      .item
        border: solid 2px #fff
        border-radius: 30px
        width: 30px
        height: 30px
        margin: 0px 5px
        
</style>