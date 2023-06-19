<template>
    <div class="schedule-table">
        <div class="schedule-table-head">
            <span>状态</span>
            <span>赛事名称</span>
            <span>赛事阶段</span>
            <span>赛事时间</span>
            <span>对阵情况</span>
            <span>相关内容</span>
        </div>
        <ul class="schedule-table-body">
            <li v-for="item in retObj.result" :key="item.bMatchId" :class="returnClass(item.MatchStatus)">
                <span>{{ returnMatchStatus(item.MatchStatus) }}</span>
                <span>{{ item.GameName }}</span>
                <span>{{ item.GameTypeName }}</span>
                <span>{{ item.MatchDate }}</span>
                <span>
                    <n-image width="50" height="50" :src="returnTeamImg(item.TeamA)" />
                    <em style="margin-top: 6px;">{{scheduleShowScore? item.ScoreA : '-'}}</em>
                    <i></i>
                    <em style="margin-top: 6px;">{{scheduleShowScore? item.ScoreB : '-' }}</em>
                    <n-image width="50" height="50" :src="returnTeamImg(item.TeamB)" />
                </span>
                <span>
                    <a v-if="item.MatchStatus=='1'" class="btn-stay">敬请期待</a>
                    <template v-if="item.MatchStatus=='2'">
                        <a class="btn-playback">前往观赛</a>
                        <a class="btn-detail">详细数据</a>
                    </template>
                    <template v-if="item.MatchStatus=='3'">
                        <a v-if="item.NewsId==''" class="btn-playback">前往观赛</a>
                        <a v-else class='btn-playback'>录像更新中</a>
                        <a class="btn-detail">详细数据</a>
                    </template>
                </span>            
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
import { NImage } from 'naive-ui'
import axios from 'axios'
import { h,computed,reactive,onBeforeMount,nextTick,ref } from 'vue'
import _ from 'lodash';
import utils from '../../utils';

