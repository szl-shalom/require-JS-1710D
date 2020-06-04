require.config({
    baseUrl: "./js",
})

require(["dom", "Tab", "data"], function ($, Tab, data) {
    new Tab({
        data,// 数据
        type: "click",//事件类型
        index: 1,//当前显示的下标
        oTitle: $.get(".title"),//标题节点
        oContent: $.get(".content"),//内容节点
        oUnderLine: $.get(".underLine"),//下划线节点 
    })
})