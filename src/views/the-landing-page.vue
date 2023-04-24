<template>
  <div class="landing-page">
    <div class="banner">
      <img class="cloud-right" :src="cloudRight" alt="">
      <div class="max-width">
        <div class="normal-padding">
          <h1 class="title">全台首創環保外送，Miss Eco外送美食零垃圾</h1>
          <h4>讓環保與便利兼顧，打造永續新日常 💚</h4>
          <div class="main-area">
            <div class="left">
              <!-- <q-btn unelevated rounded color="primary" label="Unelevated Rounded" :icon="`img:${carIcon}`"/> -->
              <q-btn class="main banner-main" unelevated rounded>
                <q-icon>
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 24C7.35 24 6.015 25.35 6.015 27C6.015 28.65 7.35 30 9 30C10.65 30 12 28.65 12 27C12 25.35 10.65 24 9 24ZM0 1.5C0 2.325 0.675 3 1.5 3H3L8.4 14.385L6.375 18.045C5.28 20.055 6.72 22.5 9 22.5H25.5C26.325 22.5 27 21.825 27 21C27 20.175 26.325 19.5 25.5 19.5H9L10.65 16.5H21.825C22.95 16.5 23.94 15.885 24.45 14.955L29.82 5.22C30.375 4.23 29.655 3 28.515 3H6.315L5.31 0.855C5.07 0.33 4.53 0 3.96 0H1.5C0.675 0 0 0.675 0 1.5ZM24 24C22.35 24 21.015 25.35 21.015 27C21.015 28.65 22.35 30 24 30C25.65 30 27 28.65 27 27C27 25.35 25.65 24 24 24Z"/>
                  </svg>
                </q-icon>
                <p>我要訂餐</p>
                <img class="butterfly" :src="ButterFly" alt="">
              </q-btn>
              <q-btn class="how" flat>
                <q-icon>
                  <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.885 0.885C15.315 0.315 14.55 0 13.755 0H3C1.35 0 0 1.35 0 3V27C0 28.65 1.335 30 2.985 30H21C22.65 30 24 28.65 24 27V10.245C24 9.45 23.685 8.685 23.115 8.13L15.885 0.885ZM16.5 24H7.5C6.675 24 6 23.325 6 22.5C6 21.675 6.675 21 7.5 21H16.5C17.325 21 18 21.675 18 22.5C18 23.325 17.325 24 16.5 24ZM16.5 18H7.5C6.675 18 6 17.325 6 16.5C6 15.675 6.675 15 7.5 15H16.5C17.325 15 18 15.675 18 16.5C18 17.325 17.325 18 16.5 18ZM13.5 9V2.25L21.75 10.5H15C14.175 10.5 13.5 9.825 13.5 9Z" fill="#749279"/>
                  </svg>
                </q-icon>
                <p>如何訂餐</p>
              </q-btn>
            </div>
            <div class="right">
              <img :src="Blfbox" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="service">
      <img class="cloud-left" :src="cloudLeft" alt="">
      <div class="max-width">
        <div class="title-area">
          <Title :title="`Miss Eco 服務介紹`"></Title>
        </div>
        <div class="top">
          <div class="left">
            <img :src="LeftLand" alt="">
          </div>
          <div class="right">
            <div class="inner">
              <img class="text-bg" :src="TextBg" alt="">
              <div class="dot-area">
                <img class="dot" :src="Dot" alt="">
                <img class="dot scale-x-[-1]" :src="Dot" alt="">
              </div>
              <p>Miss Eco透過循環餐盒外送餐點，活動餐點不會產生任何一次性垃圾，打造永續新日常，讓環保再也不麻煩！</p>
            </div>  

          </div>
        </div>
        <div class="bottom">
          <div class="left">
            <img :src="RightLand" alt="">
          </div>
          <div class="right">
            <div class="inner">
              <img class="text-bg" :src="TextBg" alt="">
              <div class="dot-area">
                <img class="dot" :src="Dot" alt="">
                <img class="dot scale-x-[-1]" :src="Dot" alt="">
              </div>
              <p>我們相信人們不是不環保、不愛海龜、討厭北極熊，而是忙碌生活中，缺少便利又環保的新選擇！</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="high-light">
      <div class="max-width">
        <div class="normal-padding">
          <div class="title-area">
            <Title :title="`Miss Eco 三大亮點`"></Title>
          </div>
          <div class="main-area">
            <div class="item">
              <img :src="Light1" alt="">
              <div class="word-area">
                <h5 class="title">零垃圾</h5>
                <p>使用循環餐盒外送<br>過程沒有任何一次性垃圾</p>
              </div>
            </div>
            <div class="item">
              <img :src="Light2" alt="">
              <div class="word-area">
                <h5 class="title">減碳永續</h5>
                <p>減少免洗餐具的碳排<br>推廣健康永續的低碳美食</p>
              </div>
            </div>
            <div class="item">
              <img :src="Light3" alt="">
              <div class="word-area">
                <h5 class="title">友善客服</h5>
                <p>溫馨客服陪同下單到回收<br>LINE一站式便利又安心</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="sop">
      <div class="max-width">
        <div class="normal-padding">
          <div class="title-area">
            <Title :title="`Miss Eco 服務流程`"></Title>
          </div>
          <div class="main-area">
            <div class="item">
              <div class="title">用餐三天前</div>
              <div class="date">2023/04/19</div>
              <div class="item-block">
                <div class="dash"></div>
                <div class="outer">
                  <div class="area">
                    <div class="name">
                      <img class="sticker" :src="Sticker" alt="">
                      <h3>訂餐</h3>
                    </div>
                    <p class="description">請於至少三天前訂餐<br>餐點滿$2000即送</p>
                  </div> 
                  <div class="main-img">
                    <img :src="Tt1" alt="">
                  </div>
                </div>
               
                <p class="description">請於至少三天前訂餐<br>餐點滿$2000即送</p>
                <q-btn class="main" unelevated rounded @click="routeTo()">
                  <q-icon>
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.6 10.34L8.43 7.50999L2.24 1.32999C1.76 0.849988 0.930002 0.979988 0.630002 1.59999C-0.0799976 3.08999 0.180002 4.91999 1.41 6.15999L5.6 10.34ZM12.38 8.52999C13.91 9.23999 16.06 8.73999 17.65 7.14999C19.56 5.23999 19.93 2.49999 18.46 1.02999C17 -0.430012 14.26 -0.070012 12.34 1.83999C10.75 3.42999 10.25 5.57999 10.96 7.10999L1.9 16.17C1.51 16.56 1.51 17.19 1.9 17.58C2.29 17.97 2.92 17.97 3.31 17.58L9.5 11.41L15.68 17.59C16.07 17.98 16.7 17.98 17.09 17.59C17.48 17.2 17.48 16.57 17.09 16.18L10.91 9.99999L12.38 8.52999Z" fill="white"/>
                    </svg>
                  </q-icon>
                  <p>點我看菜單</p>
                </q-btn>
              </div>
            </div>
            <div class="item">
              <div class="title">用餐一天前</div>
              <div class="date">2023/04/21</div>
              <div class="item-block">
                <div class="dash"></div>
                <div class="outer">
                  <div class="area">
                    <div class="name">
                      <img class="sticker" :src="Sticker" alt="">
                      <h3>付款</h3>
                    </div>
                    <p class="description">請於一天前匯款<br>餐點份數可微調(10%內)</p>
                  </div>
                  <div class="main-img">
                    <img :src="Tt2" alt="">
                  </div>
                </div>
                
                <p class="description">請於一天前匯款<br>餐點份數可微調(10%內)</p>
                <q-btn class="main" unelevated rounded @click="handlePopup(2)">
                  <q-icon>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 0C4.98 0 0.5 4.48 0.5 10C0.5 15.52 4.98 20 10.5 20C16.02 20 20.5 15.52 20.5 10C20.5 4.48 16.02 0 10.5 0ZM11.38 15.76V16.12C11.38 16.6 10.99 17 10.5 17C10.02 17 9.62 16.61 9.62 16.12V15.7C8.99 15.55 7.69 15.09 6.93 13.6C6.7 13.16 6.92 12.61 7.38 12.42L7.45 12.39C7.86 12.22 8.32 12.39 8.53 12.78C8.85 13.39 9.48 14.15 10.65 14.15C11.58 14.15 12.63 13.67 12.63 12.54C12.63 11.58 11.93 11.08 10.35 10.51C9.25 10.12 7 9.48 7 7.2C7 7.1 7.01 4.8 9.62 4.24V3.88C9.62 3.39 10.02 3 10.5 3C10.98 3 11.38 3.39 11.38 3.88V4.25C12.45 4.44 13.13 5.01 13.54 5.55C13.88 5.99 13.7 6.63 13.18 6.85C12.82 7 12.4 6.88 12.16 6.57C11.88 6.19 11.38 5.8 10.56 5.8C9.86 5.8 8.75 6.17 8.75 7.19C8.75 8.14 9.61 8.5 11.39 9.09C13.79 9.92 14.4 11.14 14.4 12.54C14.4 15.17 11.9 15.67 11.38 15.76Z" fill="white"/>
                    </svg>
                  </q-icon>
                  <p>費用說明</p>
                </q-btn>
              </div>
            </div>
            <div class="item">
              <div class="title">用餐當天</div>
              <div class="date">2023/04/22</div>
              <div class="item-block">
                <div class="dash"></div>
                <div class="outer">
                  <div class="area">
                    <div class="name">
                      <img class="sticker" :src="Sticker" alt="">
                      <h3>送餐</h3>
                    </div>
                    <p class="description">夥伴使用循環餐盒外送<br>並於傍晚開立電子發票</p>
                  </div>
                  <div class="main-img">
                    <img :src="Tt3" alt="">
                  </div>
                </div>
                
                <p class="description">夥伴使用循環餐盒外送<br>並於傍晚開立電子發票</p>
                <q-btn class="main" unelevated rounded @click="handlePopup(3)">
                  <q-icon>
                    <svg width="15" height="20" viewBox="0 0 15 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.5 18H13.5C14.05 18 14.5 18.45 14.5 19C14.5 19.55 14.05 20 13.5 20H1.5C0.95 20 0.5 19.55 0.5 19C0.5 18.45 0.95 18 1.5 18ZM7.5 5C6.4 5 5.5 5.9 5.5 7C5.5 8.1 6.4 9 7.5 9C8.6 9 9.5 8.1 9.5 7C9.5 5.9 8.6 5 7.5 5ZM7.5 0C10.77 0 14.5 2.46 14.5 7.15C14.5 10.13 12.37 13.27 8.11 16.54C7.75 16.82 7.25 16.82 6.89 16.54C2.63 13.26 0.5 10.13 0.5 7.15C0.5 2.46 4.23 0 7.5 0Z" fill="white"/>
                    </svg>
                  </q-icon>
                  <p>運送範圍</p>
                </q-btn>
              </div>
            </div>
            <div class="item">
              <div class="title">用餐完畢</div>
              <div class="date">2023/04/22</div>
              <div class="item-block">
                <div class="dash"></div>
                <div class="outer">
                  <div class="area">
                    <div class="name">
                      <img class="sticker" :src="Sticker" alt="">
                      <h3>回收</h3>
                    </div>
                    <p class="description">夥伴於約定時間回收餐盒<br>您需清空餐盒廚餘、垃圾</p>
                  </div>
                  <div class="main-img">
                    <img :src="Tt4" alt="">
                  </div>
                </div>
                
                <p class="description">夥伴於約定時間回收餐盒<br>您需清空餐盒廚餘、垃圾</p>
                <q-btn class="main" unelevated rounded @click="handlePopup(4)">
                  <q-icon>
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.69999 5.41C4.46999 5.27 4.38999 4.96 4.52999 4.73L5.69999 2.78L6.72999 1.07C7.11999 0.42 8.05999 0.42 8.44999 1.07L9.92999 3.53L8.69999 5.59L7.97999 6.79C7.81999 7.02 7.50999 7.1 7.26999 6.96L4.69999 5.41ZM20.22 10.97L18.88 8.73C18.74 8.5 18.44 8.42 18.2 8.55L15.6 10.05C15.36 10.19 15.28 10.5 15.42 10.74L17.37 14H18.46C19.07 14 19.66 13.74 20.05 13.27C20.35 12.9 20.5 12.45 20.5 12C20.5 11.64 20.4 11.29 20.22 10.97ZM14.5 19H16C16.76 19 17.45 18.57 17.79 17.89L19.24 15H14.5V14.21C14.5 13.76 13.96 13.54 13.65 13.86L10.86 16.65C10.66 16.85 10.66 17.16 10.86 17.36L13.65 20.15C13.96 20.46 14.5 20.24 14.5 19.8V19ZM7.99999 15H4.19999L3.35999 16.41C3.05999 16.91 3.03999 17.53 3.29999 18.06C3.57999 18.63 4.16999 19 4.81999 19H7.99999C8.27999 19 8.49999 18.78 8.49999 18.5V15.5C8.49999 15.22 8.27999 15 7.99999 15ZM4.61999 12.35L5.31999 12.77C5.69999 13 6.16999 12.65 6.05999 12.22L5.09999 8.38C5.03999 8.12 4.76999 7.95 4.49999 8.02L0.669988 8.98C0.239988 9.09 0.149988 9.66 0.529988 9.89L1.18999 10.29L0.779988 10.98C0.429988 11.57 0.399988 12.29 0.709988 12.9L2.33999 16.16L4.61999 12.35ZM15.52 3.14L14.22 0.97C13.85 0.37 13.2 0 12.5 0H8.96999L12.09 5.2L11.4 5.61C11.02 5.84 11.1 6.42 11.54 6.52L15.37 7.48C15.64 7.55 15.91 7.38 15.98 7.12L16.94 3.29C17.05 2.86 16.58 2.51 16.2 2.74L15.52 3.14Z" fill="white"/>
                    </svg>
                  </q-icon>
                  <p>回收方式</p>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-custom">
      <div class="max-width">
        <Faq :title="`常見問題 Q&A`" :faqData="faqData"></Faq>
      </div>
    </div>
    <div class="bg-custom">
      <div class="max-width">
        <div class="normal-padding">
          <Service :showTitle="`環境影響力`" :showDescription="false" :serviceData="serviceItems"></Service>
        </div>
      </div>
    </div>
    <div class="bg-custom">
      <div class="max-width">
        <div class="tableware">
          <Boxs3 :showTitle="`環保餐盒`"></Boxs3>
        </div>
      </div>
    </div>
    <div class="bg-custom">
      <div class="max-width">
        <div class="shared">
          <Boxs :showTitle="`實拍分享`" :list="list"></Boxs>
        </div>
      </div>
    </div>
    <div class="bg-custom">
      <div class="max-width">
        <List :companyList="companyList"></List>
      </div>
    </div>
  </div>
  <custom-dialog :data="popupData" v-model="dialog"></custom-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, onMounted } from 'vue';
