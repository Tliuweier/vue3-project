<template>
   
        <div id="bar" class="eChart_box"></div>
        <div id="map" class="eChart_box"></div>
 
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import * as echarts from 'echarts'
import axios from 'axios'
// var myChart = echarts.init(document.getElementById('main'));

let  ajaxRequest = (url:string,data?:any)=>{
    return axios.get(url,data)
}


onMounted(async () => {
    
    var myChart = echarts.init(document.getElementById('bar'));
    myChart.setOption({
        title: {
            text: 'ECharts 入门示例'
        },
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }
        ]
    });
   let {data} = await ajaxRequest('https://geojson.cn/api/data/china.json')
    console.log(data)
    var mapChart = echarts.init(document.getElementById('map'));
    echarts.registerMap('chinaGeo',data)
    mapChart.setOption({
        title:{
            text:'map视图'
        },
        tooltip: {
            formatter(params){
               
                return `${params.name} 目前  ${params.value||0}`
            }
        },
        visualMap:{
            left:'left',
            top:'center',
            min:0,
            max:7000,
            text:['高','低'],
            calculable:true
        },
        series:[
            {
                type:'map',
                name:'China',
                map:'chinaGeo',
                data:[
                    {"name":"北京",value:5300},
                    {"name":"天津",value:2400},
                    {"name":"上海",value:4300},
                    {"name":"广东",value:3300},
                    {"name":"黑龙江",value:1100},
                    {"name":"新疆",value:1100}
                ]
            }
        ]
    })
})
</script>
<style scoped>
.eChart_box{
    width: 400px;
    height: 400px;
}
</style>
