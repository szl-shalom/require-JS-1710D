/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 10:36:18
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 10:40:20
 */
define(function () {
    function Sel(opt) {
        if (!opt.ul) {
            alert("ul必须传！！！！！！")
            return;
        }

        Object.assign(this, opt)
        this.init()
    }

    Sel.prototype = {
        constructor: Sel,
        init: function () {
            this.btn.onclick = () => {
                this.ul.classList.toggle("active")
            }
        }
    }


    return Sel
})