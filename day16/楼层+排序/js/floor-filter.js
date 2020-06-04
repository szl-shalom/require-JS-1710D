/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-22 13:42:25
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-22 15:19:03
 */
define(["../lib/velocity.min"], function (V) {
    function F(opt) {
        Object.assign(this, opt)
        this.init()
    }
    F.prototype = {
        constructor: F,
        init() {
            this.render(this.data)
            this.bindEvent()
        },
        render(data) {
            this.content.innerHTML = data.map(item => {
                return `
                <dl>
                    <dd>
                        <img src="./素材/${item.img}" alt="">
                    </dd>
                        <dt>
                            <p>
                                <span class="price">￥${item.price}</span>
                                <span class="prevPrice">￥${item.cost}</span>
                            </p>
                            <p>
                            ${item.title}
                            <span class="hasTime">${item.sales}</span>
                            </p>
                        </dt>
                </dl>
                `
            }).join("")
        },
        bindEvent() {
            this.nav.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "BUTTON") {
                    //tab切换

                    //排他  先把所有的buton按钮全部去掉类名 active
                    this.nav.querySelectorAll("button").forEach(item => {
                        item.classList.remove("active")
                    })

                    //给点击的添加类名
                    tar.classList.add("active")

                    //数据排序
                    var data = []
                    if (tar.innerHTML === "价钱") {
                        data = this.data.slice().sort(function (a, b) {
                            return a.price - b.price
                        })
                    } else if (tar.innerHTML === "销量") {
                        data = this.data.slice().sort(function (a, b) {
                            return b.sales - a.sales
                        })
                    } else {
                        data = this.data
                    }
                    // 数据筛选
                    if (this.nav.querySelector("input").checked) {
                        data = data.filter(function (item) {
                            return item.isHas
                        })
                    }
                    //渲染
                    this.render(data)
                }

                if (tar.nodeName === "INPUT") {
                    //执行当前高亮的元素点击事件
                    this.nav.querySelector(".active").click()
                }



            }
            var navTop = this.nav.offsetTop //写到外面
            //滚动事件
            document.onscroll = () => {
                // 获取滚动条盾冬的距离
                var scrollTop = document.documentElement.scrollTop
                console.log(scrollTop, document.body.scrollTop, window.scrollTop)
                //滚动条超过吸顶盒子的上边距
                if (scrollTop >= navTop) {
                    this.nav.classList.add("fixed")
                    this.content.style.marginTop = this.nav.offsetHeight + "px"
                } else {
                    this.nav.classList.remove("fixed")
                    this.content.style.marginTop = 0
                }
            }
            //点击回到顶部
            this.navRight.querySelector(".qwe").onclick = function () {
                V(document.body, "scroll");
            }

            //鼠标滑过
            var el;
            this.navRight.onmouseover = e => {
                var tar = e.target;
                if (tar.classList.contains("icon")) {
                    var div = document.createElement("div")
                    el = div;
                    div.classList.add("mask")
                    document.body.appendChild(div)
                    var o = tar.getBoundingClientRect();
                    div.style.left = o.left - div.offsetWidth - 50 + "px"
                    div.style.top = o.top + o.height / 2 - div.offsetHeight / 2 + "px"
                    V(div, {
                        left: o.left - div.offsetWidth
                    })
                }

            }
            this.navRight.onmouseout = e => {
                var tar = e.target;
                if (tar.classList.contains("icon")) {
                    el.remove()
                }

            }
        }
    }


    return F
})