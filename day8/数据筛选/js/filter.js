define(["dom"], function ($) {
    function Filter(opt) {
        //合拼参数
        Object.assign(this, opt)
        //获取必要的节点
        this.search = $.get("input", this.nav)
        this.spans = $.gets("span", this.nav)

        //初始化
        this.init()
    }

    Filter.prototype = {
        constructor: Filter,
        init: function () {
            //渲染数据（所有数据）
            this.render(this.data)
            //绑定事件
            this.bindEvent()
        },
        render: function (data) {
            this.ul.innerHTML = data.map(function (item) {
                return `
                <li>
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                </li> 
                `
            }).join("")

        },
        bindEvent: function () {
            var that = this;
            this.nav.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    //获取自定义属性
                    var myName = tar.getAttribute("name")
                    // 筛选数据
                    var data = that.data.filter(function (item) {
                        return item.sex.includes(myName)
                    })
                    //数据渲染
                    that.render(data)
                    // 切换高亮
                    $.get(".active") && $.get(".active").classList.remove("active")
                    tar.classList.add("active")

                }
            })
            this.search.addEventListener("input", function () {
                var val = this.value
                var data = that.data.filter(function (item) {
                    return item.name.includes(val) || item.desc.includes(val)||item.pinyin.includes(val)
                    
                })
                that.render(data)
            })
        }
    }


    return Filter
})