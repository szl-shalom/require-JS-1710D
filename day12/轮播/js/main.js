/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 15:45:31
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 15:48:13
 */
require(["banner", "dom", "data"], function (B, $, data) {
    new B({
        index: 0,
        wrap: $.get(".swiper-wrap"),
        container: $.get(".swiper-container"),
        next: $.get(".next"),
        prev: $.get(".prev"),
        data,

    })
})