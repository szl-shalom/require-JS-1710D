define(["../lib/velocity.min"], function (V) {
    function B(opt) {
        Object.assign(this, opt)
        this.init()
    }


    B.prototype = {
        constructor: B,
        init() {
            // this.render()
            this.bindEvent()
            this.autoPlay()
        },
        bindEvent() {
            this.banner.onmouseenter = () => {
                clearInterval(this.timer)
            }

            this.banner.onmouseleave = () => {
                this.autoPlay()
            };

            [...this.page.children].forEach((item, index) => {
                item.onclick = () => {
                    this.change(index)
                }
            })
        },
        autoPlay() {
            this.timer = setInterval(() => {
                if (this.index >= 6) {
                    this.index = 0
                    this.container.style.marginLeft = 0
                }
                this.change(this.index + 1)

            }, 2000)
        },
        change(i) {
            this.page.children[this.index === 6 ? 0 : this.index].classList.remove("active")

            this.index = i
            V(this.container, {
                marginLeft: -this.index * 900
            })
            this.page.children[this.index === 6 ? 0 : this.index].classList.add("active")
        }
    }
    return B
})