import Boxs from "../components/boxs/boxs.vue"
import Boxs3 from "../components/boxs/boxs3.vue"
import ButterFly from '../assets/image/butterfly.png'
import Blfbox from '../assets/image/elfbox.png'
import LeftLand from '../assets/image/left_land.png'
import RightLand from '../assets/image/right_land.png'
import Title from '../components/title/title-1.vue'
import Dot from '../assets/image/dot.svg'
import TextBg from '../assets/image/text-bg.png'
import Light1 from '../assets/image/light1.png'
import Light2 from '../assets/image/light2.png'
import Light3 from '../assets/image/light3.png'
import Sticker from '../assets/image/sticker.svg'
import Tt1 from '../assets/image/tt1.png'
import Tt2 from '../assets/image/tt2.png'
import Tt3 from '../assets/image/tt3.png'
import Tt4 from '../assets/image/tt4.png'

import Money from '../assets/image/money.svg'
import Car from '../assets/image/car.svg'
import Recycle from '../assets/image/recycle.svg'

import cloudLeft from '../assets/image/cloudL.png'
import cloudRight from '../assets/image/cloudR.png'

import Service from "../components/service/service.vue"
import Faq from "../components/faq/faq.vue"
import List from "../components/list/list2.vue"
import { FaqType, PromotionType } from '@/types/delivery.type';
import { db } from '@/common/firebase';
import { useFirestore } from '@vueuse/firebase/useFirestore'
import { CompanyType, ServiceDataType } from '@/types/booking.type';
// import { useElementSize, useWindowSize } from '@vueuse/core'

