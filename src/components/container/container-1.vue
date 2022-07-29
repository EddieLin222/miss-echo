<template>
  <div class="custom-container">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// interface Props {
//   time?: number,
//   value?: number
// }
// const props = withDefaults(defineProps<Props>(), {
//   time: 2,
//   value: 5000
// });

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.custom-container
  height: 50vh
  width: 100%
  display: flex
  padding: 10%
</style>