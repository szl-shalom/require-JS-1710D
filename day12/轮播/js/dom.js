/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 15:45:58
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 15:45:58
 */
define(function () {
    return {
        get: (el, par = document) => par.querySelector(el),
        gets: (el, par = document) => par.querySelectorAll(el),
    }
})