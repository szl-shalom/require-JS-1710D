/*
 * @Description: This is a JS program ! 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 10:58:13
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 11:56:29
 */
define(["./velocity.min", "tab", "dom"], function (V, T, D) {
    function Banner(opt) {
        Object.assign(this, opt)
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            //渲染slide
            this.oContainer.innerHTML = this.data.map((item, index) => {
                return `
                <div class="slide">
                    <img ind=${index} src="./${item.img}" alt="" class=${index === this.index ? "active" : ""}>
                </div>
                `
            }).join("")
            //设置container宽度
            this.oContainer.style.width = this.data.length * 200 + "px";
            new T({
                tar: D.get(".active", this.oContainer),
                data: this.data[this.index],
                table: D.get("table"),
                movieName: D.get(".movieName"),
                oBanner: this.oBanner
            })
        },
        bindEvent() {
            this.oNext.onclick = () => {
                this.index >= this.data.length - 5 ? this.index = this.data.length - 5 : this.index++
                V(this.oContainer, {
                    marginLeft: -this.index * 200
                })
            }
            this.oPrev.onclick = () => {
                this.index <= 0 ? this.index = 0 : this.index--
                V(this.oContainer, {
                    marginLeft: -this.index * 200
                })
            }
            this.oBanner.onmouseenter = () => {
                // V(this.oPrev, {
                //     left: 0
                // })
                // V(this.oNext, {
                //     right: 0
                // })
                this.oPrev.classList.add("active")
                this.oNext.classList.add("active")
            }
            this.oBanner.onmouseleave = () => {
                // V(this.oPrev, {
                //     left: -80
                // })
                // V(this.oNext, {
                //     right: -80
                // })
                this.oPrev.classList.remove("active")
                this.oNext.classList.remove("active")
            }
            this.oContainer.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    var index = +tar.getAttribute("ind");
                    new T({
                        tar,
                        data: this.data[index],
                        table: D.get("table"),
                        movieName: D.get(".movieName"),
                        oBanner: this.oBanner
                    })
                }
            }
        }
    }

    return Banner;
})