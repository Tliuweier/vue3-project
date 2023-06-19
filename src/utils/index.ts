import {Ref,h} from 'vue'
import * as  XLSX from 'xlsx'
import { WritingOptions } from 'xlsx'
import _ from 'lodash';
import { mount } from '@vue/test-utils';
/**
 * 对象转成数组
 */
let objectEditorArray = (object: any)=>{
    let list = []
    for (const key in object) {
        let item: { name: string, value: string | number, children?: Array<object> } = { name: '', value: '', children: [] }
        if (Object.prototype.toString.call(object[key]) === '[object Object]') {
            item.children = objectEditorArray(object[key])
            
        } else if (Array.isArray(object[key])) {
            
            for (const [index, iterator] of object[key].entries()) {
                if(Object.prototype.toString.call(iterator) === '[object Object]'){
                    item.children = objectEditorArray(iterator)
                }
                item.name = index
                item.value = iterator
                // list.push(item)
            }
        }
        item.name = key
        item.value = object[key]
        list.push(item)

    }
    return list;
}
/**
 * string转object
 * @param params Ref<string>
 */
let editorObject = (params: Ref<string>) => {
    let str = Object.freeze(params.value)
    return (new Function("return" + str))()
}

/**
 * 导出单个表格文件
 * @param data 
 * @param tableName 
 * @param fileName 
 */
let exportExeclData = (data:Array<object>,tableName:string,fileName:string)=>{
    let sheet = XLSX.utils.json_to_sheet(data)
    let wb = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,sheet,tableName)
    
    // 生成文件
    let blob = createBlob(wb)
    downloadFile(blob,fileName)
}
let createBlob =(workbook:any)=>{
    let opts:WritingOptions = {
        bookType:'xlsx',
        bookSST:false,
        type:'binary'
    }

    let wbout = XLSX.write(workbook,opts)
    function s2ab(s:any){
        var buf = new ArrayBuffer(s.length)
        var view = new Uint8Array(buf)
        for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
        return buf;
    }
    let buf = s2ab(wbout)
    var blob = new Blob([buf], {
        type: 'application/octet-stream'
    })
    return blob;
}
let downloadFile=(blob:Blob,fileName:string)=>{
    var aLink = document.createElement('a')
    let url = window.URL.createObjectURL(new Blob([blob], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }))
    aLink.href = url;
    aLink.download = `${fileName}`;
    aLink.click();
    window.URL.revokeObjectURL(url);
}

/**
 * 导入单个execl数据
 * @param file 
 * @param importColumns 
 * @param importData 
 */
let importExeclData = (file:File,importColumns:Ref<any>,importData:Ref<any>)=>{
    let reader = new FileReader()
    reader.onload = (e:any)=>{
        let data = XLSX.read(e.target.result, { type: 'binary' })
        console.log(data)
        const firstSheetName = data.SheetNames[0]
        const worksheet = data.Sheets[firstSheetName]
        const results = XLSX.utils.sheet_to_json(worksheet)
        // createTableData(results,importColumns,importData)
    }
    reader.readAsBinaryString(file)
}
let createTableData = (results:any,importColumns:any,importData:Ref<any>)=>{
    let list = [];
    for (let key in results[0]) {
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
    importColumns.value = list
    importData.value = results
}


/**
 * 导入多个execl数据
 * @param file 
 * @returns 
 */
let importExeclDatas = (file: File,importTabObject:Ref<any>) => {
  
        let reader = new FileReader()
        let map = new Map()
        let map1 = new Map()
        let tabs: any = [];
        reader.onload = (e: any) => {
            let data = XLSX.read(e.target.result, { type: 'binary' })
            _.forEach(data.SheetNames, (item) => {
                tabs.push(item)
            })
            for (const iterator in data.Sheets) {
                console.log(iterator)
                const worksheet = data.Sheets[iterator]
                const results = XLSX.utils.sheet_to_json(worksheet)
                let colums = createTabObject(results)
                map.set(iterator, colums)
                map1.set(iterator, results)
            }
            importTabObject.value = {
                tabs:tabs,
                tabcolums:map,
                tabDatas:map1
            }
        }
        reader.readAsBinaryString(file)

}
let createTabObject = (results:any,)=>{
    let list = [];
    for (let key in results[0]) {
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
    return list
}
/**
 * 
 * @param obj 
 * @returns 
 */
let deepClone = (obj:any)=>{

    if(typeof obj!=='object'|| obj ==null){
        return obj
    }
    const newObj = Array.isArray(obj)?[]:{}

    for(let key in obj){
        newObj[key] = deepClone(obj[key])
    }

    return newObj
}

let getDate=()=>{
    let now = new Date()
    let year = now.getFullYear()
    let month = now.getMonth()+1<10?'0'+(now.getMonth()+1):now.getMonth()+1
    let day = now.getDate()<10?'0'+now.getDate():now.getDate()
    return year+'-'+month+'-'+day
}

let get3DayDate=()=>{
    let now = new Date(Date.now() + 86400000 * 3)
    let year = now.getFullYear()
    let month = now.getMonth()+1<10?'0'+(now.getMonth()+1):now.getMonth()+1
    let day = now.getDate()<10?'0'+now.getDate():now.getDate()
    return year+'-'+month+'-'+day
}

export default {
    editorObject,
    objectEditorArray,
    exportExeclData,
    importExeclData,
    importExeclDatas,
    getDate,
    get3DayDate
}