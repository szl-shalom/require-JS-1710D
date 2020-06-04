define(function () {
    function T(opt) {
        Object.assign(this, opt)
        this.init()
    }

    T.prototype = {
        constructor: T,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            // 方法一:事件委托
            // this.title.onclick = (e) => {
            //     var tar = e.target;
            //     if (tar.nodeName === "SPAN") {
            //         //切换标题
            //         this.title.querySelector(".active") && this.title.querySelector(".active").classList.remove("active")
            //         tar.classList.add("active")
            //         //切换内容
            //         this.content.querySelector(".active") && this.content.querySelector(".active").classList.remove("active")
            //         this.content.children[+tar.getAttribute("index")].classList.add("active")
            //     }
            // }
            // 方法二：循环遍历添加事件
            [...this.title.children].forEach((item, index) => {
                item.onclick = () => {
                    //切换标题
                    this.title.querySelector(".active") && this.title.querySelector(".active").classList.remove("active")
                    item.classList.add("active")
                    //切换内容
                    this.content.querySelector(".active") && this.content.querySelector(".active").classList.remove("active")
                    this.content.children[index].classList.add("active")
                }
            })
        }
    }

    // class T {
    //     constructor() {
    //         Object.assign(this, opt)
    //         this.init()
    //     }
    //     init() {

    //     }
    // }







    return T
})