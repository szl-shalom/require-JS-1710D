/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 14:39:37
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 15:01:29
 */
require(["selectSit", "dom"], function (S, D) {
    var obj = JSON.parse('{"' + decodeURI(location.search.slice(1)).replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    new S({
        data: obj,
        movieName:D.get(".movieName"),
        price:D.get(".price"),
        sit:D.get(".sit"),
        count:D.get(".count"),
        allPrice:D.get(".all-price"),
        left:D.get(".left")
    })

})