/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 20:47:14
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-18 15:10:54
 */
define(["../lib/velocity.min"], function (V) {
    function M(opt) {
        Object.assign(this, opt)
        this.init()
    }

    M.prototype = {
        constructor: M,
        init() {
            this.data.forEach((item) => {
                this.create(item.message)
            })
            this.bindEvent()
        },
        create(mes) {
            var span = document.createElement("span");
            var i = document.createElement("i")
            span.innerHTML = mes;
            span.appendChild(i)
            this.container.appendChild(span)
            span.style.position = "absolute";
            span.style.left = this.container.offsetWidth + "px";
            span.style.whiteSpace = "nowrap";
            span.style.top = this.random(0, this.container.offsetHeight - span.offsetHeight) + "px";
            span.style.color = "#" + Math.random().toString(16).substr(2, 6);
            span.style.fontSize = this.random(12, 36) + "px"

            //添加动画
            V(span, {
                left: -span.offsetWidth
            }, {
                duration: this.random(1000, 3000),
                complete: () => {
                    span.remove()
                }
            })
        },
        random(n, m) {
            return Math.floor(Math.random() * (m - n + 1) + n)
        },
        bindEvent() {
            this.btn.onclick = () => {
                this.create(this.input.value)
            }
            this.container.onmouseover = e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "pause")
                }
            }

            this.container.onmouseout = e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(tar, "resume")
                }
            }

            this.container.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    tar.firstElementChild.innerHTML++
                }
            }
        }
    }


    return M
})