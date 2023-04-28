<template>
  <div class="book">
    <div class="book-container">
        <QRouterLink class="img-shape" to="/landing-page">
            <img src="/book/left.png" alt="">
        </QRouterLink>
        <a class="img-shape" href="https://shop.missecotw.com" target="_blank">
            <img src="/book/right.png" alt="">
        </a>
        <!-- <QRouterLink class="img-shape" to="/menu">
            <img src="/book/right.png" alt="">
        </QRouterLink> -->
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
.book
    padding: 30px 20% 100px 20%
    background-color: #FFFBED
    .book-container
        display: flex
        width: 100%
        gap: 20%
        .img-shape
            flex: 1
            overflow: hidden
            img
                min-height: 100%
                min-width: 100%

@media (max-width: 960px)
    .book
        padding: 30px 14% 100px 14%
        .book-container
            justify-content: space-between
            gap: 10%
        // border: solid 3px

@media (max-width: 600px)
    .book
        .book-container
            flex-direction: column
            gap: 50px

</style>