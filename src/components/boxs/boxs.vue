<template>
  <div class="boxs">
    <Title title="環保外送"></Title>
    <div class="boxs-container">
        <a href="" v-for="(item, index) in data" :key="index">
            <q-responsive :ratio="1">
                <!-- <img src="" alt=""> -->
                <div class="title">{{item.name}}</div>
            </q-responsive>
        </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Title from '../title/title-1.vue'

const data = ref([
    {
        img: '',
        name: '餐點宣傳1',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳2',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳3',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳4',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳5',
        link: ''
    },
    {
        img: '',
        name: '餐點宣傳6',
        link: ''
    }
])
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
.boxs
    padding: 40px 20% 100px 20%
    background-color: #FFFBED
    display: flex
    flex-direction: column
    align-items: center
    .boxs-container
        display: flex
        width: 100%
        flex-wrap: wrap
        justify-content: space-between
        gap: 10px
        margin-top: 25px
        a
            width: calc(33% - 5px)
            background-color: #d9d9d9
        .q-responsive
            width: 100%

</style>