define(["dom", "car"], function ($, Car) {
    function D(opt) {
        Object.assign(this, opt)
        this.init()
    }

    D.prototype = {
        constructor: D,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            var el, pos = null, flag = false, cloneEl;
            this.left.addEventListener("mousedown", e => {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    //打开开关变量
                    flag = true
                    //记录事件源
                    el = tar
                    //记录鼠标距离事件源的左边距和上边距
                    pos = {
                        x: e.offsetX,
                        y: e.offsetY,
                    }
                    //克隆事件源
                    cloneEl = tar.cloneNode(true)
                    //设置位置
                    cloneEl.style.left = tar.offsetLeft + "px"
                    cloneEl.style.top = tar.offsetTop + "px"
                    //开定位
                    cloneEl.style.position = "absolute";
                    //加入页面
                    document.body.appendChild(cloneEl)
                    //阻止默认事件
                    e.preventDefault()

                }
            })

            document.addEventListener("mousemove", e => {
                if (flag) {
                    //拖拽

                    cloneEl.style.left = e.pageX - pos.x + "px"
                    cloneEl.style.top = e.pageY - pos.y + "px"
                }
            })

            document.addEventListener("mouseup", e => {
                if (flag) {
                    //关闭开关变量
                    flag = false;
                    //判断
                    if (e.pageX > this.right.offsetLeft) {
                        new Car({
                            el,
                            tbody: $.get("tbody"),
                            price: $.get(".price"),
                            count: $.get(".count"),
                            
                        })
                    }


                    //删除克隆元素
                    cloneEl.remove()
                }

            })
        }
    }

    return D
})