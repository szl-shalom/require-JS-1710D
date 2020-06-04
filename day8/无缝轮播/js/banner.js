define(["../lib/velocity.min"], function (V) {
    function Banner(opt) {
        Object.assign(this, {
            index: 0
        }, opt)
        this.init()
    }


    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.render()
            this.autoPlay()
            this.bindEvent()
        },
        render: function () {
            this.container.innerHTML = this.data.map(item => {
                return `<img src="./img/${item}" alt="">`
            }).join("")
            this.container.appendChild(this.container.firstElementChild.cloneNode(true))
            this.container.style.width = this.container.children.length * this.container.offsetWidth + "px"
            this.container.style.left = -this.index * this.wrap.offsetWidth + "px"
            this.page.innerHTML = this.data.map((item, index) => {
                return `<li class=${index === this.index ? "active" : ""}></li>`
            }).join("")
        },
        autoPlay: function () {
            this.timer = setInterval(() => {
                this.next.click()
            }, 2000)
        },
        change: function (i) {
            console.log("前" + this.index)
            this.page.children[this.index === this.data.length ? 0 : this.index].classList.remove("active")
            this.index = i
            console.log("后" + this.index)

            V(this.container, {
                left: -i * 600 + "px"
            })
            this.page.children[this.index === this.data.length ? 0 : this.index].classList.add("active")

        },
        bindEvent: function () {
            this.next.addEventListener("click", () => {
                if (this.index === this.data.length) {
                    this.index = 0
                    this.container.style.left = 0
                }
                this.change(this.index + 1)
            });
            this.wrap.addEventListener("mouseenter", () => {
                clearInterval(this.timer)
            })
            this.wrap.addEventListener("mouseleave", () => {
                this.autoPlay()
            })
            this.prev.addEventListener("click", () => {
                if (this.index === 0) {
                    this.index = this.data.length
                    this.container.style.left = -(this.data.length) * 600 + "px"
                }
                this.change(this.index - 1)
            })
        }
    }


    return Banner
})