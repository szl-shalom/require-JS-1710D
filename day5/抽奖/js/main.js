/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-09 09:55:09
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-11-06 09:07:32
 */
require.config({
    baseUrl: "./js", //基址路径
    paths: {
        "time": "time",
        "getGift": "getGift",
        "dom": "dom",
        "data": "data",
    }
})


require(["time", "dom"], function (Time, $) {
    new Time({
        el: $.get(".header"),//倒计时节点
        time: 1,//倒计时时间   
    })
})
