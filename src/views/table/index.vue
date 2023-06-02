<template>
    <!-- 动态跟静态表格 -->
    <n-grid cols="1">
        <n-gi>
            <n-tabs type="card" default-value="importData" animated>
                <n-tab-pane name="importData" tab="导入数据">
                    <!-- 按钮 -->
                    <n-space class="margin-top" justify="end">
                        <n-upload @change="handleChangeFile" accept=".xlsx,.xls" :show-file-list="false">
                            <n-button type="primary">导入数据</n-button>
                        </n-upload>

                    </n-space>
                    <n-data-table :data="importData" :columns="importColumns" :bordered="true" />

                </n-tab-pane>
                <n-tab-pane name="table" tab="纯表格">
                    <n-space class="margin-top" justify="end">
                        <n-button type="primary">导入数据</n-button>
                    </n-space>
                    <n-table :bordered="false" :single-line="false">
                        <thead>
                            <tr>
                                <th>Abandon</th>
                                <th>Abnormal</th>
                                <th>Abolish</th>
                                <th>...</th>
                                <th>万事开头难</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>放弃</td>
                                <td>反常的</td>
                                <td>彻底废除</td>
                                <td>...</td>
                                <td>干！我刚才背的是啥</td>
                            </tr>
                            <tr>
                                <td>放弃</td>
                                <td>反常的</td>
                                <td>彻底废除</td>
                                <td>...</td>
                                <td>干！我刚才背的是啥</td>
                            </tr>
                            <tr>
                                <td>放弃</td>
                                <td>反常的</td>
                                <td>彻底废除</td>
                                <td>...</td>
                                <td>干！我刚才背的是啥</td>
                            </tr>
                            <tr>
                                <td>放弃</td>
                                <td>反常的</td>
                                <td>彻底废除</td>
                                <td>...</td>
                                <td>干！我刚才背的是啥</td>
                            </tr>
                        </tbody>
                    </n-table>
                </n-tab-pane>
                <n-tab-pane name="exportData" tab="导出数据">
                    <n-space class="margin-top" justify="end">
                        <n-button type="primary" @click="handleAddData">新增数据</n-button>
                        <n-button type="primary" @click="handleExportData">导出数据</n-button>
                    </n-space>
                    <n-data-table :pagination="pagination" 
                    :row-key="rowKey" :data="exportData" 
                    @update:checked-row-keys="handleCheck"
                    :columns="exportColumns" :bordered="true" />
                </n-tab-pane>
            </n-tabs>
        </n-gi>
    </n-grid>
    <n-modal v-model:show="showModal" preset="dialog" :title="title" size="mini" style="width: 600px"
        transform-origin="center" :mask-closable="false">
        <n-form label-placement="left" label-width="auto" :model="formData" ref="formRef" :rules="rules">
            <n-form-item path="id" label="商品ID">
                <n-input :disabled="disabled" v-model:value="formData.id" />
            </n-form-item>
            <n-form-item path="sortNo" label="排序编号">
                <n-input v-model:value="formData.sortNo" />
            </n-form-item>
            <n-form-item path="product" label="商品">
                <n-input :disabled="disabled" v-model:value="formData.product" />
            </n-form-item>
            <n-form-item path="stock" label="库存">
                <n-input v-model:value="formData.stock" />
            </n-form-item>
            <n-form-item path="price" label="原价">
                <n-input :disabled="disabled" v-model:value="formData.price" />
            </n-form-item>
            <n-form-item path="salePrice" label="销售价">
                <n-input v-model:value="formData.salePrice" />
            </n-form-item>
            <n-form-item path="status" label="状态">
                <n-select v-model:value="formData.status" :options="options" />
            </n-form-item>

        </n-form>
        <template #action>
            <n-space justify="end">
                <n-button type="primary" @click="handleSubmitData">确定</n-button>
                <n-button @click="handleCancel">取消</n-button>
            </n-space>
        </template>
    </n-modal>
