<template>
    <div>
        <div>
            <v-ace-editor v-model:value="content" @init="editorInit" lang="json" theme="chrome" style="height: 300px"
                :options="{
                    enableBasicAutocompletion: true,
                    enableSnippets: true,
                    enableLiveAutocompletion: true,
                    fontSize: 14,
                    tabSize: 2,
                    showPrintMargin: false,
                    highlightActiveLine: true
                }"></v-ace-editor>
        </div>
        <div id="bar" ref="bar" class="eChart_box"></div>
        <div id="map" ref="map" class="eChart_box"></div>
        <div>
           
        </div>
        <div><button @click="getAceEditorData">运行</button></div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts'
import axios from 'axios'
import * as ace from 'ace-builds';
ace.config.set('basePath', '/static/src-min-noconflict/');

import { VAceEditor } from 'vue3-ace-editor'

import 'ace-builds/src-noconflict/mode-json'
import 'ace-builds/src-noconflict/mode-json5'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-javaScript'
import 'ace-builds/src-noconflict/theme-chrome'

let ajaxRequest = (url: string, data?: any) => {
    return axios.get(url, data)
}
let content = ref(`{"name":"谭锦威","age":18}`)
let lineX: any = ref(['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'])
let lineY: any = ref([5, 20, 36, 10, 10, 20])





let editorInit = () => {
    import.meta.glob("ace-builds/src-noconflict/ext-language_tools");
    import.meta.glob("ace-builds/src-noconflict/mode-json");
    import.meta.glob("ace-builds/src-noconflict/mode-html");
    import.meta.glob("ace-builds/src-noconflict/mode-json5");
    import.meta.glob("ace-builds/src-noconflict/mode-javaScript");
    import.meta.glob("ace-builds/src-noconflict/theme-chrome");
    import.meta.glob("ace-builds/src-noconflict/ext-static_highlight");
    import.meta.glob("ace-builds/src-noconflict/ext-beautify");
}


let checkOption = (echarts: any, dom: any, option: object) => {
    try {
        echarts.util.isObject(option) && dom.setOption(option, !0)
        return {
            code:0
        }
    } catch (e) {
        console.error("failed to run code", e)
        return {
            code:1
        };
    }
}
let getAceEditorData = () => {
    // 获得数据
    let setOption = (new Function("return " + content.value))();
    // // 重新渲染图表
    var myChart = echarts.init(document.getElementById('bar') as HTMLElement);

    let start = performance.now()
    myChart.setOption(setOption)
    let end = performance.now()
    console.log(end-start)
    
}


onMounted(async () => {
    var myChart = echarts.init(document.getElementById('bar') as HTMLElement);

    myChart.setOption({
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
        ]
    });

    // 地图
    let { data } = await ajaxRequest('https://geojson.cn/api/data/china.json')
    // console.log(data)
    var mapChart = echarts.init(document.getElementById('map') as HTMLElement);
    echarts.registerMap('chinaGeo', data)
    mapChart.setOption({
        title: {
            text: 'map视图'
        },
        tooltip: {
            formatter(params: any) {

                return `${params.name} 目前  ${params.value || 0}`
            }
        },
        visualMap: {
            left: 'left',
            top: 'center',
            min: 0,
            max: 7000,
            text: ['高', '低'],
            calculable: true
        },
        series: [
            {
                type: 'map',
                name: 'China',
                map: 'chinaGeo',
                data: [
                    { "name": "北京", value: 5300 },
                    { "name": "天津", value: 2400 },
                    { "name": "上海", value: 4300 },
                    { "name": "广东", value: 3300 },
                    { "name": "黑龙江", value: 1100 },
                    { "name": "新疆", value: 1100 }
                ]
            }
        ]
    })

    // nextTick(() => {
    //     editorInit()
    // })
})
</script>
<style scoped>
.eChart_box {
    width: 400px;
    height: 400px;
}
</style>
