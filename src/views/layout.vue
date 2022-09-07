<template>
  <div v-html="htmlFilter(scriptText)"></div>
  <Header></Header>
  <router-view />
  <Book></Book>
  <Bubbles></Bubbles>
  <Footer></Footer>
</template>
<script setup lang="ts">
import Header from "../components/header/header-1.vue"
import Book from "../components/book/book.vue"
import Bubbles from "../components/bubbles/bubbles.vue"
import Footer from "../components/footer/footer-1.vue"
import { useScriptTag, watchOnce } from "@vueuse/core";
import { useScriptStore } from "@/stores/script.store";
import { computed, nextTick, onMounted, ref, watchEffect } from "vue";
import { Head, useHead } from "@vueuse/head"


const scriptStore = useScriptStore()
const scriptText = ref('');
const htmlToScriptFilter = (htmlText: string) => {
  let _scriptText = ''
  const scripts = htmlText.match(/<script>(.*?)<\/script>/gs)
  if (scripts) {
    scripts.forEach(item => {
      _scriptText += `try {${item.replaceAll('</scr', '<scr').replaceAll('<script>', '')}} catch (error) {console.log(error)};\n`
    });
  }


  return _scriptText
}

const htmlFilter = (htmlText: string) => {
  return htmlText.replace(/<script>(.*?)<\/script>/gs, '')?.replaceAll('</scr', '<scr').replaceAll('<script>', '')
}


watchEffect(() => {
  if (scriptStore.datum.value && scriptStore.datum.value.scriptData) {
    scriptText.value = scriptStore.datum.value.scriptData.text;
  }
})

const isRender = ref(false)

watchOnce(scriptText, async () => {
  await nextTick()
  isRender.value = true;
  const scriptTextArray = []
  const regex = /<script [^>]*src=['"]([^'"]+)[^>]*>/g;
  let m;
  while ((m = regex.exec(scriptText.value.replaceAll('\n', ''))) !== null) {
    if (m && m.length > 1) {
      scriptTextArray.push(m)
    }
  }
  scriptTextArray.forEach(_scriptRegExpExecArray => {
    if (document.head.innerHTML.indexOf(_scriptRegExpExecArray[1]) == -1) {
      const script = document.createElement('script');
      script.async=_scriptRegExpExecArray[0].indexOf('async')>-1;
      script.defer=_scriptRegExpExecArray[0].indexOf('defer')>-1;
      script.src = _scriptRegExpExecArray[1];
      document.head.appendChild(script);
    }

  });

})



useHead({
  script: [

    {
      children: computed(() => isRender.value ? htmlToScriptFilter(scriptText.value) : ''),
      body: true
    },
  ],
})

// useScriptTag(
//   '/script.js',
//   // on script tag loaded.
//   (el: HTMLScriptElement) => {
//     // do something
//     console.log('fb script', el);

//   },
// )
</script>

