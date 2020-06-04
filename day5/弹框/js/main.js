/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-09 09:11:22
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 18:04:54
 */
require(["./Alert"], function (Alert) {
    document.querySelector("button").addEventListener("click", function () {
        Alert("#" + Math.random().toString(16).substr(2, 6), document.querySelector("input").value)
    })
})