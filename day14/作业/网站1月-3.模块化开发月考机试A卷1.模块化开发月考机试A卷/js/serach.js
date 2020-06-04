/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:03:13
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:30:47
 */
define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }

    S.prototype = {
        cosntructor: S,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.input.oninput = () => {
                if (!this.input.value) {
                    this.ul.classList.remove("active")
                    return
                }


                this.ul.classList.add("active")
                var data = this.data.filter(item => {
                    return item.includes(this.input.value)
                })
                this.render(data)

            }
        },
        render(data) {
            this.ul.innerHTML = data.map(item => {
                return `<li>${item}</li>`
            }).join("")
        }
    }

    return S
})