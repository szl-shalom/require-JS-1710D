/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 08:52:29
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:04:23
 */
require(["todoList"], function (T) {
    new T({
        wrap: document.querySelector(".wrap"),
        ul: document.querySelector("ul"),
        input: document.querySelector("input")
    })
})