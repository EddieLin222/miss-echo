<template>
    <div class="list">
        <div class="item" v-for="(item, index) in props.list">
            <div class="img">
                <q-responsive :ratio="16/12">
                    <img :src="item.img" alt=""/>
                </q-responsive>
            </div>
            <div class="content">
                <div class="title">{{item.title}}</div>
                <p>{{item.content}}</p>
                <a class="more" href="#">閱讀更多...</a>
            </div>
            <img class="sticker" src="/intro/sticker.svg" alt="">
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
interface Props {
    list?: any;
}
const props = withDefaults(defineProps<Props>(), {
    list: [
        {
            title: '',
            content: '',
            link: '',
            img: ''
        }
    ]
});

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
        width: 30%
        .img
            .q-responsive
                img
                    object-fit: cover
                    min-height: 100%
                    min-width: 100%
        .content
            padding: 30px 20px
            display: flex
            flex-direction: column
            align-items: flex-start
            .title
                font-weight: 700
                margin-bottom: 10px
                font-size: 17px
            p
                text-align: left
                margin-bottom: 20px
                display: -webkit-box
                -webkit-box-orient: vertical
                -webkit-line-clamp: 2
                overflow: hidden
            .more
                display: inline-block
                color: #78A780
        .sticker
            position: absolute
            top: 0
            height: 20%
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