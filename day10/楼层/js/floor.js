/*
 * @Description: This is a JS program !

 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-14 16:37:45
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-16 15:53:02
 */
define(["../lib/velocity.min"], function (V) {
    function Floor(opt) {
        Object.assign(this, opt);
        this.init()
    }

    Floor.prototype = {
        constructor: Floor,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            //获取每一个车系的首字母
            var arr = this.data.data.map(function (item) {
                return item.Spelling[0]
            })
            //去重
            var res = [...new Set(arr)]
            //渲染ABCDE
            this.oWord.innerHTML = res.map(function (item, index) {
                return `<li ind=${index}>${item}</li>`
            }).join("")
            //渲染内容
            this.oContent.innerHTML = res.map((item, index) => {
                return ` <li>
                            <h1>${item}</h1>
                            ${this.data.data.map((item1) => {
                    return item1.Spelling[0] === item ? `<p>${item1.Name}</p>` : ""
                }).join("")}
                        </li>`
            }).join("")
        },
        bindEvent: function () {
            this.h1s = document.querySelectorAll("h1")

            this.oWord.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    var index = +tar.getAttribute("ind")
                    V(this.h1s[index], "scroll")
                }
            }

            var h1s = [...document.querySelectorAll("h1")]
            console.log(h1s)
            var h1sTop = h1s.map(function (item) {
                return item.offsetTop
            })
            console.log(h1sTop)
            document.onscroll = () => {
                var scrollTop = document.documentElement.scrollTop
                h1sTop.forEach((item, index) => {
                    if (scrollTop >= item) {

                        this.oWord.querySelector(".active") && this.oWord.querySelector(".active").classList.remove("active")
                        this.oWord.children[index].classList.add("active")
                    }
                })
            }
        }

    }


    return Floor;
})