import CustomDialog from '../components/custom-dialog.vue';
import router from '@/router/router';

const faqData = ref<FaqType[]>([])
const list = ref<PromotionType[]>([])

const pageHomeDB = db().collection('Page').doc('Delivery')
const pageHomeData = ref<{
    faqList: FaqType[],
    promotionList: PromotionType[]
}>((useFirestore(pageHomeDB)) as any)
watchEffect(() => {
  if (pageHomeData.value) {
    faqData.value = pageHomeData.value.faqList;
    list.value = pageHomeData.value.promotionList;
  }
})

const serviceItems = ref<ServiceDataType>({
  introduction: '',
  partner: {
    img: '',
    info: ''
  },
  event: {
    img: '',
    info: ''
  },
  reduce: {
    img: '',
    info: ''
  }
})

const companyList = ref<CompanyType[]>([])

// Firestore
const serviceDB = db().collection('Page').doc('Booking')
const serviceData = ref<{
  serviceData: ServiceDataType,
  companyList: CompanyType[]
}>((useFirestore(serviceDB)) as any)
watchEffect(() => {
  if (serviceData.value) {
    serviceItems.value = serviceData.value.serviceData;
    companyList.value = serviceData.value.companyList;
  }
})

function handlePopup(index: number){
  dialog.value = true
  currentIndex.value = index
}

