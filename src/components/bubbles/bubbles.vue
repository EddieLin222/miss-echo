<template>
    <div class="bubbles">
        <div class="bubble" v-for="(item, index) in bubbles" :key="index">
            <q-responsive :ratio="1">
                <p>
                    {{item.name}}
                </p>
            </q-responsive>
        </div>
    </div>
</template>
<style scoped lang="sass">
.bubbles
    position: fixed
    right: 20px
    bottom: 20px
    z-index: 9999
    .bubble
        background-color: #78A780
        border-radius: 100%
        padding: 10px
        margin: 10px
        box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, .2)
        .q-responsive
            width: 45px
            display: flex
            align-items: center
            p
                text-align: center
                font-size: 16px
                line-height: 22px
                color: #fff

</style>
<script setup lang="ts">
import { ref } from 'vue';
const bubbles = ref([
    {
        name: '我要訂餐',
        link: '/'
    },
    {
        name: '企業合作',
        link: '/'
    }
])
</script>