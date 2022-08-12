<template>
  <div class="posts">
    <Title title="Podcast"></Title>
    <div class="post-container">
      <div class="left">
        <img src="/podcast/podcast.svg">
        <div class="divider"></div>
        <div class="intro">
          {{podcastData.intro}}
        </div>
      </div>
      <div class="right">
        <div class="title-block">
          <div class="title">意識生活 Health Impact</div>
          <div class="s-title">Miss Eco</div>
        </div>
        <List :list="podcastData.list"></List>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Title from "../title/title-1.vue"
import List from "../list/list3.vue"

const podcastData = {
  intro: 'Podcast 簡介文字簡介文字簡介文簡介文字簡介文字簡介文字簡介文字簡介文介文簡介文字簡介文簡介文字簡介文。',
  list: [
    {
      date: '2022年6月30日',
      title: '15｜【食補中藥小教室-2  黃耆🌱】',
      intro: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
      link: ''
    },
    {
      date: '2022年6月30日',
      title: '15｜【食補中藥小教室-2  黃耆🌱】',
      intro: '我們製作了一系列【食補中藥小教室】，每集介紹一味藥，分享藥材的特色、功效以及入菜的食譜，希望讓健康飲食，中藥食補進入大家的生活！今天要跟大家分享的是 『黃耆』！',
      link: ''
    }
  ]
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