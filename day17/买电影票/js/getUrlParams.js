/*
 * @Description: This is a JS program 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 14:40:38
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 14:51:22
 */
define(function () {
    function getUrlParams() {
        return JSON.parse('{"' + location.search.slice(1).replace(/&/g, '","').replace(/=/g, '":"') + '"}')
    }
    return getUrlParams

})


//?namee=哥斯拉&price=37

//第一步  去掉？
//namee=哥斯拉&price=37

// 第二步  将 & 替换为   ","
//namee=哥斯拉","price=37

//第三部 将 =  替换为 ":"
//namee":"哥斯拉","price":"37

//第四步 在字符串两端分别进行拼接   {"namee":"哥斯拉","price":"37"}

//  {"name":"哥斯拉","price":"37"}