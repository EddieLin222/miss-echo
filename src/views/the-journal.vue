<template>
  <div class="journal">
    <Boxs></Boxs>
    <Posts></Posts>
  </div>
</template>

<script setup lang="ts">
import Boxs from "../components/boxs/boxs2.vue"
import Posts from "../components/posts/posts-filter.vue"

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
.journal
  padding: 40px 15% 40px 15%
  background-color: #FFFBED
</style>