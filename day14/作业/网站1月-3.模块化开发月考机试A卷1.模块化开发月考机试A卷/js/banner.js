/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:03:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:49:39
 */
function B(opt) {
    Object.assign(this, { index: 0 }, opt)
    this.init();
}

B.prototype = {
    constructor: B,
    init() {
        this.bindEvent()
    },
    bindEvent() {
        var flag = true
        this.container.onmousewheel = () => {
            if (flag) {
                flag = false

                this.page.children[this.index].classList.remove("active")
                this.index = this.index === 0 ? 1 : 0
                //设置container.mairginLeft
                this.container.style.marginLeft = -this.index * 1000 + "px"
                //切换
                this.page.children[this.index].classList.add("active")

                setTimeout(function () {
                    flag = true
                }, 1000)
            }

        }
    }
}





define(function () {
    return B
})