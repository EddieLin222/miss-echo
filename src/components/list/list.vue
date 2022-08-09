<template>
    <div class="list">
        <div class="item" v-for="(item, index) in list">
            <div class="img">
                <q-responsive :ratio="16/12">
                    <img :src="item.img" alt=""/>
                </q-responsive>
            </div>
            <div class="content">
                <p>{{item.content}}</p>
                <a class="more" href="#">閱讀更多...</a>
            </div>
            <img class="sticker" src="/intro/sticker.svg" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
const list = [
    {
        content: '內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字',
        link: '',
        img: '/link/link1.jpg'
    },
    {
        content: '內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字',
        link: '',
        img: '/link/link2.jpg'
    },
    {
        content: '內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字區內文文字',
        link: '',
        img: '/link/link3.jpg'
    }
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
.list
    background-color: #FFFBED
    display: flex
    justify-content: center
    padding: 0px 8% 8% 8%
    .item
        text-align: center
        margin: 0px 3%
        border: solid 2px #646464
        background-color: #fff
        box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.25), 12px 12px 2px 3px #C8EEC8
        position: relative
        .img
            .q-responsive
                img
                    object-fit: cover
                    min-height: 100%
                    min-width: 100%
        .content
            padding: 50px 20px
            display: flex
            flex-direction: column
            align-items: flex-start
            p
                text-align: left
                margin-bottom: 20px
            .more
                display: inline-block
                color: #78A780
        .sticker
            position: absolute
            top: 0
            height: 15%
            transform: translate(-30%, -30%)

@media(max-width: 960px)
    .list
        flex-wrap: wrap
        gap: 50px 0px
        justify-content: flex-start
        .item
            width: 44%

@media(max-width: 600px)
     .list
        .item
            width: 94%
</style>