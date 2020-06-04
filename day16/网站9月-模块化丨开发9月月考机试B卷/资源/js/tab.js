/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-22 15:38:05
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 15:56:09
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
            this.left.addEventListener(this.type, e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    //左侧Tab切换
                    [...this.left.children].forEach((item) => {
                        item.classList.remove(this.className)
                    })
                    tar.classList.add(this.className);

                    //右侧
                    [...this.header.children].forEach((item) => {
                        item.classList.remove(this.className)
                    })
                    //判断是否是打开的窗口
                    var arr = [...this.header.children].filter(item => {
                        return item.firstChild.nodeValue === tar.innerHTML
                    })

                    if (arr.length) {
                        //已经打开的窗口
                        arr[0].classList.add(this.className)
                    } else {
                        // 不存在的窗口
                        this.create(tar.innerHTML)
                    }

                }
            })
            this.header.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "I") {
                    this.del(tar)
                }
            })
        },
        create(content) {
            var span = document.createElement("span")
            span.innerHTML = content + "<i>X</i>";
            span.classList.add(this.className)
            this.header.appendChild(span)
        },
        del(el) {
            el.parentNode.remove()
        }
    }
    return T
})