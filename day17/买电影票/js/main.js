/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 10:56:08
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 11:02:53
 */
require(["banner", "tab", "dom", "data"], function (B, T, D, data) {
    new B({
        data,
        oBanner: D.get(".banner"),
        oContainer: D.get(".container"),
        oPrev: D.get(".prev"),
        oNext: D.get(".next"),
        index: 0
    })
})