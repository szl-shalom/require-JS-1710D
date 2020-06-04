/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 10:57:26
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 15:48:46
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