const routeTo = ()=>{
  router.push('/menu')
}

const currentIndex = ref(0)
const popupData = computed(()=>{
  if(currentIndex.value === 2){
    return{
      title: '費用說明',
      img: Money,
      listArr: [
        {
          value: '餐點費用：訂購的餐點總金額'
        },
        {
          value: '運費：依照您的訂餐地點與餐廳距離計算'
        },
        {
          value: '清消費：餐盒3元/個、杯子3元/個，依據您訂購的餐點份數計算唷'
        },
        {
          value: '其他加值服務',
          items: [
            {
              value: '指定位置送餐 $150'
            },
            {
              value: '指定位置回收 $150'
            },
            {
              value: '廚餘處理 $1000'
            }
          ]
        },
        {
          value: '匯款帳戶：',
          items: [
            {
              value: '戶名：一口覓食股份有限公司'
            },
            {
              value: '銀行：永豐銀行 城中分行 807'
            },
            {
              value: '帳號：126-018-0005320-9'
            }
          ]
        }
      ]
    }
  }
  if(currentIndex.value === 3){
    return{
      title: '運送範圍',
      img: Car,
      listArr: [
        {
          value: '桃園以北。台北全區，與新北汐止、板橋、中和、永和、新莊、樹林、土城、蘆洲、三重以外的地區，會需要加收遠距服務費唷 !'
        }
      ]
    }
  }
  if(currentIndex.value === 4){
    return{
      title: '回收方式',
      img: Recycle,
      listArr: [
        {
          value: '餐盒需清空廚餘，丟掉垃圾，淨空餐盒內部'
        },
        {
          value: '餐盒闔上蓋子，將餐盒裝入「循環袋/箱」中疊放'
        },
        {
          value:  '餐具如湯匙、叉子，統一收入「餐具盒」中'
        },
        {
          value: '杯子.........'
        }
      ]
    }
  }
  
})

