<template>
  <div class="journal">
    <Boxs></Boxs>
  </div>
</template>

<script setup lang="ts">
import Boxs from "../components/boxs/boxs2.vue"

const serviceData = {
  partner: {
    img: '',
    info: '27+'
  },
  event: {
    img: '',
    info: '87'
  },
  reduce: {
    img: '',
    info: '??'
  }
}


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
</style>