<template>
    <n-grid class="height" :cols="4" x-gap="12">
        <n-gi class="height" span="2">
            <n-tabs type="card" animated default-value="codeEditor">
                <n-tab-pane name="codeEditor" tab="代码编辑">
                    <n-space justify="end" align="center" class="fun-box">

                        主题:<n-select style="width:100px" size="small" v-model:value="themeValue" :options="options" />
                        <NButton size="small" type="info" @click="toArray">测试</NButton>
                        <NButton size="small" type="info" @click="beautifyCode">格式化</NButton>
                        <NButton size="small" type="info" @click="runEchart">运行</NButton>
                    </n-space>
                    <main style="height: 600px;">
                        <v-ace-editor class="ace-editor" ref="aceEditor" v-model:value="content" lang="json" theme="chrome"
                            style="height: 300px" :options="{
                                enableBasicAutocompletion: true,
                                enableSnippets: true,
                                enableLiveAutocompletion: true,
                                fontSize: 14,
                                tabSize: 2,
                                showPrintMargin: false,
                                highlightActiveLine: true,
                                useWorker: true
                            }"></v-ace-editor>
                    </main>


                </n-tab-pane>
            </n-tabs>

        </n-gi>
        <n-gi class="height" span="2">
            <div id="echart" class="eChart-box"></div>
            <n-space justify="end" v-if="codeObj.code == 1">
                <n-space>{{ codeObj.time }}</n-space>
                <n-space>编辑器内容有误！</n-space>
            </n-space>
            <n-space justify="end" v-if="codeObj.code == 0">
                <n-space>{{ codeObj.time }}</n-space>
                <n-space>图表已生成{{ codeObj.runTime }}ms</n-space>
            </n-space>
        </n-gi>
    </n-grid>
</template>
<script setup lang="ts">
// UI
import { NSpace, NGrid, NGi, NTabs, NTabPane, NButton, NSelect } from 'naive-ui'
import { onMounted, ref,getCurrentInstance,ComponentInternalInstance } from 'vue';
import * as echarts from 'echarts'
import axios from 'axios'
import './ace-config';
import { VAceEditor } from 'vue3-ace-editor'
import beautify from 'js-beautify'
import html2canvas from 'html2canvas'
import _ from 'lodash';
const { proxy }  = getCurrentInstance() as ComponentInternalInstance;
const { $utils } = proxy


let ajaxRequest = (url: string, data?: any) => {
    return axios.get(url, data)
}
let content = ref(`{
    "title": {
            "text": 'ECharts 入门示例'
        },
    "xAxis": {
            "data":['你', '我', '你们', '我们', '它', '它们']
        },
    "yAxis": {
            "type": 'value'
        },
    "series": [
            {
                "type": 'bar',
                "data": [5, 20, 36, 10, 10, 20]
            }
        ],
    "tooltip":{
            "show": true}
        }`)
let lineX: any = ref(['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'])
let lineY: any = ref([5, 20, 36, 10, 10, 20])




let getAceEditorData = () => {
    // 获得数据
    let setOption = (new Function("return " + content.value))();
    // // 重新渲染图表
    var myChart = echarts.init(document.getElementById('bar') as HTMLElement);

    let start = performance.now()
    myChart.setOption(setOption)
    let end = performance.now()
    console.log(end - start)

}

// 主题
let themeValue = ref('')
let options = _.map(['github', 'chrome', 'monokai'], function (item) {
    return { label: item, value: item }
})

// 运行
let codeObj = ref({})
let eChart: echarts.ECharts | null = null;
let eChartIdDom = null;
let checkOption = (dom: any, option: object) => {

    let time = new Date().toLocaleDateString() + ':' + new Date().toLocaleTimeString()
    try {
        echarts.util.isObject(option) && dom.setOption(option, {
            notMerge: true,
            lazyUpdate: false,
            silent: true
        })
        return {
            code: 0,
            time
        }
    } catch (e) {
        // eChartIdDom.remove()
        console.error("failed to run code", e)
        return {
            code: 1,
            time
        };
    }
}
let runEchart = () => {
    // 检查数据
    // 获取options
    let start = performance.now()
    let setOption = (new Function("return " + content.value))();
    let obj: { code: number, runTime?: string, time: string } = checkOption(eChart, setOption)

    if (obj.code == 1) {
        return codeObj.value = obj
    }


    let end = performance.now()
    obj.runTime = (end - start).toFixed(2)
    codeObj.value = obj

}
let beautifyCode = () => {
    let newContent = beautify(content.value, {
        indent_size: 2,
        space_in_empty_paren: true
    })
    content.value = newContent
}

onMounted(async () => {
    eChartIdDom = document.getElementById('echart') as HTMLElement;
    eChart = echarts.init(eChartIdDom);
    eChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        xAxis: {
            data: lineX.value
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                data: lineY.value
            }
        ],
        tooltip: {
            show: true
        }
    });

    // 地图
    // let { data } = await ajaxRequest('https://geojson.cn/api/data/china.json')

    // var mapChart = echarts.init(document.getElementById('map') as HTMLElement);
    // echarts.registerMap('chinaGeo', data)
    // mapChart.setOption({
    //     title: {
    //         text: 'map视图'
    //     },
    //     tooltip: {
    //         formatter(params: any) {

    //             return `${params.name} 目前  ${params.value || 0}`
    //         }
    //     },
    //     visualMap: {
    //         left: 'left',
    //         top: 'center',
    //         min: 0,
    //         max: 7000,
    //         text: ['高', '低'],
    //         calculable: true
    //     },
    //     series: [
    //         {
    //             type: 'map',
    //             name: 'China',
    //             map: 'chinaGeo',
    //             data: [
    //                 { "name": "北京", value: 5300 },
    //                 { "name": "天津", value: 2400 },
    //                 { "name": "上海", value: 4300 },
    //                 { "name": "广东", value: 3300 },
    //                 { "name": "黑龙江", value: 1100 },
    //                 { "name": "新疆", value: 1100 }
    //             ]
    //         }
    //     ]
    // })
    // let dom = aceEditor.value
    // console.log(dom)
    // let dom = document.querySelector('.ace-editor')
    // html2canvas(dom as HTMLElement).then(function (canvas) {
    //     let imgBox = document.querySelector('.ace-thumbnail-box');
    //     imgBox.appendChild(canvas);
    // })

})
let toArray = () => {
    let obj = $utils.editorObject(content)
    let list = $utils.objectEditorArray(obj)
    console.log(list)
}


// 测试ref 跟 toRef

</script>
<style lang="scss" scoped>
.height{
    height: 100%;
}
.fun-box {
    margin-bottom: 5px;
}

.ace-editor {
    height: 600px;
}

.eChart-box {
    width: 100%;
    height: 100%;
}

.ace-thumbnail-box {
    position: absolute;
    right: 0;
    top: 0;
    width: 33%;
}
</style>
