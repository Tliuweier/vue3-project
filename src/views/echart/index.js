try {
    var w, 
    y = g.runCode.replace(/Math.random\([^)]*\)/g, "__ECHARTS_EXAMPLE_RANDOM__()"), 
    E = new Math.seedrandom(g.randomSeed), 
    b = "var css, option;" + handleLoop(y) + "\nreturn [option, css];";
    w = e ? new Function("myChart", "app", "setTimeout", "setInterval", "ROOT_PATH", "__ECHARTS_EXAMPLE_RANDOM__", "top", "parent", "window", "self", "globalThis", "document", "location", "histroy", "eval", "execScript", "Function", b).bind(h)(u, f, c, s, g.cdnRoot, E, void 0, void 0, h, h, h, h.document, h.location, void 0, void 0, void 0, void 0) 
    : 
    new Function("myChart", "app", "setTimeout", "setInterval", "ROOT_PATH", "__ECHARTS_EXAMPLE_RANDOM__", b)(u, f, c, s, g.cdnRoot, E);
    var T = n.textContent = w[1] || "";
  
    var O = w[0];
    echarts.util.isObject(O) && u.setOption(O, !0)
} catch (e) {
    u.__flagInMainProcess = !1,
        console.error("failed to run code", e),
        t({
            evt: "codeError",
            message: e.message
        })
}


var t = function(e) {
    return window.postMessage(e, "*")
}
a.setOption = function() {
    var e = performance.now()
      , n = v.apply(this, arguments)
      , o = performance.now();
    return t({
        evt: "optionUpdated",
        option: JSON.stringify(a.getOption(), (function(e, t) {
            return echarts.util.isFunction(t) ? t + "" : t
        })
        ),
        updateTime: o - e
    }),
    n
}

let checkParma = (echarts,dom,option)=>{
    try{
        return echarts.util.isObject(obj)&&dom.setOption(option,!0)
    }catch(e){
        console.error("failed to run code", e)
        return E;
    }
}