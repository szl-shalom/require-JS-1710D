/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:03:02
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:13:26
 */
define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }

    T.prototype = {
        constructor: T,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            [...this.oTitle.children].forEach((item) => {
                item.onclick = () => {
                    this.oTitle.querySelector(".active") && this.oTitle.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                }

            })
        }
    }




    return T
})