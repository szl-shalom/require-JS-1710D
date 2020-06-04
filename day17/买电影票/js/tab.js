/*
 * @Description: This is a JS program 
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-23 10:58:17
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 12:00:48
 */
define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }
    T.prototype = {
        constructor: T,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            //切换头部标题
            //排他思想
            [...this.tar.parentNode.parentNode.children].forEach(function (item) {
                item.firstElementChild.classList.remove("active")
            });
            //给点击的元素添加类名
            this.tar.classList.add("active")
            // 随机颜色
            this.oBanner.style.background = "#" + Math.random().toString(16).substr(2, 6);
            // this.oBanner.style.background = this.data.theme
            //切换电影名称
            this.movieName.innerHTML = this.data.title
            //渲染内容
            console.log(this.data.session)
            this.table.innerHTML = this.data.session.map(item => {
                return `
                <tr>
                    <td>
                        <p>${item.start_time}</p>
                        <p>${item.end_time}</p>
                    </td>
                    <td>${item.language}</td>
                    <td>${item.room}</td>
                    <td>${item.price}</td>
                    <td>100%</td>   
                    <td>
                        <button>选座</button>
                    </td>
                </tr>
                `
            }).join("")
        },
        bindEvent() {
            this.table.onclick = e => {
                var tar = e.target;
                if (tar.nodeName === "BUTTON") {
                    location.href = "选座.html?" +  `name=${this.data.title}&prece=${tar.parentNode.previousElementSibling.previousElementSibling.innerHTML}`
                }
            }
        }
    }
    return T;
})