const dialog = ref(false)

</script>

<style scoped lang="sass">
:deep()
  .faq
    .title
      font-size: 34px
      line-height: 34px
:deep()
  .service
    .title
      font-size: 34px
      line-height: 34px
:deep()
  .list
    .title
      font-size: 34px
      line-height: 34px
:deep()
  .boxs
    .title
      font-size: 34px
      line-height: 34px
.bg-custom
  background-color: #FFFBED
  width: 100%
  display: flex
  justify-content: center
.q-btn--rounded
  border-radius: 50px !important
.q-btn.main
  background-color: #749279
  position: relative
  padding: 40px 100px
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25)
  svg
    path
      fill: #fff
  p
    margin-left: 10px
    font-size: 24px
  img.butterfly
    position: absolute
    width: 120px
    top: 0
    right: 0
    transform: translate(40%, -40%)
.q-btn.how
  position: relative
  padding: 10px 40px
  margin-top: 15px
  svg
    path
      fill: #749279
  p
    margin-left: 10px
    color: #749279
    font-size: 24px
  img
    position: absolute
    width: 60px
    top: 0
    right: 0
    transform: translate(40%, -40%)
.landing-page
  display: flex
  flex-direction: column
  align-items: center
  .max-width
    width: 100%
    max-width: 1600px
  .normal-padding
    width: 100%
    padding: 0px 5%
  .banner
    background-color: #DDEFE0
    width: 100%
    display: flex
    justify-content: center
    padding: 60px 0px
    position: relative
    overflow-x: hidden
    .cloud-right
      position: absolute
      right: 0
      top: 0
      transform: translateX(60%)
      width: 60%
      max-width: 700px
  h1.title
    font-weight: 700
    font-family: 'Noto Serif TC', serif
    font-size: 56px
    line-height: 70px
    display: inline-block
    position: relative
  h4
    font-family: 'Noto Serif TC', serif
    color: #749279
    font-weight: 700
    font-size: 32px
    margin-top: 10px
    position: relative
  p
    color: #fff
    font-weight: 700
  .main-area
    display: flex
    margin-top: 30px
    position: relative
  .left
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    width: 50%
    gap: 20px
  .right
    width: 50%
    img
      width: 100%
  .title-area
    display: flex
    justify-content: center
    :deep() .title
      font-size: 30px
  .service
    background-color: #FFFBEE
    width: 100%
    display: flex
    justify-content: center
    padding: 60px 0px
    position: relative
    .cloud-left
      position: absolute
      transform: translate(-50%, -70%)
      width: 40%
      top: 0
      left: 0
      max-width: 600px
    .top, .bottom
      display: flex
      align-items: stretch
      // height: 100%
      margin: 50px 0px 0px 0px
      position: relative
      .left
        width: 50%
        overflow-x: hidden
        display: flex
        flex-direction: row
        justify-content: flex-end
        img
          min-width: 820px
      .right
        width: 50%
        padding: 0px 30px
        display: flex
        .inner
          position: relative
          display: flex
          flex-direction: column
          justify-content: center
          height: 100%
          padding: 0px 30px
        p
          color: #000
          font-weight: 500
          font-size: 20px
          position: relative
          padding: 0px 40px
          transform: translateY(-10px)
        img
          position: relative
        .text-bg
          position: absolute
          height: 100%
          width: 100%
          left: 50%
          transform: translateX(-50%)
          top: 0
        .dot-area
          display: flex
          justify-content: space-between
        .dot
          width: 30px
    .bottom
      flex-direction: row-reverse
      .left
        justify-content: flex-start
  .high-light
    width: 100%
    display: flex
    justify-content: center
    background-color: #F9F1DF
    padding: 60px 0px
    .main-area
      gap: 5%
      margin: 60px 0px 30px 0px
      .item
        display: flex
        flex-direction: column
        align-items: center
        .word-area
          display: flex
          flex-direction: column
          align-items: center
        h5.title
          font-weight: 700
          color: #749279
          font-size: 28px
          margin: 20px 0px
        p
          font-weight: 500
          font-size: 20px
          color: #888787
          text-align: center
          width: 100%
  .sop
    background-color: #FFFBEE
    display: flex
    justify-content: center
    width: 100%
    padding: 60px 0px
    .main-area
      margin-top: 70px
      .item
        width: 25%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: flex-start
        .item-block
          width: 100%
          display: flex
          flex-direction: column
          align-items: center
          justify-content: stretch
          margin-top: 30px
          height: 100%
          position: relative
          &::after
            content: ''
            position: absolute
            border-top: solid 1px #B6DAB6
            width: 100%
          .dash
            border-left: dashed 1px #B6DAB6
            height: 50px
            position: relative
            &::after
              content: ''
              width: 20px
              height: 20px
              border-radius: 100%
              background-color: #B6DAB6
              position: absolute
              top: 0
              left: 50%
              transform: translate(-50%, -50%)
        .title
          font-size: 24px
          font-weight: 700
        .date
          color: #888787
          font-size: 16px
          margin-top: 15px 
        .main-img
          width: 100%
          display: flex
          justify-content: center
          margin-top: 20px
          img
            max-width: 200px
        .area
          display: flex
          justify-content: center
          p
            display: none
        .name
          position: relative
          padding: 0px 55px
          h3
            font-size: 20px
            line-height: 45px
            position: relative
          .sticker
            position: absolute
            top: 0
            left: 50%
            transform: translateX(-50%)
        .description
          color: #000
          font-size: 16px
          font-weight: 500
          margin: 30px 0px
          width: 60%
          flex: 1
          text-align: center
        .q-btn
          padding: 15px 50px
          p
            font-size: 16px
      .item:first-child
        .item-block
          &::after
            content: ''
            position: absolute
            border-top: solid 1px #B6DAB6
            width: 50%
            right: 0
      .item:last-child
        .item-block
          &::after
            content: ''
            position: absolute
            border-top: solid 1px #B6DAB6
            width: 50%
            left: 0
  .shared, .tableware
    width: 100%
    :deep()
      .boxs
        padding: 40px 10% 100px 10%

