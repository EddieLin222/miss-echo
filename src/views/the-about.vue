<template>
  <div class="about">
    <Banner></Banner>
    <div class="custom-container">
        <Intro></Intro>
        <Posts></Posts>
        <Story></Story>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/banner/banner-3.vue"
import Intro from "../components/intro/intro4.vue"
import Posts from "../components/posts/posts.vue"
import Story from "../components/slide/slide2.vue"
// import Intro from "../components/intro/intro3.vue"
// import List from "../components/list/list2.vue"

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
.about
  background-color: #FFFBED
  .custom-container
    padding: 70px 15% 40px 15%
    width: 100%
    display: flex
    flex-direction: column
    gap: 40px 
</style>