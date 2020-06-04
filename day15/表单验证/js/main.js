/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-21 11:37:52
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 20:43:32
 */
require(["dom", "reg"], function ($, R) {
    new R({
        data: [{
            input: $.get(".username"),// 被绑定的input元素
            reg: /^[\u4e00-\u9fa5]{2}$/,//对应的正则表达式
            clickInfo: "请输入2个汉字",//聚焦提示文字
            errorInfo: "姓名不正确",//验证不通过提示文字
            emptyInfo: "姓名不可以为空",//输入为空提示文字
        }, {
            input: $.get(".phone"),
            reg: /^1[3-9]\d{9}$/,
            clickInfo: "请输入11位手机号",
            errorInfo: "手机号不正确",
            emptyInfo: "手机号不可以为空",
        }, {
            input: $.get(".address"),
            reg: /./,
            clickInfo: "请输入任意地址",
            errorInfo: "地址不正确",
            emptyInfo: "地址不可以为空",
        }, {
            input: $.get(".username1"),// 被绑定的input元素
            reg: /^[\u4e00-\u9fa5]{1,2}$/,//对应的正则表达式
            clickInfo: "请输入1-2个汉字",//聚焦提示文字
            errorInfo: "姓氏不正确",//验证不通过提示文字
            emptyInfo: "姓氏不可以为空",//输入为空提示文字
        }, {
            input: $.get(".email"),// 被绑定的input元素
            reg: /^\w+@\w+\.(com|cn|net)$/,//对应的正则表达式
            clickInfo: "请输入邮箱",//聚焦提示文字
            errorInfo: "邮箱不正确",//验证不通过提示文字
            emptyInfo: "邮箱不可以为空",//输入为空提示文字
        }, {
            input: $.get(".password"),// 被绑定的input元素
            reg: /^\d{6,12}$/,//对应的正则表达式
            clickInfo: "请输入6-12数字",//聚焦提示文字
            errorInfo: "密码不正确",//验证不通过提示文字
            emptyInfo: "密码不可以为空",//输入为空提示文字
        }],
        btn: $.get(".submit"),//注册按钮
        url: "./接收数据.html",//验证通过要跳转的路径
        password1: $.get(".password1"),
        password: $.get(".password"),
        input:$.get(".load")
    })
})