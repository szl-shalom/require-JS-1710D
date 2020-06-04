/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 08:54:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 09:43:00
 */
define(["../lib/velocity.min"], function (V) {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }

    T.prototype = {
        constructor: T,
        init() {
            this.bindEvent();
        },
        bindEvent() {
            this.wrap.addEventListener("click", e => {
                var tar = e.target;
                //删除
                if (tar.nodeName === "IMG") {
                    tar.parentNode.remove()
                }
                //点击切换状态
                if (tar.nodeName === "BUTTON") {
                    tar.classList.toggle("active")
                    tar.previousElementSibling.classList.toggle("active")
                }

                //添加条目
                if (tar.classList.contains("add")) {
                    if (this.ul.children.length >= 10) {
                        alert("最多10个")
                        return
                    }

                    this.ul.innerHTML += `
                        <li style="top:${this.ul.children.length * 60}px">
                        <span>${this.input.value}</span>
                        <button></button>
                        <img src="./del.jpg" alt="">
                    </li>`

                    this.ul.style.height = 62 * this.ul.children.length + "px"
                }
                //点击小红球
                if (tar.classList.contains("switch")) {
                    // 获取被选中li
                    var arr1 = [...this.ul.querySelectorAll("span.active")].map(function (item) { return item.parentNode })
                    //获取非选中
                    var arr2 = [...this.ul.querySelectorAll("span")].filter(function (item) { return item.className !== "active" }).map(function (item) { return item.parentNode })

                    var arr = !tar.classList.contains("active") ? arr2.concat(arr1) : arr1.concat(arr2)

                    arr.forEach(function (item, index) {
                        // item.style.top = index * 60 + "px"
                        V(item, {
                            top: index * 60
                        })
                    })
                    tar.classList.toggle("active")
                }
            })
        }
    }


    return T
})