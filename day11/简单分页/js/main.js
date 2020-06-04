/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-15 14:41:47
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-16 20:03:43
 */
require(["data", "page", "dom"], function (datas, Page, D) {
    new Page({
        data: datas.data,
        index: 10,//默认显示第二页
        oList: D.get(".list"),
        oPage: D.get(".page"),
        pageSize: 10,
        oSelect: D.get(".select"),
        oWrap: D.get(".wrap")
    }).init()
})