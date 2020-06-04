/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-21 19:01:58
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-21 19:17:22
 */
define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {
            this.wrap.innerHTML = this.render(this.data)
            this.bindEvent()
        },
        render(data) {
            return data.map(item => {
                return `<li>${item.name}</li>` + `${item.children ? "<ul>" + this.render(item.children) + "</ul>" : ""}`
            }).join("")
        },
        bindEvent() {
            this.wrap.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    if (tar.nextElementSibling && tar.nextElementSibling.nodeName === "UL") {
                        tar.nextElementSibling && tar.nextElementSibling.classList.toggle("active")
                    }
                }
            }
        }
    }


    return S
})

