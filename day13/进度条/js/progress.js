/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 16:34:57
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-18 12:00:54
 */
define(["../velocity.min"], (V) => {
    function M(opt) {
        Object.assign(this, opt)
        this.init()

    }


    M.prototype = {
        constructor: M,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            this.wrap.innerHTML = this.data.map(item => {
                return `
                <div class="progress">
                    <div class="slide">${item.content}</div>
                    <div class="box">
                        <span>0</span>
                    </div>
                </div>
                `
            }).join("");

            [...this.wrap.children].forEach((item, index) => {
                V(item.lastElementChild, {
                    left: this.data[index].progress
                }, {
                    duration: 2000,
                    progress: (el, pro) => {
                        // item.querySelector("span").innerHTML = parseInt(pro * this.data[index].progress)
                        item.querySelector("span").innerHTML = parseInt(this.data[index].progress / 800 * pro * 100) + "%"
                    }
                })
                V(item.firstElementChild, {
                    width: this.data[index].progress + item.lastElementChild.offsetWidth / 2
                }, 2000)
            })

        },
        bindEvent() {
            var flag = false, el, pos = null;
            this.wrap.onmousedown = (e) => {
                var tar = e.target;
                if (tar.className === "box") {
                    flag = true;
                    el = tar;
                    pos = {
                        x: e.offsetX
                    }
                }
            }

            document.onmousemove = (e) => {
                if (flag) {
                    var x = e.pageX - pos.x - el.parentNode.offsetLeft
                    if (x <= 0) x = 0;
                    if (x > el.parentNode.offsetWidth - el.offsetWidth) x = el.parentNode.offsetWidth - el.offsetWidth

                    el.style.left = x + "px"
                    el.previousElementSibling.style.width = x + el.offsetWidth / 2 + "px"
                    el.firstElementChild.innerHTML = parseInt(x / 800 * 100) + "%";


                }
            }

            document.onmouseup = () => {
                flag = false
            }
        }
    }


    return M
})