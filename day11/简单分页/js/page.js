/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-15 14:41:47
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-16 20:16:42
 */

define(function () {
    function Page(opt) {
        Object.assign(this, { index: 1 }, opt)
        this.init()
    }

    Page.prototype = {
        constructor: Page,
        init: function () {
            console.log(this.data)
            var data = this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize)
            this.renderList(data)
            this.renderPage()
            this.bindEvent()
        },
        renderList: function (data) {
            this.oList.innerHTML = data.map(function (item) {
                return `<h3>${item.Name}</h3>`
            }).join("")

        },
        renderPage: function () {
            this.pageLength = Math.ceil(this.data.length / this.pageSize)
            var str = ""
            for (var i = 1; i <= this.pageLength; i++) {
                str += `<span class=${i === this.index ? "active" : ""}>${i}</span>`
            }
            console.log(str)

            this.oPage.innerHTML = str
        },
        bindEvent: function () {
            this.oWrap.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    this.index = +tar.innerHTML
                    var data = this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize)
                    this.renderList(data)
                    this.renderPage()
                }
                if (tar.classList.contains("prev")) {
                    this.changeIndex(this.index === 1 ? 1 : this.index - 1)
                }

            };
            this.oSelect.onchange = () => {
                this.pageSize = +this.oSelect.value
                this.index = 1
                var data = this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize)
                this.renderList(data)
                this.renderPage()
            }
        },
        changeIndex: function (i) {
            this.index = i
            var data = this.data.slice((this.index - 1) * this.pageSize, this.index * this.pageSize)
            this.renderList(data)
            this.renderPage()
        }
    }


    return Page
})
