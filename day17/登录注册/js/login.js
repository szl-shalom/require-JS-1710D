/*
 * @Description: This is a JS program !ar 
 * @Author: 史志龙
 * @Github:v https://github.com/szl-shalom/
 * @Date: 2019-10-23 15:50:38
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 16:08:02
 */
define(function () {
    function L(opt) {
        opt.login.onclick = () => {
            var flag = opt.data.some(function (item) {
                return item.username === opt.username.value && item.password === opt.password.value
            })
            flag ? alert("登录成功") : alert("登录失败")
        }

    }

    return L
})