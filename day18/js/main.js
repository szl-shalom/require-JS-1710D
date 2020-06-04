/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-24 11:04:44
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-24 11:23:16
 */
require(["data", "dom", "filter", "sel", "banner", "tab", "floor"], function (data, $, F, S, B, T, Floor) {
    new F({
        data: data.filterData,
        input: $.get(".header>input"),
        ul: $.get(".header>ul")
    })

    new T({
        title: $.get(".title"),
        content: $.get(".right .content"),
    })

    new B({
        index: 0,
        container: $.get(".container"),
        page: $.get(".page"),
        banner: $.get(".banner")
    })

    new S({
        leftUl: $.get(".left-ul"),
        rightUl: $.get(".content ul"),
        data: data.selData,
        left: $.get(".left"),
    })

    new Floor({
        floor: $.get(".floor"),
        leftFloor: $.get(".left-floor"),
    })
})