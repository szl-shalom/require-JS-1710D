/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 15:48:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 16:03:01
 */
require(["data", "dom", "register"], function (data, D, Register) {
    var data = data;
    var res = Register({
        data,
        username: D.get(".r-username"),
        password: D.get(".r-password"),
        password1: D.get(".r-password1"),
        email: D.get(".r-email"),
        name: D.get(".r-name"),
        userRegister: D.get(".user-register")
    })
   


})