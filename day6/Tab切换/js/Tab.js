define(["velocity.min"], function (V) {
    var Tab = function (opt) {
        //合拼参数
        Object.assign(this, {
            index: 0,//默认下标
            type: "click",//默认事件类型
        }, opt)
        //初始化调用
        this.init();
    }


    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.render()
            this.bindEvent()
        },
        render: function () {
            // 渲染标题
            this.oTitle.innerHTML = this.data.map((item, index) => {
                return `<span index=${index}>${item.title}</span>`
            }).join("")
            //渲染内容 根据this.index进行获取数据
            this.oContent.innerHTML = this.data[this.index].content
            //控制下划线
            this.oUnderLine.style.left = this.oTitle.children[this.index].offsetLeft + "px"
            this.oUnderLine.style.width = this.oTitle.children[this.index].offsetWidth + "px"

        },
        bindEvent: function () {
            this.oTitle.addEventListener(this.type, e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    V(this.oUnderLine, {
                        left: tar.offsetLeft,
                        width: tar.offsetWidth,
                    }, {
                        // 动画执行完毕  执行
                        complete: () => {
                            //切换内容
                            this.oContent.innerHTML = this.data[+tar.getAttribute("index")].content
                        }
                    })
                }
            })
        }
    }




    return Tab
})