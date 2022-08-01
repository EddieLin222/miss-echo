<template>
  <div class="faq">
    <Title title="常見問題"></Title>
    <Collapse></Collapse>
  </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import Collapse from "../collapse/collapse-1.vue"
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
.faq
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  padding: 60px 10%
  font-weight: 900
  background-color: #FFFBED
</style>