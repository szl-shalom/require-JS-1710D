
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
            console.log(this.data)
            //输入事件
            this.input.oninput = () => {
                if (this.input.value.trim() === "") {
                    this.ul.classList.remove("active")
                    return 
                }
                this.ul.classList.add("active")
                var data = this.data.filter(item => {
                    return item.includes(this.input.value)
                })
                this.render(data)
            }
        },
        render(data) {
            this.ul.innerHTML = data.map(item => {
                return `<li>${item}</li>`
            }).join("")
        }
    }
    return F
})