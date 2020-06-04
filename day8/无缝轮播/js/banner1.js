define(["../lib/velocity.min"], function (V) {

    function Banner(opt) {
        if (!opt.wrap) {
            console.log(new Error("wrap没有传"))
            return;
        }
        Object.assign(this, {
            index: 5,
        }, opt)
        this.imgWidth = this.wrap.offsetWidth

        //初始化
        this.init()
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            //数据渲染  图片渲染  页码渲染  克隆第一张图片
            this.render()
            //开启轮播
            this.autoPlay()
            //开启事件
            this.bindEvent()

        },
        render: function () {
            var that = this;
            //渲染图片
            this.container.innerHTML = this.data.map(function (item, index) {
                return `<img src="./img/${item}" alt="">`
            }).join("")
            // 渲染分页器     设置分页器高亮
            this.page.innerHTML = this.data.map(function (item, index) {
                return `<li index=${index} class=${index === that.index ? "active" : ""}></li>`
            }).join("")
            //克隆第一张图片 放到最后
            this.container.appendChild(this.container.firstElementChild.cloneNode(true))
            //设置轮播容器宽度
            this.container.style.width = (this.data.length + 1) * this.imgWidth + "px"
            //设置轮播容器的位置
            this.container.style.left = - this.index * this.imgWidth + "px"
        },
        autoPlay: function () {
            var that = this;
            this.timer = setInterval(function () {
                //调用下按钮点击事件
                that.next.click()
            }, 2000)
        },
        change: function (i) {
            //  去除原来的高亮
            this.page.children[this.index === this.data.length ? 0 : this.index].classList.remove("active")
            this.index = i //将index改将要变化的下标
            this.page.children[this.index === this.data.length ? 0 : this.index].classList.add("active")
            console.log(this.index)
            V(this.container, {
                left: - this.index * this.imgWidth
            })

        },
        bindEvent: function () {
            var that = this;
            this.prev.addEventListener("click", function () {
                if (that.index === 0) {
                    that.index = that.data.length;
                    that.container.style.left = -that.index * that.imgWidth + "px"
                }
                that.change(that.index - 1)
            })


            this.next.addEventListener("click", function () {
                if (that.index === that.data.length) {
                    that.index = 0
                    that.container.style.left = 0
                }
                that.change(that.index + 1)
            })

            
            this.wrap.addEventListener("mouseenter", function () {
                clearInterval(that.timer)
            })

            this.wrap.addEventListener("mouseleave", function () {
                that.autoPlay()
            })
            this.page.addEventListener("click", function (e) {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    that.change(+tar.getAttribute("index"))
                }
            })
        }
    }
    return Banner
})