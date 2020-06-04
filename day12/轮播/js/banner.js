/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 15:49:23
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 16:03:27
 */
define(["../lib/velocity.min"], function (V) {
    function B(opt) {
        Object.assign(this, { index: 0 }, opt)
        this.init()
    }

    B.prototype = {
        constructor: B,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            this.container.innerHTML = this.data.map(item => {
                return `
                <div class="swiper-slide">
                    <img src="./img/${item}" alt="">
                </div>
                `
            }).join("")
            this.container.appendChild(this.container.firstElementChild.cloneNode(true))
            this.container.style.width = this.wrap.offsetWidth * this.container.children.length + "px"
        },
        bindEvent: function () {
            this.next.addEventListener("click", () => {
                if (this.index === this.data.length) {
                    this.index = 0
                    this.container.style.left = 0
                }
                this.index++
                console.log(this.index)
                V(this.container, {
                    left: -this.index * this.wrap.offsetWidth
                })
            })

            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    console.log(1)
                    this.index = this.data.length
                    this.container.style.left = -this.index * this.wrap.offsetWidth + "px"
                }
                this.index--
                console.log(this.index)
                V(this.container, {
                    left: -this.index * this.wrap.offsetWidth
                })
            })
        }

    }
    return B
})