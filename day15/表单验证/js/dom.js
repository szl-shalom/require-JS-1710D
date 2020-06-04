/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-21 11:38:22
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-21 11:39:02
 */
define(function () {
    return {
        get: (el, parent = document) => parent.querySelector(el),
        gets: (el, parent = document) => parent.querySelectorAll(el),
    }
})