<template>
  <div class="journal">
    <Banner></Banner>
    <div class="custom-container">
      <Podcast></Podcast>
      <Youtube></Youtube>
      <Salon :list="list"></Salon>
    </div>
  </div>
</template>

<script setup lang="ts">
import Banner from "../components/banner/banner-2.vue"
import Podcast from "../components/posts/posts-2.vue"
import Youtube from "../components/video/video.vue"
import Salon from "../components/list/list4.vue"

const list ={
  img: '',
  title: '講座分享：環保與便利共存，打造永續新日常',
  intro: 'Miss Eco已經到達＿地方，與＿人分享，身為醫學生的我們....\n演講主題包含：健康、循環經濟...\n形式包含：企業會員料理工作坊、校園工作坊、企業內部健康促進講座...',
  link: ''
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
.journal
  background-color: #FFFBED
  .custom-container
    padding: 40px 15% 40px 15%
    width: 100%
@media (max-width: 540px)
  .journal
    .custom-container
      padding: 40px 10% 40px 10%

</style>