/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 12:57:39
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 15:28:03
 */
require(["tips"], function (Tips) {
    var btn = document.querySelector("button")
    new Tips({
        btn: btn,
        pos: "right",
        style: {
            color: "green",
            fontSize: "25px",
            width: "300px",
            background:"red",
            padding:"20px"
        },
        content: "卧槽，无情！卧槽，无情！卧槽，无情！卧槽，无情！卧槽，无情！卧槽，无情！"
    })
})