</template>
<script setup lang="ts">
// UI引入
import { ref, reactive, h,toRaw,defineComponent,nextTick } from 'vue'
import {
    NSpace, NGi, NGrid, NTabs, NTabPane, NTable, NDataTable,
    NButton, NUpload, NModal, NForm, NFormItem,
    NInput, NSelect, FormInst, FormItemRule,useMessage
} from 'naive-ui'
// xlsx 
import * as  XLSX from 'xlsx'
import _ from 'lodash'



let InputCom = defineComponent({
    props: {
        value: [String, Number],
        onUpdateValue:[Function,Array]
    },
    setup(props) {
        const isEdit = ref(false)
        const inputRef = ref(null)
        const inputValue = ref(props.value)
        function handleOnClick() {
            isEdit.value = true
            nextTick(() => {
                inputRef.value.focus()
            })
        }
        function handleChange() {
            props.onUpdateValue(inputValue.value)
            isEdit.value = false
        }
        return () => {
            h('div', { style: 'min-height: 22px', onClick: handleOnClick },
                isEdit.value ? h(NInput, {
                    ref:inputRef,
                    value: inputValue.value,
                    onUpdateValue: (v) => {
                        inputValue.value = v
                    },
                    onChange: handleChange,
                    onBlur: handleChange
                }) : props.value
            )
        }
    }
})

// 导入数据table
let importData = ref()
let importColumns = reactive([{
    align: '',
    key: '',
    title: ''
}])
let handleChangeFile = (options: any) => {
    let files = options.file.file
    readerData(files)
}
let readerData = (files: any) => {
    let reader = new FileReader()
    reader.onload = (e: any) => {
        let data = XLSX.read(e.target.result, { type: 'binary' })
        console.log(data)
        const firstSheetName = data.SheetNames[0]
        const worksheet = data.Sheets[firstSheetName]
        // const header = getHeaderRow(worksheet)
        const results = XLSX.utils.sheet_to_json(worksheet)
        // console.log(results)
        editTableData(results)
    }
    reader.readAsBinaryString(files)
}
let editTableData = (results: any) => {
    let list = []
    for (let key in results[0]) {
        console.log(key)
        let columnItem = {
            title: '',
            key: '',
            align: ''
        }
        columnItem.title = key
        columnItem.key = key
        columnItem.align = 'center'
        list.push(columnItem)
    }
    importColumns = list
    importData.value = results
}

