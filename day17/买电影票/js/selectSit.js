/*
 * @Description: This is a JS program !opt
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 14:40:48
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 15:33:59
 */
define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }


    S.prototype = {
        constructor: S,
        init() {
            this.render();
            this.bindEvent();
        },
        render() {
            //设置电影名称
            this.movieName.innerHTML = this.data.name
            //设置单价
            this.price.innerHTML = this.data.prece
            //渲染座位
            var str = ""
            for (var i = 1; i <= 10; i++) {
                str += "<ul>"
                for (var j = 1; j <= 10; j++) {
                    str += `<li x=${i} y=${j}></li>`
                }
                str += "</ul>"
            }
            this.left.innerHTML = str;
        },
        bindEvent() {
            this.left.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    if (this.left.querySelectorAll(".active").length >= 5 && !tar.classList.contains("active")) {
                        alert("最多五张")
                        return
                    }
                    if (!tar.classList.contains("active")) {
                        this.create(tar.getAttribute("x"), tar.getAttribute("y"))
                    } else {
                        var x = tar.getAttribute("x"), y = tar.getAttribute("y");
                        [...this.sit.children].forEach(function (item) {
                            if (item.getAttribute("x") === x && item.getAttribute("y") === y) {
                                item.remove()
                            }
                        })
                    }
                    tar.classList.toggle("active")
                    this.count.innerHTML = "票数:" + this.left.querySelectorAll(".active").length
                    this.allPrice.innerHTML = "总价钱：" + this.left.querySelectorAll(".active").length * this.data.prece
                }
            }
        },
        create(x, y) {
            var span = document.createElement("span")
            span.innerHTML = `${x}排${y}座`
            span.setAttribute("x", x)
            span.setAttribute("y", y)
            this.sit.appendChild(span)
        }
    }
    return S
})