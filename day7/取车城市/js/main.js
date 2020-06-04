require.config({
    baseUrl: "./js",
    paths: {
        "V": "../lib/velocity.min",
        "data": "../mock/data",
        "tab": "./Tab",
        "dom": "./dom",
    }
})

require(["dom", "tab", "data"], function ($, Tab, data) {
    new Tab({
        data,//数据
        oTitle: $.get(".title"), //标题节点
        oContent: $.get(".content"),//内容节点
        oUnderLine: $.get("i"),//下划线节点
    })
})