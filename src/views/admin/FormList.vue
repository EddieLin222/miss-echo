<template>
    <div class="q-pa-md">
        <!-- <div
            v-if="formStore.formSetting && 'status' in formStore.formSetting"
            class="my-3 flex gap-1"
        >
            <div
                class="text-white p-3"
                :style="current_status==='All'?`background-color: #000000;`:`background-color: #ffffff;`"
            >
                ALL
            </div>
            <template v-for="status in formStore.formSetting.status">
                <div
                    class="text-white p-3 border"
                    :style="current_status===status.text?`background-color: #000000;`:`background-color: #fff000;`"
                >
                    {{status.text}}
                </div>
            </template>
       

        </div> -->
        <q-table
            :rows="formStore.forms"
            :columns="columns"
            row-key="name"
            hide-bottom
            selection="multiple"
            :rows-per-page-options="[0]"
        >
            <template v-slot:header-selection="scope">
            </template>
            <!-- <template v-slot:body-selection="scope">

                <router-link :to="{ name: 'PostEdit', params: { id: scope.row.post_id } }">
                    <q-btn
                        class="ml-1"
                        round
                        color="primary"
                        icon="edit"
                        size="sm"
                    >
                        <q-tooltip>編輯</q-tooltip>
                    </q-btn>

                </router-link>

                <q-btn
                    @click="clickRemovePost(scope.row.post_id)"
                    class="ml-1"
                    round
                    color="negative"
                    icon="delete_outline"
                    size="sm"
                >
                    <q-tooltip>刪除</q-tooltip>
                </q-btn>

            </template> -->


            <template v-slot:body="props">
                <q-tr :props="props">
                    <q-td auto-width>
                        <q-btn
                            size="sm"
                            color="primary"
                            round
                            dense
                            @click="props.row.expand = !props.row.expand"
                            :icon="props.row.expand ? 'remove' : 'add'"
                        />
                    </q-td>
                    <q-td
                        v-for="col in props.cols"
                        :key="col.name"
                        :props="props"
                    >



                        <template v-if="col.name=='品項'">



                        </template>

                        <template v-else>
                            <div>
                                {{ col.value }}
                                <!-- {{ col.name }} -->
                            </div>
                        </template>


                    </q-td>
                </q-tr>
                <q-tr
                    v-show="props.row.expand"
                    :props="props"
                    :id="props.row.id"
                >
                    <q-td colspan="100%">

                        <div class="text-left flex">
                            <ul
                                v-for="product, index in  props.row['品項'] "
                                :class=" {
                                    'border-l pl-2 ml-2':index>0
                                }"
                            >
                                <li>第{{index+1}}項</li>
                                <li>餐廳編號：{{product['餐廳編號']}}</li>
                                <li>品項名稱：{{product['品項名稱']}}</li>
                                <li>訂購份數：{{product['訂購份數']}}</li>
                                <li>特殊飲食習慣：{{product['特殊飲食習慣']}}</li>
                            </ul>

                        </div>
                    </q-td>
                </q-tr>
            </template>



        </q-table>
    </div>
</template>

<script setup lang="ts">
import { db } from '@/common/firebase';
import { useDialog } from '@/composables/dialog';
import { useNotify } from '@/composables/notify';
import { useFormStore } from '@/stores/form.store';
import { PostType } from '@/types/post.type';
import { ref, watchEffect } from 'vue';
import { useRouteQuery } from '@vueuse/router'

const Dialog = useDialog()
const Notify = useNotify()
const formStore = useFormStore();
const current_status = ref('All')

const columns = ref([
    { name: '訂餐日期', label: '訂餐日期', field: '訂餐日期' },
    { name: '訂餐單位', label: '訂餐單位', field: '訂餐單位' },
    { name: '循環餐具需求', label: '循環餐具需求', field: '循環餐具需求' },
    { name: '電子發票統編', label: '電子發票統編', field: '電子發票統編' },
    { name: '電子發票抬頭', label: '電子發票抬頭', field: '電子發票抬頭' },
    { name: '訂餐姓名', label: '訂餐姓名', field: '訂餐姓名' },
    { name: '您的email', label: 'Email', field: '您的email' },
    { name: '聯絡電話', label: '聯絡電話', field: '聯絡電話' },
    { name: '外送地址', label: '外送地址', field: '外送地址' },
    { name: '公司卸貨區', label: '公司卸貨區', field: '公司卸貨區' },
    { name: '送餐時段', label: '送餐時段', field: '送餐時段' },
    { name: '上樓送餐服務', label: '上樓送餐服務', field: '上樓送餐服務' },
    { name: '送餐時段特殊需求', label: '送餐時段特殊需求', field: '送餐時段特殊需求' },
    { name: '當日回收時段', label: '當日回收時段', field: '當日回收時段' },
    { name: '上樓回收服務', label: '上樓回收服務', field: '上樓回收服務' },
    { name: '其他備註', label: '其他備註', field: '其他備註' },
    { name: '備用聯絡人', label: '備用聯絡人', field: '備用聯絡人' },
    { name: '備用聯絡電話', label: '備用聯絡電話', field: '備用聯絡電話' },
    { name: '餐食場景', label: '餐食場景', field: '餐食場景' },
])

// const categoryKeyword = ref('all')
// const categoryKeyword = useRouteQuery('category_id', 'all')
// const postArray = ref<PostType[]>()
// watchEffect(() => {
//     postArray.value = JSON.parse(JSON.stringify(postStore.postArray))
//     if (categoryKeyword.value != 'all') {
//         postArray.value = postArray.value?.filter(item => (item.category_id == categoryKeyword.value))
//     }
// })



const clickRemovePost = (id: string) => {
    Dialog.create({
        title: '刪除確認',
        message: '是否要刪除?',
        cancel: true,
        persistent: true
    }).onOk(() => {
        db().collection('Sites/travel-tbb/Posts').doc(id).delete().then(() => {
            Notify.handleSuccess("刪除成功")

        })

    })
}


</script>

<style scoped>

</style>