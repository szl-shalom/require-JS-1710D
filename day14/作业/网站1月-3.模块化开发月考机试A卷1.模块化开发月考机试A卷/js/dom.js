/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:04:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:04:17
 */
define(function () {
    return {
        get: function (el, parent) {
            parent = parent || document
            return parent.querySelector(el)
        },
        gets: function (el, parent) {
            parent = parent || document
            return parent.querySelectorAll(el)
        }
    }
})