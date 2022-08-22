<template>
    <div class="list">
        <Title title="綠色沙龍"></Title>
        <div class="item">
            <div class="left">
                <q-responsive class="img-block" :ratio="1">
                    <img :src="props.salonData.img" alt=""/>
                </q-responsive>
            </div>
            <div class="right">
                <div class="title-block">
                    <div class="s-title">綠色沙龍</div>
                    <div class="title">{{props.salonData.title}}</div>
                </div>
                <div class="content">
                    <p v-text="props.salonData.intro"></p>
                </div>
                <QRouterLink class="book" :to="props.salonData.link">
                    預約演講
                </QRouterLink>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import Title from "../title/title-1.vue"
import { ref, onMounted } from 'vue';
interface Props {
    salonData?: any;
}
const props = withDefaults(defineProps<Props>(), {
    salonData: {
        img: '',
        title: '',
        intro: '',
        link: ''
    }
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.list
    display: flex
    align-items: flex-start
    flex-direction: column
    margin-top: 80px
    width: 100%
    .item
        display: flex
        width: 100%
        gap: 30px
        .left
            flex: 1
            padding: 30px
            .img-block
                width: 100%
                background-color: #d9d9d9
                border-radius: 10px
                overflow: hidden
        .right
            flex: 2
            display: flex
            flex-direction: column
            justify-content: center
            align-items: flex-start
            .title-block
                width: 100%
                .s-title
                    font-size: 13px
                    margin-bottom: 5px
                .title
                    font-size: 18px
                    font-weight: 700
            .content
                color: #888787
                margin: 20px 0px
                width: 100%
                p
                    white-space: pre-line

            .book
                display: inline-flex
                align-items: center
                padding: 4px 15px
                border-radius: 30px
                background-color: #78A780
                color: #fff
                font-weight: 700
                letter-spacing: 1px
                margin-top: 10px
@media (max-width: 980px)
    .list
        .item
            flex-direction: column
            .left
                padding: 0px
                margin-top: 20px
            .right
                align-items: center
</style>