:deep()
  .list
    padding: 50px 10% 80px 10%
@media (max-width: 1024px)
  .landing-page
    .sop
      .main-area
        flex-wrap: wrap
        margin-top: 0px
        .item
          width: 50%
          margin-top: 70px
    
@media (max-width: 890px)
  .landing-page
    .service
      .top, .bottom
        flex-direction: column-reverse
        overflow: hidden
        .right
          padding: 0px
          .inner
            // height: 100%
            padding: 90px 0px
            overflow: hidden
            .text-bg
              min-width: 500px
            .dot-area
              padding: 0px 15px
            p
              transform: translateY(0px)
              padding: 0px 50px
        .left
          position: relative
          // overflow-y: hidden
          overflow-x: visible
          img
            z-index: 9
            position: relative
            transform: translateY(-80px)
        .left, .right
          width: 100%
@media (max-width: 780px)
  .landing-page
    .high-light
      .main-area
        flex-direction: column
        gap: 20px
        .item
          flex-direction: row
          img
            width: 30%
          .word-area
            margin-left: 15px
            h5.title
              margin-top: 0
              margin-bottom: 10px
            p
              width: 100% 
@media (max-width: 740px)
  .landing-page
    .banner
      h1.title, h4
        text-align: center
      h4
        margin-top: 30px
      .main-area
        align-items: center
        flex-direction: column
        .left
          width: 100%
          margin: 25px 0px 35px 0px
        .right
          width: 100%