// 导出数据table
let awaitExportData = reactive<Array<object>>([])
let exportColumns = reactive([
    {
        type: 'selection',
    },
    {
        title: '商品ID',
        key: 'id',
        align: 'center'
    },
    {
        title: '排序编号',
        key: 'sortNo',
        align: 'center'
    },
    {
        title: '商品',
        key: 'product',
        align: 'center'
    },
    {
        title: '库存',
        key: 'stock',
        align: 'center'
    },
    {
        title: '原价',
        key: 'price',
        align: 'center'
    },
    {
        title: '销售价',
        key: 'salePrice',
        align: 'center'
    },
    {
        title: '状态',
        key: 'status',
        align: 'center',
        render(rowData: any) {
            // 上架
            if (rowData.status == 'ON_SALE') {
                return h(NSpace, { justify: 'center', style: 'color:red' }, '上架')
            }
            // 下架
            if (rowData.status == 'OFF_SALE') {
                return h(NSpace, { justify: 'center' }, '下架')
            }
            // 缺货
            if (rowData.status == 'OUT_STOCK') {
                return h(NSpace, { justify: 'center', style: 'color:#ccc' }, '缺货')
            }
        }
    },
    {
        title: '操作',
        align: 'center',
        render(rowData: any) {
            let editBtn = h(NButton, { text: true, onClick: () => handleEditData(rowData) }, '编辑')
            let delBtn = h(NButton, { text: true, onClick: () => handleDeleteData(rowData) }, '删除')
            // let detailBtn = h(NButton, { text: true, onClick: () => handleEditStatus(rowData) }, '修改状态')
            return h(NSpace, { justify: 'center' }, [
                editBtn, delBtn
            ]);
        }
    }
])
let exportData = ref(
    [
        {
            "id": "858203",
            "sortNo": 35,
            "product": "HUAWEI Watch 3 Pro",
            "stock": 137,
            "price": 698,
            "salePrice": 620,
            "status": "OUT_STOCK",
            "tags": [
                2,
                1
            ]
        },
        {
            "id": "326763",
            "sortNo": 33,
            "product": "HUAWEI P60",
            "stock": 188,
            "price": 729,
            "salePrice": 453,
            "status": "OUT_STOCK",
            "tags": [
                3,
                0
            ]
        },
        {
            "id": "192245",
            "sortNo": 62,
            "product": "HUAWEI P60 Pro",
            "stock": 144,
            "price": 1085,
            "salePrice": 432,
            "status": "ON_SALE",
            "tags": [
                2,
                1
            ]
        },
        {
            "id": "251651",
            "sortNo": 47,
            "product": "HUAWEI P60 Art",
            "stock": 74,
            "price": 838,
            "salePrice": 521,
            "status": "ON_SALE",
            "tags": [
                3,
                1
            ]
        },
        {
            "id": "022302",
            "sortNo": 94,
            "product": "HUAWEI Mate X3",
            "stock": 166,
            "price": 715,
            "salePrice": 368,
            "status": "OUT_STOCK",
            "tags": [
                2,
                0
            ]
        },
        {
            "id": "729586",
            "sortNo": 49,
            "product": "iPhone 14 Pro",
            "stock": 105,
            "price": 714,
            "salePrice": 288,
            "status": "OFF_SALE",
            "tags": [
                2,
                1
            ]
        },
        {
            "id": "384507",
            "sortNo": 50,
            "product": "iPhone 14 Pro Max",
            "stock": 108,
            "price": 550,
            "salePrice": 483,
            "status": "ON_SALE",
            "tags": [
                3,
                0
            ]
        },
        {
            "id": "137855",
            "sortNo": 66,
            "product": "iPhone 14",
            "stock": 43,
            "price": 988,
            "salePrice": 581,
            "status": "ON_SALE",
            "tags": [
                2,
                0
            ]
        },
        {
            "id": "158838",
            "sortNo": 52,
            "product": "HUAWEI Watch 4",
            "stock": 42,
            "price": 935,
            "salePrice": 696,
            "status": "OFF_SALE",
            "tags": [
                3,
                0
            ]
        },
        {
            "id": "289948",
            "sortNo": 11,
            "product": "HUAWEI Watch 4 Pro",
            "stock": 116,
            "price": 661,
            "salePrice": 581,
            "status": "OFF_SALE",
            "tags": [
                3,
                1
            ]
        },
        {
            "id": "689705",
            "sortNo": 67,
            "product": "HUAWEI WATCH Ultimate ",
            "stock": 108,
            "price": 448,
            "salePrice": 192,
            "status": "ON_SALE",
            "tags": [
                3,
                0
            ]
        }
    ]
)
let handleCheck = (rowKeys:any)=>{
    let list = _.map(rowKeys,it=>{
        return _.filter(exportData.value,item=>{
            return item.id == it;
        })
    })
    // console.log(list)
    let newList = [..._.map(list,it=>{
       return toRaw(it[0])
    })]
    awaitExportData = newList
}
let handleExportData = () => {
    if(awaitExportData.length==0){
        message.warning('请选择导出数据')
        return;
    }
    let list = awaitExportData
    let sheet1 = XLSX.utils.json_to_sheet(list)
    // console.log(sheet1)
    let wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb, sheet1, '产品统计')
    // 生成文件
    const workbookBlob = workbook2blob(wb)
    // 下载文件
    openDownloadDialog(workbookBlob, '产品信息.xlsx')

}
let workbook2blob = (workbook: any) => {
    // 生成文件
    let wopts: {
        bookType: string,
        bookSST: boolean,
        type: string
    } = {
        // 要生成的文件类型
        bookType: 'xlsx',
        // // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
        bookSST: false,
        type: 'binary'
    }
    let wbout = XLSX.write(workbook, wopts)
    function s2ab(s: any) {
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf;
    }
    let buf = s2ab(wbout)
    var blob = new Blob([buf], {
        type: 'application/octet-stream'
    })
    return blob
}
let openDownloadDialog = (blob: any, fileName: string) => {

    var aLink = document.createElement('a')
    let url = window.URL.createObjectURL(new Blob([blob], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }))
    aLink.href = url;
    aLink.download = `${fileName}`;
    aLink.click();
    window.URL.revokeObjectURL(url);
}
let rowKey = (row:any)=>row.id
// 公共
let pagination = ref({
    pageSize: 10
})
let title = ref<string>('')
let disabled = ref(false)
let type = ref<string|null>(null)
const message = useMessage()
// 列表操作按钮
let handleAddData = () => {
    showModal.value = true
    disabled.value = false
    type.value = 'add'
    title.value = '新增数据'
    formData.value = {}
}
let handleEditData = (rowData: object) => {
    showModal.value = true
    title.value = '修改数据'
    disabled.value = true
    type.value = 'edit'
    formData.value = rowData
}
let handleDeleteData = (rowData: object) => {
    // 删除表格
    let index = _.findIndex(exportData.value, rowData)
    exportData.value.splice(index, 1)
    //    console.log(exportData.value)
}

