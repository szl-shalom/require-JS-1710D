/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-22 11:55:38
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 13:48:05
 */
require(["cortDownTime", "dom", "data", "floor-filter"], function (C, D, data, F) {
    new C({
        el: D.get(".time"),
        furtrueTime: new Date(2019, 9, 23)
    })

    new F({
        data: data,
        content: D.get(".content"),
        nav: D.get(".nav"),
        navRight: D.get(".nav-right"),
    })
})  