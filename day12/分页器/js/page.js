/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-16 18:47:20
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 13:42:58
 */
define(['../lib/velocity.min'], function (V) {
    function Page(opt) {
        Object.assign(this, {
            index: 23,
            pageSize: 6,
            pageGroups: 7
        }, opt)

        this.init()
    }


    Page.prototype = {
        constructor: Page,
        init: function () {
            console.log(this.data)
            //先获取相应的数据
            // var data = this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize)
            //渲染
            this.renderList(this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize))
            //渲染页码
            this.renderPage()
            //绑定事件
            this.bindEvent()
        },
        renderList: function (data) {
            this.oList.innerHTML = data.map(item => {
                return `
                <dl>
                    <dt>
                        <img src="./img/${item.url}" alt="">
                    </dt>
                    <dd>
                        <h2>${item.desc}</h2>
                        <p>${item.auther}</p>
                        <p>${item.publish}</p>
                    </dd>
                </dl>
                `
            }).join("");

            [...this.oList.children].forEach(function (item) {
                V(item, {
                    left: [0, 20]
                }, 1000, [500, 5])
            })
        },
        renderPage: function () {
            this.pageLength = Math.ceil(this.data.length / this.pageSize)
            var str = ""
            if (this.index <= this.pageGroups / 2) {
                for (var i = 1; i <= this.pageGroups; i++) {
                    str += `<li class=${i === this.index ? "active" : ""}>${i}</li>`
                }
            } else if (this.index >= this.pageLength - (this.pageGroups - 1) / 2 + 1) {
                for (var i = this.pageLength - this.pageGroups + 1; i <= this.pageLength; i++) {
                    str += `<li class=${i === this.index ? "active" : ""}>${i}</li>`
                }
            } else {
                var str = `
                    <li>${this.index - 2}</li>
                    <li>${this.index - 1}</li>
                    <li class="active">${this.index}</li>
                    <li>${this.index + 1}</li>
                    <li>${this.index + 2}</li>
                `
            }

            this.oPageUl.innerHTML = str

            //禁用
            this.index === 1 ? this.prev.classList.add("disable") : this.prev.classList.remove("disable")
            this.index === 1 ? this.first.classList.add("disable") : this.first.classList.remove("disable")
            this.index === this.pageLength ? this.next.classList.add("disable") : this.next.classList.remove("disable")
            this.index === this.pageLength ? this.end.classList.add("disable") : this.end.classList.remove("disable")

        },
        bindEvent: function () {
            this.oPage.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    this.index = +tar.innerHTML
                    //渲染
                    this.renderList(this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize))
                    //渲染页码
                    this.renderPage()
                } else if (!tar.classList.contains("disable")) {
                    switch (tar.className) {
                        case "prev":
                            this.index--
                            break;
                        case "next":
                            this.index++
                            break;
                        case "first":
                            this.index = 1
                            break;
                        case "end":
                            this.index = this.pageLength
                            break;
                    }
                    this.renderList(this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize))
                    //渲染页码
                    this.renderPage()
                }
            })
        }
    }
    return Page
});