/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 13:53:15
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 13:54:57
 */
require(["data", "dom", "sanji"], function (data, $, S) {
    new S({
        data,
        province: $.get("#province"),
        city: $.get("#city"),
        area: $.get("#area"),
    })
})