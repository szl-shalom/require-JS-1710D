define(function () {
    function Banner(opt) {
        Object.assign(this, { index: 0 }, opt)

        this.init()
    }


    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.renderImg();
            this.page && this.renderPage();
            this.autoPlay(0)
            this.bindEvent()
        },
        renderImg: function () {
            this.img.src = "./img/" + this.data[this.index];
        },
        renderPage: function () {
            this.page.innerHTML = this.data.map((item, index) => {
                return `<li ind=${index} class=${this.index === index ? "active" : ""}></li>`
            }).join("")
        },
        autoPlay: function () {
            this.timer = setInterval(() => {

                this.change(this.index + 1)
            }, 1000)
        },
        bindEvent: function () {
            this.wrap.onmouseenter = () => {
                clearInterval(this.timer)
            }
            this.wrap.onmouseleave = () => {
                this.autoPlay(0)
            }
            if (this.page) {
                this.page.onclick = e => {
                    var tar = e.target;
                    if (tar.nodeName === "LI") {
                        this.change(+tar.getAttribute("ind"))

                    }
                }
            }

        },
        change: function (i) {
            this.page && this.page.children[this.index].classList.remove("active")
            this.index = i
            if (this.index === this.data.length) {
                this.index = 0
            }

            this.renderImg()
            this.page && this.page.children[this.index].classList.add("active")
        }

    }


    return Banner
})