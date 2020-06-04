/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 13:55:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 13:55:05
 */
define(function () {
    return {
        get: function (el, par) {
            par = par || document
            return par.querySelector(el)
        },
        gets: function (el, par) {
            par = par || document
            return par.querySelectorAll(el)
        }

    }
})