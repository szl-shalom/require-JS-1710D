define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {

            this.renderLeft(this.leftUl, this.data)

            this.bindEvent()
        },
        renderLeft(el, data) {
            el.innerHTML = data.map((item, index) => {
                return `<li index=${index}>${item.name}</li>`
            }).join("")
        },
        bindEvent() {
            this.leftUl.onmouseover = e => {
                var tar = e.target;
                if (tar.nodeName === "LI") {
                    // 切换标题高亮
                    this.leftUl.querySelector(".active") && this.leftUl.querySelector(".active").classList.remove("active")
                    tar.classList.add("active")
                    //渲染内容
                    var data = this.data[+tar.getAttribute("index")].list
                    console.log(data)
                    this.renderRight(data)
                    //显示右盒子
                    this.rightUl.parentNode.classList.add("active")
                }
            }
            this.left.onmouseleave = () => {
                this.rightUl.parentNode.classList.remove("active")
                this.leftUl.querySelector(".active") && this.leftUl.querySelector(".active").classList.remove("active")
            }
        },
        renderRight(data) {
            this.rightUl.innerHTML = data.map(item => {
                return `
                <li>
                    <span>${item.name}</span>
                    ${item.list.map(item => {
                    return `
                         <span>${item.name}</span>
                        `
                }).join("")}
                </li>
                `
            }).join("")
        }
    }
    return S
})