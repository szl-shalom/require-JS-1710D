/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 16:43:51
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-18 10:41:39
 */
require(["dom", "progress", "data"], function ($, P, data) {
    new P({
        wrap: $.get(".wrap"),
        //     progress: $.get(".progress"),
        //     // slide: $.get(".slide"),
        //     // box: $.get(".box"),
        data: data,
    })
})