/*
 * @Description: This is a JS program 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 15:50:34
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 16:05:32
 */
define(["dom", "login"], function (D, L) {
    function R(opt) {
        opt.userRegister.onclick = () => {
            if (opt.password.value === opt.password1.value) {
                var obj = {
                    username: opt.username.value,
                    password: opt.password.value,
                    email: opt.email.value,
                    name: opt.name.value
                }
                opt.data.push(obj)
                D.get(".register").classList.add("active")
                D.get(".login").classList.remove("active")
                L({
                    data:opt.data,
                    username:D.get(".l-username"),
                    password:D.get(".l-password"),
                    login:D.get(".user-login")
                })
            } else {
                alert("两次密码不一致")
            }


        }
    }

    return R
})