@media (max-width: 640px)
  .landing-page
    :deep()
      .title-area
        .title
          font-size: 24px !important
    :deep()
      .faq, .service, .list
        .title
          font-size: 24px !important
    .q-btn
      p
        font-size: 16px
    .banner
      .normal-padding
        display: flex
        flex-direction: column
        align-items: center
      h1.title
        font-size: 24px
        line-height: 38px
      h4
        font-size: 16px
        margin-top: 10px
        line-height: 24px
      .q-btn.main
        padding: 20px 60px
        .butterfly
          width: 70px
    .sop
      padding-bottom: 0px
      .main-area
        margin-top: 60px
        margin-left: 7% 
        .item
          width: 100%
          padding-bottom: 80px
          position: relative
          margin-top: 0px
          align-items: flex-start
          padding-left: 10vw
          &>.title
            transform: translateY(-25%)
          .date
            margin-top: 0px
            transform: translateY(-25%)
          &::before
            content: ''
            width: 20px
            height: 20px
            border-radius: 100%
            background-color: #B6DAB6
            position: absolute
            top: 0
            left: 0
            transform: translate(-50%, 0%)
          &::after
            content: ''
            position: absolute
            border-left: solid 1px #B6DAB6
            width: 0 !important
            height: 100%
            top: 0
            left: 0
          .item-block
            align-items: flex-start
            margin-top: 10px
            .dash
              display: none
            .outer
              display: flex
              flex-direction: row-reverse
              margin-bottom: 30px
              .area
                display: flex
                flex-direction: column
                justify-content: center
                padding: 0px 20px
                width: 60%
                .name
                  padding: 0px
                  h3
                    text-align: center
                p
                  display: block
                  width: 100%
                  flex: 0
              .main-img
                margin-top: 0px
                width: 40%
                img
                  width: 100%
                  object-fit: contain
            p.description
              display: none
            &::after
              border-top: solid 0px rgba(0, 0, 0, 0) !important
        .item:last-child
          &::after
            content: ''
            position: absolute
            border-left: solid 1px rgba(0, 0, 0, 0)
            width: 100%
            height: 100%
            top: 0
            left: 0
    .shared
      :deep()
        .boxs
          padding: 40px 0% 100px 0%
@media (max-width: 475px)
  .landing-page
    .shared, .tableware
      :deep()
        .boxs
          padding: 40px 5% 100px 5%
@media (max-width: 440px)
  .landing-page
    .sop
      .main-area
        .item
          &>.title
            font-size: 18px
          .item-block
            .outer
              .area
                .name
                  h3
                    font-size: 16px
                p
                  margin: 0
                  margin-top: 10px
                  font-size: 14px
    .high-light
      .main-area
        .item
          img
            width: 50%
          .word-area
            h5.title
              font-size: 18px
            p
              font-size: 14px

    .service
      .bottom
        margin-top: 0px
      .top, .bottom
        .right
          p
            font-size: 16px
      .top
        .left
          img
            min-width: 450px
            transform: translate(-40px, -80px)
      .bottom
        .left
          img
            min-width: 450px
            transform: translate(40px, -80px)
</style>