let getQueryUrl = () => {
    let endId = ''
    let startId = ''
    let searchStatus = ''
    let searchBGame = '5'
    let searchSGame = '190'
    let searchTeam = ''
    let searchOrder = 3
    let searchPage = 1  //当前页
    let searchPageSize = 9 //页码数

    let url = '/lol/match/apis/searchBMatchInfo_bak.php'
    let startDate = utils.getDate()+' 00:00:00'
    let endDate = utils.get3DayDate()+' 23:59:59'
    return `${url}?p8=${searchBGame}&p1=${searchSGame}&p4=${searchStatus}&p2=${searchTeam}&p9=${encodeURIComponent(startDate)}&p10=${encodeURIComponent(endDate)}&p6=${searchOrder}&p11=${endId}&p12=${startId}&page=${searchPage}&pagesize=${searchPageSize}&r1=retObj`
}
let ajaxRequest =async () => {
    let url = getQueryUrl()
    let {data} =await axios.get(url)
    let list = data.split("=");
    
    let data1 =(new Function('return '+list[1]))();
    // let obj =Object.entries(data1)
    console.log(data1)
    retObj.value  = data1.msg
    
    
}
let LoadBMatchList = () => {
    // axios.defaults.baseURL = 'https://www.fastmock.site'
    let data = axios.get('/mock/ebc90efe9540a7b91d29dde1aedb1397/homeApp/api/rankingList')
    console.log(data)
}
let retObj1 = { "status": "0", "msg": { "total": "11", "totalpage": "2", "page": "1", "result": [{ "bMatchId": "10195", "bMatchName": "TES vs LGD", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "42", "ScoreA": "2", "TeamB": "4", "ScoreB": "0", "MatchDate": "2023-06-16 15:00:00", "MatchStatus": "3", "MatchWin": "1", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "764502578", "Chat1": "", "Chat2": "", "Chat3": "764502578", "News1": "", "News2": "", "News3": "", "isFocus": "1" }, { "bMatchId": "10196", "bMatchName": "FPX vs RNG", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "7", "ScoreA": "0", "TeamB": "8", "ScoreB": "1", "MatchDate": "2023-06-16 17:00:00", "MatchStatus": "2", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "764502578", "Chat1": "", "Chat2": "", "Chat3": "764502578", "News1": "", "News2": "", "News3": "", "isFocus": "1" }, { "bMatchId": "10197", "bMatchName": "UP vs NIP", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "685", "ScoreA": "0", "TeamB": "587", "ScoreB": "0", "MatchDate": "2023-06-16 19:00:00", "MatchStatus": "2", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "1076403327", "Chat1": "", "Chat2": "", "Chat3": "1076403327", "News1": "", "News2": "", "News3": "", "isFocus": "1" }, { "bMatchId": "10198", "bMatchName": "IG vs OMG", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "2", "ScoreA": "0", "TeamB": "6", "ScoreB": "0", "MatchDate": "2023-06-17 15:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "764502578", "Chat1": "", "Chat2": "", "Chat3": "764502578", "News1": "", "News2": "", "News3": "", "isFocus": "0" }, { "bMatchId": "10199", "bMatchName": "RA vs WBG", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "11", "ScoreA": "0", "TeamB": "41", "ScoreB": "0", "MatchDate": "2023-06-17 17:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "764502578", "Chat1": "", "Chat2": "", "Chat3": "764502578", "News1": "", "News2": "", "News3": "", "isFocus": "0" }, { "bMatchId": "10200", "bMatchName": "LNG vs EDG", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "9", "ScoreA": "0", "TeamB": "1", "ScoreB": "0", "MatchDate": "2023-06-17 19:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "876835148", "Chat1": "", "Chat2": "", "Chat3": "876835148", "News1": "", "News2": "", "News3": "", "isFocus": "0" }, { "bMatchId": "10201", "bMatchName": "TT vs NIP", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "438", "ScoreA": "0", "TeamB": "587", "ScoreB": "0", "MatchDate": "2023-06-18 15:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "1076403327", "Chat1": "", "Chat2": "", "Chat3": "1076403327", "News1": "", "News2": "", "News3": "", "isFocus": "0" }, { "bMatchId": "10202", "bMatchName": "RNG vs TES", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "8", "ScoreA": "0", "TeamB": "42", "ScoreB": "0", "MatchDate": "2023-06-18 17:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "764502578", "Chat1": "", "Chat2": "", "Chat3": "764502578", "News1": "", "News2": "", "News3": "", "isFocus": "0" }, { "bMatchId": "10203", "bMatchName": "JDG vs BLG", "GameId": "190", "GameName": "2023\u804c\u4e1a\u8054\u8d5b", "GameTypeId": "7", "GameMode": "3", "GameTypeName": "\u590f\u5b63\u8d5b\u5e38\u89c4\u8d5b", "GameProcId": "130", "GameProcName": "\u7b2c\u4e09\u5468", "TeamA": "29", "ScoreA": "0", "TeamB": "57", "ScoreB": "0", "MatchDate": "2023-06-18 19:00:00", "MatchStatus": "1", "MatchWin": "0", "iQTMatchId": "0", "bGameId": "5", "NewsId": "0", "HighlightsId": "0", "Video1": "0", "Video2": "0", "Video3": "952906541", "Chat1": "", "Chat2": "", "Chat3": "952906541", "News1": "", "News2": "", "News3": "", "isFocus": "0" }] } };
let teamList = [{
    "TeamId": "1",
    "TeamName": "\u4e0a\u6d77EDG\u5408\u521b\u6c7d\u8f66",
    "TeamEnName": "SHANGHAIEDWARDGAMINGHYCAN",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103153103\/7c5a8db3be3d7c93114ac47a801d64cb\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/1943f15147096093ff2a18fbbcb838ba\/0"
}, {
    "TeamId": "2",
    "TeamName": "IG",
    "TeamEnName": "InvictusGaming",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152918\/562affbb9f99b0e472644f93a19291e7\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/75779218c5c153433b7463c747bb9854\/0"
},
{
    "TeamId": "4",
    "TeamName": "LGD",
    "TeamEnName": "LGDGAMING",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103153121\/0cef697fa6d0416e672c2fd90f30718c\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
}, {
    "TeamId": "6",
    "TeamName": "OMG",
    "TeamEnName": "OhMyGod",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152756\/56c5bb71d14d13ec280908542ac8e1a9\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
},
{
    "TeamId": "7",
    "TeamName": "FPX",
    "TeamEnName": "FunPlusPhoenix",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152856\/4afad949fdd8b7728b9936dc92483e50\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/c12a810c1af783d84b38ad86ae95ee29\/0"
},
{
    "TeamId": "8",
    "TeamName": "RNG",
    "TeamEnName": "RoyalNeverGiveUp",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152940\/3cbf5f4d26c24711602996fd3f3b0eca\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/c5d9464e5e5b45bc832f12336de07e44\/0"
},
{
    "TeamId": "9",
    "TeamName": "\u82cf\u5ddeLNG",
    "TeamEnName": "SuzhouLNGEsports",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103153008\/47bfafb617f878195438a7a27234c7bc\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/b1dbd56581ef0dfbfe10f62cad7b3d4c\/0"
},
{
    "TeamId": "11",
    "TeamName": "RA",
    "TeamEnName": "RareAtom",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152819\/e7e523c53e540d1c9221445082622936\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
},
{
    "TeamId": "12",
    "TeamName": "\u897f\u5b89WE",
    "TeamEnName": "XianTeamWE",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103153050\/5c22150153baa973f73adf4909a041ec\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/514c455f266ae4327042a0e60a38d2d5\/0"
},
{
    "TeamId": "29",
    "TeamName": "\u5317\u4eacJDG\u82f1\u7279\u5c14",
    "TeamEnName": "BeijingJDGIntelEsportsClub",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230424170832\/6fb433324e6e7b9ad2eb7c89d27961b3\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
},
{
    "TeamId": "42",
    "TeamName": "TES",
    "TeamEnName": "TOPESPORTS",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152833\/5d7b9de32e642e06f1ad0958a00a25f5\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/ca533bdaadad784d8d9abee3d8dfed64\/0"
},
{
    "TeamId": "41",
    "TeamName": "WBG\u4e00\u6c7d\u5965\u8fea",
    "TeamEnName": "WeiboGamingFAWAUDI",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103153023\/1237a5f532c3a8e87ee2dd355099f9a5\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
},
{
    "TeamId": "57",
    "TeamName": "BLG\u5e73\u5b89\u94f6\u884c",
    "TeamEnName": "BilibiliGamingPinganBank",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152953\/ab0b0ff4d9a75927cf7d8bb58ba27d64\/0",
    "sUrl": "LPL",
    "Place": "0",
    "TeamLogoDeep": "\/\/shp.qpic.cn\/lolwebvideo\/201501\/e20e1c233f1227037261c2d8761b6041\/0"
},
{
    "TeamId": "587",
    "TeamName": "\u6df1\u5733NIP",
    "TeamEnName": "SHENZHENNIP",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152746\/c8a8f59fadc0da0bda0c4997e3f62afb\/0",
    "sUrl": "LPL",
    "Place": "1",
    "TeamLogoDeep": ""
},
{
    "TeamId": "685",
    "TeamName": "UP",
    "TeamEnName": "UltraPrime",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152805\/12c63663ab401c815ccded42a5ad47e6\/0",
    "sUrl": "LPL",
    "Place": "0",
    "TeamLogoDeep": ""
},
{
    "TeamId": "438",
    "TeamName": "TT",
    "TeamEnName": "THUNDERTALKGAMING",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20230103152930\/f1e243799a62f73f37af8f10be9dd977\/0",
    "sUrl": "LPL",
    "Place": "0",
    "TeamLogoDeep": ""
},
{
    "TeamId": "422",
    "TeamName": "AL",
    "TeamEnName": "AnyonesLegend",
    "TeamLogo": "\/\/img.crawler.qq.com\/lolwebvideo\/20220113160852\/948dda878f0b042d290d6bdc84325e22\/0",
    "sUrl": "LPL",
    "Place": "0",
    "TeamLogoDeep": ""
}
]



//比赛列表
let returnClass = (MatchStatus:any)=>{
    let statusClass = ['', '', ' playing', ' end'];
    return statusClass[MatchStatus]
}
let returnTeamImg = (TeamId: string) => {
    let result: any = _.find(teamList, function (item) {
        return item.TeamId == TeamId
    })
    return result.TeamLogo;
}
let returnMatchStatus = (MatchStatus: string) => {
    let map = new Map();
    map.set(1, '未开始')
    map.set(2, '进行中')
    map.set(3, '已结束')
    return map.get(Number(MatchStatus))
}
let scheduleShowScore = ref<boolean>(false)



/**
 * 返回html
 * 用法:<returnBtnHtml :item="item" />
 * @param item 
 */
let returnBtnHtml = (item:any)=>{ 
    let btn =undefined;
    let item1 = item.item
    // console.log(item1.item)
    if (Number(item1.MatchStatus) == 1) {
        btn = h('a', { class:'btn-stay' }, '敬请期待')
        
    } else if (Number(item1.MatchStatus) == 2) {
        btn = h('span',{class:'btn-box'}, [
            h('a', { class:'btn-a btn-playback' }, '前往观赛'),
            h('a', { class:'btn-a btn-detail' }, '详细数据'),
        ])
    } else if (Number(item1.MatchStatus) == 3) {
        if (item1.NewsId) {
            btn = h('div',{class:'btn-box'}, [
                h('a', { class:'btn-a btn-playback' }, '精彩回放'),
                h('a', { class:'btn-a btn-detail' }, '详细数据'),
            ])
        } else {
            h('div',{class:'btn-box'}, [
                h('a', { class:'btn-a btn-detail' }, '录像更新中'),
                h('a', { class:'btn-a btn-detail' }, '详细数据'),
            ])
        }
    }
    return btn;
}
interface retObj{
    status?:string,
    msg?:{
        page?:string,
        total?:string,
        totalpage?:string,
        result?:Array<object>
    }
}
let retObj  = ref<any>({})

onBeforeMount(() => {
    // let date =utils.get3DayDate()
    ajaxRequest()
    // let data1 = data.replace('var',' ')
    // let jsCode = (new Function(`return ${data1}`))()
    // retObj.value = jsCode 
    // retObj.value = jsCode
    

})
let retlist = computed(()=>{
    return retObj.msg
})
</script>
<style lang="scss" scoped>
$color1: #1c2132;
$color2: #292929;
$color3: #959595;
$color4: #ff003f;

.schedule-table {
    background: #f4f4f4;
    // height: 300px;

    .schedule-table-head {
        background-color: #2c3041;
        height: 45px;
        border-radius: 6px;
        display: flex;
        justify-content: space-around;

        span {
            color: #fff;
            font-family: 'block-title';
            text-align: center;
            font-size: 18px;
            line-height: 45px;

            &:nth-child(1) {
                width: 80px;
            }

            &:nth-child(2) {
                width: 200px;
            }

            &:nth-child(3) {
                width: 140px;
            }

            &:nth-child(4) {
                width: 190px;
            }

            &:nth-child(5) {
                width: 210px;
            }

            &:nth-child(6) {
                width: 210px;
            }

        }
    }

    .schedule-table-body {
        color: #1c2132;

        li{
            display: flex;
            justify-content: space-around;
            background: #fff;
            margin-bottom: 15px;
            height: 58px;
            align-items: center;
            border-radius: 6px;

            span {
                font-size: 16px;
                color: $color3;
                text-align: center;
                display: flex;
                align-items: center;
                justify-content: center;

                &:nth-child(1) {
                    width: 80px;
                }

                &:nth-child(2) {
                    width: 200px;
                }

                &:nth-child(3) {
                    width: 140px;
                }

                &:nth-child(4) {
                    width: 190px;
                }

                &:nth-child(5) {
                    width: 210px;
                }

                &:nth-child(6) {
                    width: 210px;
                }
                
                    a {
                        font-size: 12px;
                        width: 68px;
                        height: 25px;
                        border-top-left-radius: 10px;
                        border-bottom-right-radius: 10px;
                        box-sizing: border-box;
                        border: 1px solid transparent;
                        line-height: 25px;
                        cursor: pointer;
                        margin-right: 5px;
                    }
                
               

                .btn-stay {
                    color: #fff;
                    background-color: $color3;
                }

                .btn-playback {
                    color: #fff;
                    background-color: $color1;

                }

                .btn-detail {
                    color: $color2;
                    background-color: #fff;
                    border: 1px solid $color2;
                }

                em,
                i {
                    font-style: normal;
                    font-weight: normal;
                }

                em {
                    margin-top: 0;
                    line-height: 40px;
                    font-size: 34px;
                    color: $color3;
                    text-align: center;
                    margin: 0 10px;
                    font-family: 'Knucklehead';
                }

                i {
                    margin-top: 4px;
                    width: 4px;
                    height: 18px;
                    background: linear-gradient(to bottom, $color3 4px, transparent 4px 14px, $color3 14px)
                }
            }


        }

        .end {
            span{
                color: $color1;


                em{
                    color: $color1;
                }
                i{
                    background: linear-gradient(to bottom, $color1 4px, transparent 4px 14px, $color1 14px)
                }
            }
            
        }

        .playing {
            span{
                color: $color4;
                

                .btn-stay {
                    color: #fff;
                    background-color: $color4;
                }

                .btn-playback {
                    color: #fff;
                    background-color: $color4;

                }

                .btn-detail {
                    color: $color4;
                    background-color: #fff;
                    border: 1px solid $color4;
                }
                em{
                    color: $color4;
                }
                i{
                    background: linear-gradient(to bottom, $color4 4px, transparent 4px 14px, $color4 14px)
                }
            }
        }

    }

}
</style>

