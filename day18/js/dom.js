/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-24 11:04:47
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-24 11:20:49
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