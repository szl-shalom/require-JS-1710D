define(["velocity.min"], function (V) {
    function Banner(opt) {
        // 检测必须要传的参数
        if (!opt.wrap) {
            console.log(new Error("wrap是必须的参数"))
            return;
        }

        if (!opt.data) {
            console.log(new Error("data"))
            return;
        }

        // 设置默认参数以及合拼参数
        Object.assign(this, {
            index: 0
        }, opt)

        this.init();
    }

    Banner.prototype = {
        constructor: Banner,
        init: function () {
            this.renderImg();
            this.renderPage();
            this.startBanner();
            this.bindEvent();
        },
        renderImg: function () {
            this.img.src = "./img/" + this.data[this.index];
            V(this.img, "fadeIn")
        },
        renderPage: function () {
            this.page.firstElementChild.innerHTML = this.data.map((item, index) => {
                return `<li  index=${index}  class=${index === this.index ? "active" : ""}></li > `
            }).join("")
        },
        startBanner: function () {
            this.timer = setInterval(() => {
                this.change(this.index === this.data.length - 1 ? 0 : this.index + 1)
            }, 2000);
        },
        change: function (i) {
            this.page.firstElementChild.children[this.index].classList.remove("active");
            this.index = i;
            this.page.firstElementChild.children[this.index].classList.add("active");
            this.renderImg();
        },
        bindEvent: function () {
            this.wrap.addEventListener("mouseenter", () => {
                clearInterval(this.timer)
            })
            this.wrap.addEventListener("mouseleave", () => {
                this.startBanner()
            })

            this.wrap.addEventListener("click", e => {
                e = e || window.event;
                var tar = e.target || e.srcElement;

                if (tar.classList.contains("next")) {
                    this.change(this.index === this.data.length - 1 ? 0 : this.index + 1)
                }

                if (tar.classList.contains("prev")) {
                    this.change(this.index === 0 ? this.data.length - 1 : this.index - 1)
                }

                if (tar.nodeName === "LI") {
                    this.change(+tar.getAttribute("index"))
                }
            })
        }
    }


    return Banner
})