<template>
    <div>
        <q-form
            @submit="onSubmit"
            @validation-error="scrollToError"
            class="bg-[#FFFBED] pb-16"
            autofocus
            ref="formRef"
        >

            <template v-if="currentPage === 1">


                <!-- Ｍiss Eco 企業服務預約 -->
                <section class="
    pt-12 lg:pt-16 
    px-8 lg:px-40 

     ">
                    <!-- Ｍiss Eco 企業服務預約 -->
                    <div class="
        mb-10 lg:mb-16">
                        <section-title title="Ｍiss Eco 企業服務預約" />

                        <ul class="
        font-['Noto_Serif_TC'] font-black
        mt-5 lg:mt-8
        lg:flex">
                            <li>📌滿20份餐點即享服務</li>
                            <li class="lg:ml-5">📌至少3天前預約訂餐</li>
                            <li class="lg:ml-5">📌服務範圍為桃園以北</li>
                        </ul>



                        <ul class="
        font-['Noto_Serif_TC'] font-black
        mt-4">
                            <li>👉訂單填寫完畢後，請加入Line官方帳號將由專人為您服務！</li>
                        </ul>
                    </div>
                    <!-- 訂餐單位 -->
                    <div class="
        mb-10 lg:mb-16
        w-full
        lg:flex 
        justify-between">
                        <q-input
                            :ref="(item: any) => formDataRef['訂餐單位'] = item"
                            @blur="() => formData['訂餐單位'] = formData['訂餐單位'] === undefined ? '' : formData['訂餐單位']"
                            :error="formData['訂餐單位'] && formData['訂餐單位'].length == 0"
                            class="w-full font-['Noto_Serif_TC'] "
                            v-model="formData['訂餐單位']"
                            label-slot
                            hint="ex：公司名稱、企業品牌、活動單位"
                            bottom-slots
                        >

                            <template v-slot:label>
                                <div class="font-black question-text-color">訂餐單位*</div>
                            </template>

                            <template v-slot:error>
                                此項必填
                                <div class="mt-1">
                                    ex：公司名稱、企業品牌、活動單位
                                </div>
                            </template>

                        </q-input>
                        <div class="h-1 w-[10%]"></div>
                        <div class="mt-5 lg:mt-0 relative w-full">
                            <q-input
                                @focus="orderDateInputFocusStatus = true; formData['訂餐日期'] = '';"
                                class=" font-['Noto_Serif_TC'] "
                                v-model="formData['訂餐日期']"
                                clearable
                                label-slot
                                :rules="[(val: any) => !!val || '此項必填']"
                            >
                                <template v-slot:label>
                                    <div class="font-black question-text-color">訂餐日期*</div>
                                </template>
                            </q-input>
                            <div
                                v-if="orderDateInputFocusStatus"
                                @click="orderDateInputFocusStatus = false;"
                                class="fixed top-0 left-0 w-screen h-screen !bg-black !bg-opacity-50 z-10"
                            >

                            </div>
                            <q-date
                                class="z-20 absolute -top-[300%] lg:-left-1/4"
                                v-if="orderDateInputFocusStatus"
                                v-model="formData['訂餐日期']"
                                :options="dateFilter"
                            >
                                <div class="row items-center justify-end">
                                    <q-btn
                                        @click="formData['訂餐日期'] = ''; orderDateInputFocusStatus = false;"
                                        label="取消"
                                        color="primary"
                                        flat
                                    />
                                    <q-btn
                                        @click="orderDateInputFocusStatus = false;"
                                        label="確定"
                                        color="primary"
                                    />
                                </div>
                            </q-date>

                        </div>




                    </div>
                    <!-- 新增品項 -->
                    <div class="
        mb-10 lg:mb-16">
                        <div class=" mb-5">
                            <div
                                class=" flex items-center"
                                @click="handleAddFormDataItem()"
                            >
                                <q-btn
                                    class="mr-2"
                                    size="sm"
                                    round
                                    color="secondary"
                                    text-color="black"
                                >
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line
                                            y1="8"
                                            x2="16"
                                            y2="8"
                                            stroke="black"
                                            stroke-width="4"
                                        />
                                        <line
                                            x1="8"
                                            y1="8.74228e-08"
                                            x2="8"
                                            y2="16"
                                            stroke="black"
                                            stroke-width="4"
                                        />
                                    </svg>

                                </q-btn>
                                <span class="text-lg font-black font-['Noto_Serif_TC']">新增品項</span>
                            </div>
                            <p class="mt-5 mb-10">
                                訂購不同品項或不同餐廳請按『新增品項+』點餐唷‼️
                            </p>

                        </div>
                        <template
                            v-for="(item, index) in formData['品項']"
                            :key="`品項${index}`"
                        >
                            <div
                                class="relative rounded-xl pt-4 pb-10 px-8 w-full mb-7"
                                style="background-color: var(--q-secondary);"
                            >
                                <q-btn
                                    @click="handleRemoveFormDataItem(index)"
                                    square
                                    v-if="index != formData['品項'].length - 1"
                                    dense
                                    flat
                                    class=" w-15 h-15
                                absolute
                               left-1/2 lg:-left-7
                              -top-6 lg:top-1/2
                              -translate-x-[60%] lg:translate-x-0
                               translate-y-0     lg:-translate-y-[52%]"
                                >

                                    <svg
                                        class="w-10 lg:w-15
                                   h-10 lg:h-15"
                                        viewBox="0 0 52 55"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="2"
                                            y="2"
                                            width="48"
                                            height="51"
                                            rx="3"
                                            fill="black"
                                            stroke="#778D7E"
                                            stroke-width="4"
                                        />
                                        <line
                                            x1="13"
                                            y1="26.5"
                                            x2="39"
                                            y2="26.5"
                                            stroke="white"
                                            stroke-width="7"
                                        />
                                    </svg>

                                </q-btn>


                                <div class="
                        w-full
                        lg:flex 
                        justify-between">
                                    <q-input
                                        :ref="(item: any) => formDataRef[`品項${index}餐廳編號`] = item"
                                        @blur="() => item['餐廳編號'] = item['餐廳編號'] === undefined ? '' : item['餐廳編號']"
                                        class="w-full font-['Noto_Serif_TC'] "
                                        v-model="item['餐廳編號']"
                                        label-slot
                                        bottom-slots
                                        :error="item['餐廳編號'] && item['餐廳編號'].length == 0"
                                    >
                                        <template v-slot:label>
                                            <div class="font-black question-text-color">餐廳編號*</div>
                                        </template>
                                        <template v-slot:hint>
                                            <div class="">
                                                <a
                                                    style="color: var(--q-primary);"
                                                    href="menu"
                                                    target="_blank"
                                                    class="font-black underline"
                                                >
                                                    查看菜單
                                                </a>
                                                ，若有確定希望訂購的店家，請填寫網站中的菜單編號
                                            </div>
                                        </template>
                                        <template v-slot:error>
                                            此項必填
                                            <div class="mt-1">
                                                <a
                                                    style="color: var(--q-primary);"
                                                    href="menu"
                                                    target="_blank"
                                                    class="font-black underline"
                                                >
                                                    查看菜單
                                                </a>
                                                ，若有確定希望訂購的店家，請填寫網站中的菜單編號
                                            </div>
                                        </template>

                                    </q-input>
                                    <div class="hidden lg:!block
                    h-1 w-[10%]"></div>
                                    <q-input
                                        class="mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                        v-model="item['品項名稱']"
                                        label-slot
                                        :rules="[(val: any) => !!val || '此項必填']"
                                    >

                                        <template v-slot:label>
                                            <div class="font-black question-text-color">品項名稱*</div>
                                        </template>
                                    </q-input>




                                </div>
                                <div class="
                        mt-10 
                        w-full
                        lg:flex 
                        justify-between">
                                    <q-input
                                        class="w-full font-['Noto_Serif_TC'] "
                                        v-model="item['訂購份數']"
                                        label-slot
                                        hint="請注意「餐點總份數須滿20份」才享辦公室客製化訂單服務唷！"
                                        :ref="(item: any) => formDataRef[`品項${index}訂購份數`] = item"
                                        @blur="() => item['訂購份數'] = item['訂購份數'] === undefined ? '' : item['訂購份數']"
                                        :error="item['訂購份數'] && item['訂購份數'].length == 0"
                                    >
                                        <template v-slot:label>
                                            <div class="font-black question-text-color">訂購份數*</div>
                                        </template>
                                        <template v-slot:error>
                                            此項必填

                                            <div class="mt-1">
                                                請注意「餐點總份數須滿20份」才享辦公室客製化訂單服務唷！
                                            </div>
                                        </template>

                                    </q-input>
                                    <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                    <q-input
                                        class="mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                        v-model="item['特殊飲食習慣']"
                                        label-slot
                                        hint="ex：全素/蛋奶素"
                                    >
                                        <template v-slot:label>
                                            <div class="font-black question-text-color">特殊飲食習慣</div>
                                        </template>

                                    </q-input>
                                </div>
                            </div>
                        </template>

                    </div>

                    <!-- 餐食場景 -->

                    <div class="
                mb-10 lg:mb-16">
                        <div class="mb-5 text-lg font-black font-['Noto_Serif_TC'] flex">
                            餐食場景*


                        </div>



                        <q-option-group
                            class="lg:w-[40%] justify-between "
                            v-model="formData['餐食場景']"
                            :options="['會議盒餐', '活動餐敘', '無肉日響應', '午茶點心', '精緻 Buffet', '工作坊'].map((o) => ({ 'label': o, 'value': o }))"
                            color="primary"
                            inline
                        />



                    </div>
                    <div>

                    </div>

                </section>

                <!-- 請務必加入【Line官方帳號】 -->
                <section class="
    pt-12 lg:pt-16 
    px-8 lg:px-40  
    bg-[#FFFBED] ">
                    <div class="
        mb-10 lg:mb-16">
                        <section-title title="請務必加入【Line官方帳號】" />

                        <p class="mt-5">
                            由專人服務 掃描以下Qrcode， ( ID：<QRouterLink
                                to="https://line.me/R/ti/p/@595oomwf"
                                class="underline font-black"
                                style="color: var(--q-primary);"
                            >@595oomwf</QRouterLink> ) 並傳訊息告知您的訂餐姓名，訂餐單位，將由專人為您服務唷！
                        </p>

                        <q-img
                            class="mt-5 
           w-full lg:w-[15vw] min-w-[200px]
           h-auto lg:h-[15vw] min-h-[200px]
              "
                            src="@/assets/lineQRCode.png"
                        />

                    </div>


                    <div>
                        <q-btn
                            @click="handleNextPage()"
                            class="bg-[#778D7E] text-white w-full lg:w-auto"
                            label="繼續"
                            type="submit"
                        />

                    </div>

                </section>
            </template>

            <template v-if="currentPage === 2">



                <!-- 訂單資訊 -->
                <section class="
                pt-12 lg:pt-16 
    px-8 lg:px-40 
    bg-[#FFFBED] ">
                    <div>
                        <q-btn
                            @click="currentPage -= 1"
                            class="bg-[#778D7E] text-white w-auto"
                            icon="arrow_back"
                            label="返回"
                        />

                    </div>

                    <div class="
                    mt-8
        mb-10 lg:mb-16">
                        <section-title title="訂單資訊" />
                        <div class="bg-[#DDEFE0] rounded-xl pt-4 pb-24 px-8 w-full mt-6 mb-7">
                            <!-- 訂餐姓名 -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['訂餐姓名']"
                                    label-slot
                                    :rules="[(val: any) => !!val || '此項必填']"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">訂餐姓名*</div>
                                    </template>
                                </q-input>
                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['聯絡電話']"
                                    label-slot
                                    :rules="[(val: any) => !!val || '此項必填']"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">聯絡電話*</div>
                                    </template>
                                </q-input>
                            </div>
                            <!-- 您的email -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full lg:w-[48%] font-['Noto_Serif_TC'] "
                                    v-model="formData['您的email']"
                                    label-slot
                                    :rules="[(val: any) => !!val || '此項必填']"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">您的email*</div>
                                    </template>
                                </q-input>


                            </div>

                            <!-- 電子發票抬頭 & 電子發票統編 -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['電子發票抬頭']"
                                    label-slot
                                    hint="請提供公司抬頭，電子發票將於訂單當天開立，無則填寫無。"
                                    :ref="(item: any) => formDataRef['電子發票抬頭'] = item"
                                    @blur="() => formData['電子發票抬頭'] = formData['電子發票抬頭'] === undefined ? '' : formData['電子發票抬頭']"
                                    :error="formData['電子發票抬頭'] && formData['電子發票抬頭'].length == 0"
                                    bottom-slots
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">電子發票抬頭*</div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            請提供公司抬頭，電子發票將於訂單當天開立，無則填寫無。
                                        </div>
                                    </template>
                                </q-input>
                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['電子發票統編']"
                                    label-slot
                                    hint="請提供公司統一編號，電子發票將於訂單當天開立，無則填寫無。"
                                    :ref="(item: any) => formDataRef['電子發票統編'] = item"
                                    @blur="() => formData['電子發票統編'] = formData['電子發票統編'] === undefined ? '' : formData['電子發票統編']"
                                    :error="formData['電子發票統編'] && formData['電子發票統編'].length == 0"
                                    bottom-slots
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">電子發票統編*</div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            請提供公司統一編號，電子發票將於訂單當天開立，無則填寫無。
                                        </div>
                                    </template>
                                </q-input>
                            </div>

                        </div>



                    </div>


                    <div>

                    </div>

                </section>

                <!-- 送餐服務 -->
                <section class="
    px-8 lg:px-40 
    bg-[#FFFBED] ">
                    <div class="
        mb-10 lg:mb-16">
                        <section-title title="送餐服務" />
                        <div class="bg-[#DDEFE0] rounded-xl pt-1 pb-24 px-8 w-full mt-6 mb-7">
                            <!-- 外送地址 & 公司卸貨區 -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['外送地址']"
                                    label-slot
                                    bottom-slots
                                    type="textarea"
                                    autogrow
                                    :ref="(item: any) => formDataRef['外送地址'] = item"
                                    @blur="() => formData['外送地址'] = formData['外送地址'] === undefined ? '' : formData['外送地址']"
                                    :error="formData['外送地址'] && formData['外送地址'].length == 0"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">外送地址*</div>
                                    </template>
                                    <template v-slot:hint>
                                        <div>
                                            1️. 若有多個地址，請用1.2.3...標示。<br>
                                            2️. 外送夥伴不免費提供搬運上樓、送入園區服務，請同仁們協助於一樓或園區門口取餐唷
                                        </div>
                                    </template>

                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            1️. 若有多個地址，請用1.2.3...標示。<br>
                                            2️. 外送夥伴不免費提供搬運上樓、送入園區服務，請同仁們協助於一樓或園區門口取餐唷
                                        </div>
                                    </template>
                                </q-input>
                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="mt-20 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['公司卸貨區']"
                                    label-slot
                                    bottom-slots
                                    autogrow
                                    :ref="(item: any) => formDataRef['公司卸貨區'] = item"
                                    @blur="() => formData['公司卸貨區'] = formData['公司卸貨區'] === undefined ? '' : formData['公司卸貨區']"
                                    :error="formData['公司卸貨區'] && formData['公司卸貨區'].length == 0"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">公司卸貨區*</div>
                                    </template>
                                    <template v-slot:hint>
                                        <div>
                                            1️. 請說明卸貨區地址、位置、需知會警衛內容。若有多個地址，請承接上題使用1.2.3...標示。<br>
                                            2️. 若無請填『無』
                                        </div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            1️. 請說明卸貨區地址、位置、需知會警衛內容。若有多個地址，請承接上題使用1.2.3...標示。<br>
                                            2️. 若無請填『無』
                                        </div>
                                    </template>
                                </q-input>
                            </div>
                            <!-- 送餐時段 & 送餐時段特殊需求 -->
                            <div class="
                        mt-24 lg:mt-16
                        w-full
                        lg:flex 
                        justify-between">

                                <q-option-with-else-group
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['送餐時段']"
                                    :options="['11:15-11:45', '11:45-12:15', '12:15-12:45', '12:45-13:15', '13:15-13:45', '13:45-14:15', '14:15-14:45', '14:45-15:45']"
                                    :rules="[(val: any) => !!val || '此項必填']"
                                    label-slot
                                    inputHint="晚上送餐請填寫於『其他』唷！"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">送餐時段*</div>
                                    </template>
                                </q-option-with-else-group>
                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="
                        h-20
                        mt-0 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['送餐時段特殊需求']"
                                    label-slot
                                    hint="若有特殊送餐時間需求請告訴我們，會盡力為您安排哦！Ex. 選擇11:15~11:45區間但希望11:30前送達"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">送餐時段特殊需求</div>
                                    </template>

                                </q-input>
                            </div>
                            <!-- 上樓送餐服務 & 循環餐具需求 -->
                            <div class="
                        mt-16 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['上樓送餐服務']"
                                    label-slot
                                    bottom-slots
                                    type="textarea"
                                    autogrow
                                    :ref="(item: any) => formDataRef['上樓送餐服務'] = item"
                                    @blur="() => formData['上樓送餐服務'] = formData['上樓送餐服務'] === undefined ? '' : formData['上樓送餐服務']"
                                    :error="formData['上樓送餐服務'] && formData['上樓送餐服務'].length == 0"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">上樓送餐服務 (每次費用$150)*</div>
                                    </template>
                                    <template v-slot:hint>
                                        <div>
                                            1️. 若無需此服務，請填『無』 <br>
                                            2️.若需上樓送餐服務，請確認有『電梯』以及『卸貨區』。如有多個地址需上樓送餐，請承接上題使用1.2.3...標示。
                                        </div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            1️. 若無需此服務，請填『無』 <br>
                                            2️.若需上樓送餐服務，請確認有『電梯』以及『卸貨區』。如有多個地址需上樓送餐，請承接上題使用1.2.3...標示。
                                        </div>
                                    </template>
                                </q-input>
                                <div class="hidden lg:!block h-1 w-[10%]"></div>
                                <q-input
                                    hint="平台不主動提供餐具，邀請大家自備環保筷或湯匙，若有需要環保餐具請填寫數量，若不需要則填『無』。"
                                    class="mt-20 lg:mt-0 w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['循環餐具需求']"
                                    :ref="(item: any) => formDataRef['循環餐具需求'] = item"
                                    @blur="() => formData['循環餐具需求'] = formData['循環餐具需求'] === undefined ? '' : formData['循環餐具需求']"
                                    :error="formData['循環餐具需求'] && formData['循環餐具需求'].length == 0"
                                    label-slot
                                    bottom-slots
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">循環餐具需求*</div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            平台不主動提供餐具，邀請大家自備環保筷或湯匙，若有需要環保餐具請填寫數量，若不需要則填『無』。
                                        </div>
                                    </template>
                                </q-input>
                            </div>

                        </div>



                    </div>


                    <div>

                    </div>

                </section>

                <!-- 回收服務 -->
                <section class="
    px-8 lg:px-40 
    bg-[#FFFBED] ">
                    <div class="
        mb-10 lg:mb-16">
                        <section-title title="回收服務" />
                        <div class="bg-[#DDEFE0] rounded-xl pt-1 pb-24 px-8 w-full mt-6 mb-7">
                            <!-- 當日回收時段 & 上樓回收服務 -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <div class="w-full">

                                    <q-option-with-else-group
                                        class="w-full font-['Noto_Serif_TC'] "
                                        v-model="formData['當日回收時段']"
                                        :options="['14:00-15:00', '15:00-16:00', '16:00-17:00']"
                                        :rules="[(val: any) => !!val || '此項必填']"
                                        label-slot
                                        hint="餐盒不需清洗，只需「淨空廚餘及殘渣」。用餐完畢後請將餐盒全數收齊，由外送夥伴到場核對數量並回收"
                                    >
                                        <template v-slot:label>
                                            <div class="font-black question-text-color">當日回收時段*</div>
                                        </template>
                                    </q-option-with-else-group>

                                </div>

                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="
                        h-20
                        mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    :style="{
                                        height: formData['上樓回收服務'] ? `${5 + 1.2 * (formData['上樓回收服務'].split('\n').length - 1)}rem` : '5rem'
                                    }"
                                    v-model="formData['上樓回收服務']"
                                    label-slot
                                    bottom-slots
                                    type="textarea"
                                    autogrow
                                    :ref="(item: any) => formDataRef['上樓回收服務'] = item"
                                    @blur="() => formData['上樓回收服務'] = formData['上樓回收服務'] === undefined ? '' : formData['上樓回收服務']"
                                    :error="formData['上樓回收服務'] && formData['上樓回收服務'].length == 0"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">上樓回收服務 (每次費用$150)*</div>
                                    </template>
                                    <template v-slot:hint>
                                        <div>
                                            1️. 若無需此服務，請填『無』 <br>
                                            2️. 若需上樓回收服務，請確認有『電梯』以及『卸貨區』。如有多個地址需上樓回收，請承接上題使用1.2.3...標示。
                                        </div>
                                    </template>
                                    <template v-slot:error>
                                        此項必填
                                        <div class="mt-1">
                                            1️. 若無需此服務，請填『無』 <br>
                                            2️. 若需上樓回收服務，請確認有『電梯』以及『卸貨區』。如有多個地址需上樓回收，請承接上題使用1.2.3...標示。
                                        </div>
                                    </template>
                                </q-input>
                            </div>


                        </div>



                    </div>


                    <div>

                    </div>

                </section>

                <!-- 其他 -->
                <section class="
    px-8 lg:px-40 
    bg-[#FFFBED] ">
                    <div class="
        mb-10 lg:mb-16">
                        <section-title title="其他" />
                        <div class="bg-[#DDEFE0] rounded-xl pt-1 pb-24 px-8 w-full mt-6 mb-7">
                            <!-- 備用聯絡人 & 備用聯絡電話 -->
                            <div class="
                        mt-10 lg:mt-5
                        w-full
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['備用聯絡人']"
                                    label-slot
                                    hint="若有需要請提供備用聯絡人之姓名"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">備用聯絡人</div>
                                    </template>

                                </q-input>
                                <div class="hidden lg:!block 
                    h-1 w-[10%]"></div>
                                <q-input
                                    class="mt-7 lg:mt-0
                         w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['備用聯絡電話']"
                                    label-slot
                                    hint="若有需要請提供備用聯絡人之電話"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">備用聯絡電話</div>
                                    </template>

                                </q-input>
                            </div>
                            <!-- 其他備註  -->
                            <div class="
                        mt-8 lg:mt-5
                        w-full lg:w-[48%]
                        lg:flex 
                        justify-between">
                                <q-input
                                    class="w-full font-['Noto_Serif_TC'] "
                                    v-model="formData['其他備註']"
                                    label-slot
                                    type="textarea"
                                    autogrow
                                    hint="例: 請寄放管理室、門口有白色櫃子、聯絡另一位同仁取餐、數量調整（一天前10%內數量變動ok）"
                                >
                                    <template v-slot:label>
                                        <div class="font-black question-text-color">其他備註</div>
                                    </template>
                                </q-input>

                            </div>


                        </div>



                    </div>


                    <div>
                        <q-btn
                            class="bg-[#778D7E] text-white w-full lg:w-auto"
                            label="送出表單 Submit"
                            type="submit"
                        />

                    </div>

                </section>
            </template>

        </q-form>

    </div>

</template>

<script setup lang="ts">
import sectionTitle from '@/components/title/title-1.vue'
import { useDialog } from '@/composables/dialog';
import { cloneDeep, find, remove } from 'lodash';
import { setCssVar } from 'quasar';
import { onMounted, onUnmounted, ref } from 'vue';
import qOptionWithElseGroup from '@/components/q-option-with-else-group.vue'
import { height } from 'dom7';
import { db } from '@/common/firebase';
import dayjs from 'dayjs'
import { useStorage } from '@vueuse/core';
import { useRouter } from 'vue-router';

const router = useRouter()

onMounted(() => {
    window.onbeforeunload = function () {
        return confirm("要重新載入網站嗎？");
    }
})

setCssVar('primary', '#78A780')
setCssVar('secondary', '#C8EEC8')
const dialog = useDialog();
const orderDateInputFocusStatus = ref(false);
const PageHomeDB = db().collection('Form')
const currentPage = ref(1);
const handleNextPage = async () => {
    const form = formRef.value;
    console.log("🚀 ~ file: the-form.vue ~ line 910 ~ handleNextPage ~ form", form)
    if (form && form.validate) {
        console.log(await undefinedTransformToString(), await form.validate());

        if (await undefinedTransformToString() && await form.validate()) {
            formDataRef.value = {};
            currentPage.value = 2;
            window.scrollTo(0, 0);

        }

    }
}

// 處理時間篩選
const dateFilter = (date: string) => {
    return dayjs(date).isAfter(dayjs().add(-1, 'd'))
}

//跳到錯誤訊息
const scrollToError = (elRef: any) => {
    console.log("🚀 ~ file: the-form.vue ~ line 879 ~ scrollToError ~ elRef", elRef)
    const yOffset = -300;
    const element = elRef.getNativeElement ? elRef.getNativeElement() : elRef
    const elementTopOffset = (element && element.getBoundingClientRect) ? element
        .getBoundingClientRect().top : 0;
    if (elementTopOffset) {
        const y = elementTopOffset + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}
// 送出問卷
const onSubmit = async () => {
    if (await undefinedTransformToString()) {
        dialog.create({
            message: '是否確認送出？',
            cancel: '否',
            ok: '是',
        }).onOk(() => {
            PageHomeDB.add(formData.value).then(() => {
                dialog.create({
                    title: '已收到您的預約',
                    message: '我們將會寄一封Email與您確認訂單內容，再請查收😊',
                    ok: '確定',
                }).onOk(() => {
                    router.push('/')
                })
            });
        })
    }



}

// 問卷資料
const formData = useStorage<{ [key: string]: any }>('formData', {
    '訂餐單位': undefined,
    '訂餐日期': undefined,
    // 訂購品項
    '品項': [{
        '餐廳編號': undefined,
        '品項名稱': undefined,
        '訂購份數': undefined,
        '特殊飲食習慣': '',

    }] as { [key: string]: any }[],
    // 餐食場景
    '餐食場景': '會議盒餐',
    // 訂單資訊
    '訂餐姓名': undefined,
    '聯絡電話': undefined,
    '您的email': undefined,
    '電子發票抬頭': undefined,
    '電子發票統編': undefined,
    // 送餐服務
    '外送地址': undefined,
    '公司卸貨區': undefined,
    '送餐時段': '',
    '送餐時段特殊需求': '',
    '上樓送餐服務': undefined,
    '循環餐具需求': undefined,
    // 回收服務
    '當日回收時段': '',
    '上樓回收服務': undefined,
    // 其他
    '其他備註': '',
    '備用聯絡人': '',
    '備用聯絡電話': '',

})



// const formData = ref( as { [key: string]: any });

const formRef = ref()
const formDataRef = ref<{ [key: string]: any }>({})



const undefinedTransformToString = () => {
    console.log('undefinedTransformToString');


    return new Promise<boolean>((resolve, reject) => {
        for (let index = 0; index < Object.keys(formDataRef.value).length; index++) {
            const formDataRefKey = Object.keys(formDataRef.value)[index];
            if (formDataRef.value[formDataRefKey] && (formDataRef.value[formDataRefKey].modelValue === undefined || formDataRef.value[formDataRefKey].error)) {
                console.log(formDataRef.value[formDataRefKey]);
                formDataRef.value[formDataRefKey].focus();
                scrollToError(formDataRef.value[formDataRefKey]);

                resolve(false)
            }
        }
        resolve(true)

    })


}

// 新增品項
const handleAddFormDataItem = () => {
    const _item = cloneDeep(formData.value['品項'][0])
    Object.keys(_item).forEach((o: string) => {
        _item[o] = '' //清空value
    });
    formData.value['品項'].unshift(_item)
}
// 刪除品項
const handleRemoveFormDataItem = (index: number) => {
    dialog.create({
        message: '是否刪除該品項？',
        cancel: '否',
        ok: '是',
    }).onOk(() => {
        formData.value['品項'].splice(index, 1);
    })

}

// 刪除多餘頁尾
const handleRemoveBookDivDom = () => {
    if (document.querySelector('div.book')) {
        document.querySelector('div.book')?.remove();
        window.removeEventListener("load", handleRemoveBookDivDom);
    }
};
onMounted(() => window.addEventListener("load", handleRemoveBookDivDom));


</script>

<style scoped>
.question-text-color {
    @apply text-gray-900;
}

.q-field--focused .question-text-color {
    @apply text-current
}


:deep(.q-option-error-input input) {
    opacity: 0;
}

:deep(div.q-field__bottom.row > div > div) {
    font-size: 13px !important;
    line-height: 18px !important;
    color: #333;

}
</style>
<style>
#app>div:nth-child(4)>form>section:nth-child(1)>div:nth-child(4)>label>div>div.q-field__control.relative-position.row.no-wrap::before {
    opacity: 0;
}
</style>