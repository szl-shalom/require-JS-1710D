define(function () {
    var Dialog = function (opt) {
        Object.assign(this, opt)

        this.init()
    }


    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.create()
        },
        create: function () {
            var div = document.createElement("div");
            div.classList.add("mask");
            div.style = `   width:300px;
                        height: 200px;
                        position: absolute;
                        top:50%;
                        left: 50%;
                        margin-left: -150px;
                        margin-top: -100px;
                        background: #ccc;`
            div.innerHTML = `<h2 style="text-align: center;margin-top: 30px;">${this.title}</h2>
            <div style=" text-align: center;">
                <button style="margin-right: 30px;padding: 6px 12px;margin-top: 20px;">${this.qdValue}</button>
                <button style="margin-right: 30px;padding: 6px 12px;margin-top: 20px;">${this.cancelValue}</button>
            </div>`
            document.body.appendChild(div)
            this.bindEvent(div)

        },
        bindEvent: function (div) {

            div.addEventListener("click", (e) => {
                e = e || window.event;
                var tar = e.target || e.srcElement;
                if (tar.innerHTML === this.qdValue) {
                    div.remove()

                    this.qdClickEvent()
                }

                if (tar.innerHTML === this.cancelValue) {
                    this.cancelClickEvent()
                }

            })
        }

    }

    return Dialog
})