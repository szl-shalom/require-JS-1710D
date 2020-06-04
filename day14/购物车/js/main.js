/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 11:24:03
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 11:32:59
 */

require(["car"], function (C) {
    var index = 1, index1 = 1
    new C({
        data: [{
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }, {
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }, {
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }, {
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }, {
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }, {
            img: index++ + ".jpg",
            desc: "乾坤大魔衣" + index1++,
            count: index1++,
            price: +Math.random().toString().slice(2, 5)
        }],
        wrap: document.querySelector("#cartTable"),
        tbody: document.querySelector("tbody"),
    })
})
