/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-16 18:44:55
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-16 18:47:00
 */
define(function () {
    return {
        /**
         * @description: 获取单个节点
         * @param {string} css选择器
         * @param {object} 父元素 
         * @return: 对象
         */
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