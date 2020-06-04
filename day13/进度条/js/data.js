/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 17:05:16
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-18 11:28:11
 */
define(function () {
    var index = 1

    function random(n, m) {
        return Math.floor(Math.random() * (m - n + 1) + n)
    }

    return [{
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }, {
        content: "乾坤大挪移" + index++,
        progress: random(0, 800)
    }]
})