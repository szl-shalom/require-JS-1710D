/*
 * @Description: This is a JS program
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-09 09:12:35
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 17:48:13
 */
define(function () {
    function createAlert(color, content) {
        var div = document.createElement("div");
        div.classList.add("mask");
        div.style.background = color
        div.innerHTML = content
        div.style.lineHeight = "40px"
        document.body.appendChild(div);
    }
    return createAlert
})