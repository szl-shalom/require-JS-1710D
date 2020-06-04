/*
 * @Description: This is a JS program !
 * @Author: 史志龙  
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-16 18:39:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 11:02:25
 */
require(["../mock/data", "dom", "page"], function (data, $, Page) {
    new Page({
        // index: 1,
        // pageSize: 6,

        
        data: data,
        oPage: $.get(".page"),
        oList: $.get(".list"),
        oPageUl: $.get(".page-ul"),
        first: $.get(".first"),
        end: $.get(".end"),
        prev: $.get(".prev"),
        next: $.get(".next"),


    })
})