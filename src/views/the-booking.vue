<template>
  <div class="booking">
    <Service></Service>
    <Intro></Intro>
    <List></List>

  </div>
</template>

<script setup lang="ts">
import Service from "../components/service/service.vue"
import Intro from "../components/intro/intro3.vue"
import List from "../components/list/list2.vue"

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