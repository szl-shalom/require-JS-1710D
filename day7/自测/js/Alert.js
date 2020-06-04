define(["./velocity.min"], function (V) {

    var Alert = function (opt) {
        Object.assign(this, {

        }, opt)

        this.init()
    }


    Alert.prototype = {
        constructor: Alert,
        init: function () {
            this.createMask()
            this.createDialog()
            this.bindEvent();
        },
        createMask: function () {
            this.mask = document.createElement("div");
            this.mask.style = "position: absolute;top: 0;left: 0;bottom: 0;right: 0;background-color: rgba(0, 0, 0, 0.5);"
            document.body.appendChild(this.mask)
            V(this.mask, "fadeIn")
        },
        createDialog: function () {
            this.Dialog = document.createElement("div");
            this.Dialog.style = "width:300px;height: 100px;background-color: #fff;position: absolute;top: 50%;left: 50%;margin-left: -150px;margin-top:-50px;overflow: hidden;"
            this.Dialog.innerHTML = `
                <h3>${this.title}</h3>
                <div>
                    <button class="check" style="margin-left:100px;">${this.okValue}</button>
                    <button class="cancel">${this.cancelValue}</button>
                </div>
            `
            document.body.appendChild(this.Dialog)
        },
        remove: function () {
            V(this.mask, "fadeOut", {
                complete: () => {
                    this.mask.remove()
                    this.Dialog.remove()
                }
            })
        },
        bindEvent: function () {
            this.Dialog.querySelector(".cancel").addEventListener("click", () => {
                this.remove()
            })
            this.Dialog.querySelector(".check").addEventListener("click", () => {
                this.okClickEvent && this.okClickEvent()
                this.remove()
            })
            this.mask.addEventListener("click", () => {
                this.remove()
            })
        }
    }




    return Alert
})