// modal
let showModal = ref(false)
let formData = ref({})
let rules = {
    id: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入id'
    },
    sortNo: {
        required: true,
        type:'number',
        trigger: ['blur', 'input'],
        message: '请输入排序编号'
    },
    product: {
        required: true,
        trigger: ['blur', 'input'],
        message: '请输入产品'
    },
    stock: {
        required: true,
        validator(rule: FormItemRule, value: number) {
            return value >= 0
        },
        trigger: ['blur', 'input'],
        message: '库存大于等于0'
    },
    price: {
        required: true,
        validator(rule: FormItemRule, value: number) {
            return value > 0
        },
        trigger: ['blur', 'input'],
        message: '原价大于0'
    },
    salePrice: {
        required: true,
        validator(rule: FormItemRule, value: number) {
            return value > 0
        },
        trigger: ['blur', 'input'],
        message: '销售价大于0'
    },
    status: {
        required: true,
        trigger: 'change',
        message: '请选择状态'
    }
}
let formRef = ref<FormInst | null>(null)
// modal 操作
let handleSubmitData = (e: MouseEvent) => {
    e.preventDefault()
    formRef.value?.validate((errors) => {
        if (!errors) {
            if(type.value =='add'){
                exportData.value.unshift(formData.value)
            }else if(type.value == 'edit'){
                let index = _.findIndex(exportData.value,function(item){
                    return item.id == formData.value.id
                })
                exportData.value[index] = formData.value
            }
            message.success(type.value=='add'? '操作成功' : '编辑成功')
            showModal.value = false
        } else {
            console.log(errors)
        }
    })
}
let handleCancel = () => {
    showModal.value = false
}
// select
let options = [
    {
        label: "上架",
        value: 'ON_SALE',
    },
    {
        label: '下架',
        value: 'OFF_SALE'
    },
    {
        label: '缺货',
        value: 'OUT_STOCK'
    },
]


// 可编辑的table
const getDataIndex = (id:string) => {
      return exportData.value.findIndex((item) => item.id === id)
}
// input 组件

</script>
<style lang="scss" scoped>
.margin-top {
    margin-bottom: 20px;
}
</style>
