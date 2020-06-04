/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-21 18:56:00
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-21 19:05:42
 */
require(["data", "s"], function (data, S) {
    new S({
        data,
        wrap: document.querySelector(".wrap")
    })
})