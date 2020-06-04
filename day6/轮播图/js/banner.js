define(["velocity.min"], function (V) {
    var Banner = function (opt) {
        Object.assign(this, {
            index: 0,
        }, opt)
        if (!this.el) {
            console.log(new Error("el为必须传参"))
            return;
        }
        console.log(this)
        this.init();
    }
    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.renderPage();
            this.renderImg();
            this.autoPlay();
            this.bindEvent();
        },
        renderImg: function () {
            this.img.src = "./img/" + this.data[this.index];
            this.page.firstElementChild.children[this.index].classList.add("active");
            V(this.img, "fadeIn")
        },
        renderPage: function () {
            this.page.firstElementChild.innerHTML = this.data.map((item, index) => {
                return `<li index=${index}></li>`
            }).join("")
        },
        autoPlay: function () {
            this.timer = setInterval(() => {
                this.change(this.index >= this.data.length - 1 ? 0 : this.index + 1)
            }, 2000)
        },
        change: function (ind) {
            this.page.firstElementChild.children[this.index].classList.remove("active");
            this.index = ind
            this.renderImg()
        },
        bindEvent: function () {
            this.el.addEventListener("mouseenter", () => {
                clearInterval(this.timer)
            })
            this.el.addEventListener("mouseleave", () => {
                this.autoPlay()
            })
            this.el.addEventListener("click", (e) => {
                e = e || window.event;
                var tar = e.target || e.srcElement;
                if (tar.classList.contains("prev")) {
                    this.change(this.index === 0 ? this.data.length - 1 : this.index - 1)
                }
                if (tar.classList.contains("next")) {
                    this.change(this.index >= this.data.length - 1 ? 0 : this.index + 1)
                }
                if (tar.nodeName === "LI") {
                    this.change(+tar.getAttribute("index"))
                }
            })
        }
    }
    return Banner
})