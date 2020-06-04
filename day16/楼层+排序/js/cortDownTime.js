/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-22 13:32:25
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 13:44:42
 */
define(function () {
    function C(opt) {
        Object.assign(this, opt)
        this.init()
    }
    C.prototype = {
        constructor: C,
        init() {
            this.render()
            setInterval(() => {
                this.render()
            }, 1000);
        },
        render() {
            var curTime = new Date()
            var cortTime = this.furtrueTime - curTime
            var sec = parseInt(cortTime / 1000 % 60)
            var min = parseInt(cortTime / 1000 / 60 % 60)
            var hour = parseInt(cortTime / 1000 / 60 / 60 % 24)
            var day = parseInt(cortTime / 1000 / 60 / 60 / 24)
            this.el.innerHTML = `  距离倒计时结束
            <span>${day}</span>天
            <span>${hour}</span>小时
            <span>${min}</span>分钟
            <span>${sec}</span>秒`
        }


    }
    return C
})