define(function () {
    function F(opt) {
        Object.assign(this, opt)
        this.init()
    }
    F.prototype = {
        constructor: F,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.divTops = [...this.floor.children].map(function (item) {
                return item.offsetTop
            })


            document.onscroll = e => {
                var scrollTop = document.documentElement.scrollTop;

                if (scrollTop > 1300) {
                    this.leftFloor.classList.add("active")
                } else {
                    this.leftFloor.classList.remove("active")
                }

                this.divTops.forEach((item, index) => {
                    if (scrollTop > item) {
                        this.leftFloor.querySelector(".active") && this.leftFloor.querySelector(".active").classList.remove("active")
                        this.leftFloor.children[index].classList.add("active")
                    }
                })

            }
        }

    }
    return F
})