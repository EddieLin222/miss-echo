<template>
  <div class="posts">
    <Title title="點滴紀錄"></Title>
    <div class="list-container">
      <List v-for="(item, index) in props.postList" :key="index" :list="item"></List>
      <img class="butterfly" src="/intro/butterfly.svg" alt=""/>
    </div>
  </div>
</template>
<script setup lang="ts">
import Title from '../title/title-1.vue'
import List from '../list/list5.vue'
import { ref, onMounted } from 'vue';

interface Props {
  postList?: any;
}
const props = withDefaults(defineProps<Props>(), {
  postList: [
    {
      img: '',
      link: '',
      title: '',
      content: ''
    }
  ]
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.posts
  .list-container
    display: flex
    flex-wrap: wrap
    margin-top: 20px
    position: relative
    .butterfly
      position: absolute
      top: 0
      right: 0
      height: 50px
      transform: translate(50%, -50%)
</style>