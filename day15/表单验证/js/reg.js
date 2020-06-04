/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-21 11:48:11
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 20:44:15
 */
define(function () {
    function R(opt) {
        Object.assign(this, opt)
        this.init()
    }


    R.prototype = {
        cosntructor: R,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.data.forEach((item) => {
                item.input.onfocus = () => {
                    item.input.nextElementSibling.innerHTML = item.clickInfo
                }

                item.input.onblur = () => {
                    if (item.input.value.trim() === "") {
                        item.input.nextElementSibling.innerHTML = item.emptyInfo;
                        return false;
                    }
                    var flag = item.reg.test(item.input.value.trim())
                    if (!flag) {
                        item.input.nextElementSibling.innerHTML = item.errorInfo;
                        return false
                    }
                    item.input.nextElementSibling.innerHTML = ""
                    return true
                }
            })
            this.btn.onclick = () => {
                if (!this.input.checked) {
                    alert("您还。。。。")
                    return 
                }
                var flag = this.data.every(item => {
                    return item.input.onblur()
                })

                var str = this.data.map((item) => {
                    return item.input.className + "=" + item.input.value
                }).join("&")

                flag && this.password1.onblur() ? location.href = this.url + `?${str}` : alert("存在不合法输入")
            }
            this.password1.onblur = () => {
                if (this.password1.value === this.password.value) {
                    this.password1.nextElementSibling.innerHTML = ""
                } else {
                    this.password1.nextElementSibling.innerHTML = "两次棉麻不一致"
                }
                return this.password1.value === this.password.value
            }


        }
    }


    return R
})