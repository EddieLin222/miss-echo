<template>
  <div class="collapse">
    <div class="block">
        <div class="item" v-for="(list, index) in listData" :key="index" @click="() => toggleOpen(index)">
            <div class="item-title">
                <h4>{{list.title}}</h4>
                <span class="material-icons">
                    expand_more
                </span>
            </div>
            <div class="item-content" :ref="setCollapse">
                <div class="text" v-html="list.intro"></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

// const collapseHeight = ref<any>(0);
let collapseRefs: any[]= [];
let collapseHeight: any[] = [];
const setCollapse = (el: any) => {
    if(el){
       collapseRefs.push(el) 
    }
}
const listData = [
    {
      title: '我要如何歸還循環餐盒呢？',
      intro: '<p>【方法1｜自行歸還】於訂餐網站之首頁列表 > 點選 餐盒回收 > 點選 抵達合作店家歸還餐盒 > 選擇歸還數目、品項 > 點選 產生回收驗證碼 > 出示您的回收驗證碼(QRCODE)給店家掃描 > 完成歸還餐盒<br><br>【方法2｜外送夥伴歸還】於訂餐網站下訂餐點 > 點選 結帳 > 點選 選擇這次要歸還的餐盒 > 選擇歸還數目、品項 > 點選 確認歸還 > 取餐時將餐盒歸還給外送夥伴 > 完成歸還餐盒</p>',
      open: false
    },
    {
      title: '循環餐盒衛生安全怎麼把關？',
      intro: '<p>平台依循衛福部食藥署的餐具良好清洗作業指引規範，與北市認證合格之廠商合作，並定期抽查合格清消餐廳之狀態，送驗SGS以把關衛生安全，維護循環餐具的清消環節。<br><br>參考資料<br>衛福部規範：<a href="https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179">https://www.fda.gov.tw/tc/siteContent.aspx?sid=3179</a><br>合作清洗廠商：<a href="http://www.songwei2015.com">http://www.songwei2015.com</a></p>',
      open: false
    }
]
const toggleOpen = (index: any) => {
    listData.map((list, i) => {
        if(index === i) {
            list.open = !list.open
            if(list.open){
                collapseRefs[i].style.height = `${collapseHeight[i]}px`
            }else{
                collapseRefs[i].style.height = '0px'
            }
            
        }
    })
}
onMounted(() => {
    collapseRefs.forEach((e, i)=>{
        collapseHeight.push(collapseRefs[i].offsetHeight)
    })
    collapseRefs.forEach(e=>{
        e.style.height = '0px'
    })
    console.log(collapseHeight)
})
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
.collapse
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  font-weight: 700
  margin-top: 15px
  .title
    font-size: 28px
  .block
    width: 100%
    .item-title
        color: #000
        padding: 5px
        display: flex
        justify-content: space-between
        align-items: center
        border-radius: 2px
        border-bottom: solid 2px #78A780
        h4
            margin-right: 20px
            pointer-events: none
            font-size: 16px 
            font-weight: 400
        .button
            width: 30px
            height: 30px
            background-color: #000
            border-radius: 3px
            transition-duration: .5s
        .material-icons
            font-size: 24px
            color: #78A780
    .item-content
        overflow: hidden
        transition-duration: .5s
        // background-color: #eee
        .text
            padding: 20px 10px
            font-weight: 400
            :deep() a
                color: #78A780
</style>