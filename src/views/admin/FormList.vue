<template>
    <div class="q-pa-md">
        <q-btn
            @click="downloadExcel()"
            label="匯出Excel"
            class="mb-3"
        />
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
import { useFormStore } from '@/stores/form.store';
import { ref, } from 'vue';
import ExcelJs from "exceljs";
import { max } from 'lodash';


const formStore = useFormStore();
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


const downloadExcel = () => {
    const workbook = new ExcelJs.Workbook(); // 創建試算表檔案
    const sheet = workbook.addWorksheet('工作表範例1'); //在檔案中新增工作表 參數放自訂名稱
    const productLength = max(formStore.forms?.map((o) => (o['品項'] ?? []).length))
    const sheetOpt = { // 在工作表裡面指定位置、格式並用columsn與rows屬性填寫內容
        name: 'table名稱',  // 表格內看不到的，讓你之後想要針對這個table去做額外設定的時候，可以指定到這個table
        ref: 'A1', // 從A1開始
        columns: [
            { name: '訂餐日期' }, { name: '訂餐單位' },
            { name: '總餐費' }, { name: '服務費' }, { name: '總額' },
            { name: '運費+80' }, { name: '租賃費' }, { name: '搬運費' },
            { name: '份數' }, { name: '循環餐具需求' }, { name: '杯數' },
            { name: '電子發票統編' }, { name: '電子發票抬頭' }, { name: '訂餐姓名' },
            { name: 'Email' }, { name: '聯絡電話' }, { name: '外送地址' },
            { name: '公司卸貨區' }, { name: '送餐時段' }, { name: '上樓送餐服務' },
            { name: '送餐時段特殊需求' }, { name: '當日回收時段' }, { name: '上樓回收服務' },
            { name: '其他備註' }, { name: '備用聯絡人' }, { name: '備用聯絡電話' },
            { name: '餐食場景' },
        ],
        rows: formStore.forms?.map(o => ([
            o['訂餐日期'], o['訂餐單位'],
            '', '', '', '', '', '', '',
            o['循環餐具需求'], '', o['電子發票統編'],
            o['電子發票抬頭'], o['訂餐姓名'], o['您的email'], o['聯絡電話'],
            o['外送地址'], o['公司卸貨區'], o['送餐時段'], o['上樓送餐服務'],
            o['送餐時段特殊需求'], o['當日回收時段'], o['上樓回收服務'], o['其他備註'],
            o['備用聯絡人'], o['備用聯絡電話'], o['餐食場景'],
        ])) ?? []
    };
    for (let index = 0; index < productLength; index++) {
        sheetOpt.columns.push({ name: `餐廳編號${index + 1}` })
        sheetOpt.columns.push({ name: `品項名稱${index + 1}` })
        sheetOpt.columns.push({ name: `訂購份數${index + 1}` })
        sheetOpt.columns.push({ name: `特殊飲食習慣${index + 1}` })
        sheetOpt.columns.push({ name: `金額${index + 1}` })
    }

    sheetOpt.rows.forEach((row, index) => {
        if (formStore.forms && formStore.forms?.length > index && formStore.forms[index]['品項']) {
            console.log(formStore.forms[index]);
            formStore.forms[index]['品項'].forEach((item: { [x: string]: any; }) => {
                row.push(item['餐廳編號']);
                row.push(item['品項名稱']);
                row.push(item['訂購份數']);
                row.push(item['特殊飲食習慣']);
                row.push('');
            });


        }


    });


    sheet.addTable(sheetOpt);

    // 表格裡面的資料都填寫完成之後，訂出下載的callback function
    // 異步的等待他處理完之後，創建url與連結，觸發下載
    workbook.xlsx.writeBuffer().then((content) => {
        const link = document.createElement("a");
        const blobData = new Blob([content], {
            type: "application/vnd.ms-excel;charset=utf-8;"
        });
        link.download = '表單試算表.xlsx';
        link.href = URL.createObjectURL(blobData);
        link.click();
    });
}







</script>

<style scoped>

</style>