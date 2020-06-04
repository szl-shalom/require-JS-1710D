define(["../lib/velocity.min"], function (V) {
    function Tab(opt) {
        Object.assign(this, {
            index: 0,
            type: "click",
        }, opt)

        this.init();
    }

    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            //渲染标题    //设置高亮
            this.oTitle.innerHTML = this.data.map((item, index) => {
                return `<span index=${index} class=${this.index === index ? "active" : ""}>${item.title}</span>`
            }).join("")
            //渲染对用的内容
            this.oContent.innerHTML = this.data[this.index].content
            //移动下划线
            this.oUnderLine.style.top = this.oTitle.children[this.index].offsetTop + "px"
        },
        bindEvent: function () {
            this.oTitle.addEventListener(this.type, e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    var index = +tar.getAttribute("index");
                    //滚动动画
                    V(this.oUnderLine, {
                        top: tar.offsetTop
                    })
                    //切换内容
                    this.oContent.innerHTML = this.data[index].content
                    //切换高亮
                    this.oTitle.children[this.index].classList.remove("active")
                    this.index = index;
                    this.oTitle.children[this.index].classList.add("active")
                }
            })
        }
    }

    return Tab
})