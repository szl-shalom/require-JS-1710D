define(["dom"], function ($) {

    function Alert(opt) {
        Object.assign(this, opt)

        this.init()
    }
    Alert.prototype = {
        constructor: Alert,
        init: function () {
            this.createMask()
            this.createContent()
            this.bindEvent()
        },
        createMask: function () {
            this.mask = document.createElement("div")
            this.mask.style = `position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);`
            document.body.appendChild(this.mask)
        },
        createContent: function () {
            this.div = document.createElement("div");
            this.div.style = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;"
            this.div.innerHTML = `
                <div class="title">${this.title}</div>
                <div class="message">${this.message}</div>
                <button>确定</button>
            `
            document.body.appendChild(this.div)
        },
        bindEvent: function () {
            var btn = $.get("button", this.div)
            btn.onclick = () => {
                this.div.remove()
                this.mask.remove()
            }
        }
    }
    return Alert

})