<template>
  <div class="posts">
    <Title title="Podcast"></Title>
    <div class="post-container">
      <div class="left">
        <img :src="props.podcastData.mainImg">
        <div class="divider"></div>
        <div class="intro">
          {{props.podcastData.intro}}
        </div>
      </div>
      <div class="right">
        <div class="title-block">
          <div class="title">意識生活 Health Impact</div>
          <div class="s-title">Miss Eco</div>
        </div>
        <List :list="props.podcastData.lists"></List>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "../title/title-1.vue"
import List from "../list/list3.vue"


interface Props {
  podcastData?: any;
}
const props = withDefaults(defineProps<Props>(), {
  podcastData: {
    mainImg: '',
    intro: '',
    lists: []
  }
});

// const emit = defineEmits<{
//   (e: 'update:modelValue', value: string): void;
// }>();
</script>

<style scoped lang="sass">
.posts
  width: 100%
  .post-container
    display: flex
    gap: 35px
    margin-top: 20px
    .left
      flex: 1
      display: flex
      flex-direction: column
      // border: solid 3px
      // justify-content: space-between
      img
        width: 100%
      .divider
        width: 100%
        border-bottom: solid 1px #A9A9A9
        margin: 30px 0px
      .intro
        line-height: 25px
    .right
      flex: 2
      border-top: solid 1px #A9A9A9
      padding-top: 10px
      // border: solid 3px
      .title-block
        .title
          font-size: 24px
          font-weight: 700
@media (max-width: 840px)
  .posts
    .post-container
      flex-direction: column
</style>