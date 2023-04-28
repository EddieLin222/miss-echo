<template>
    <a
        v-if="isOutSideLink"
        :href="props.to"
        target="_blank"
    >
        <slot></slot>
    </a>
    <router-link
        v-else
        :to="props.to"
    >
        <img v-if="props.hasSticker" :class="{'active':props.showSticker}" class="sticker" :src="Sticker" alt="">
        <div class="front">
            <slot></slot>
        </div>
    </router-link>
</template>

<script setup lang="ts">
import { isString } from 'lodash';
import { computed } from 'vue';
import Sticker from '../assets/image/sticker2.png'

interface Props {
    to?: any;
    showSticker?: boolean;
    hasSticker?: boolean;
}
const props = withDefaults(defineProps<Props>(), {
    to: '/',
    showSticker: false,
    hasSticker: false
});
const isOutSideLink = computed(() => (isString(props.to) && props.to.indexOf('http') > -1))


</script>

<style scoped lang="sass">
.active
    opacity: 1 !important
a
    position: relative
    .sticker
        position: absolute
        left: 0
        top: 0
        height: 100%
        width: 100%
        opacity: 0
        transition-duration: .5s
    .front
        position: relative
</style>