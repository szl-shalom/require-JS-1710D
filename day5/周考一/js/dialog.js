define(function () {
    function Dialog(opt) {
        Object.assign(this, opt)


        this.init()


    }


    Dialog.prototype = {
        constructor: Dialog,
        init: function () {
            this.div = document.createElement("div");
            this.div.style.background = this.color;
            this.div.classList.add("dialog");
            this.div.innerHTML = this.content;
            var ul = document.createElement("ul")
            this.div.appendChild(ul)
            ul.innerHTML = this.data.map(function (item) {
                return `<li>${item}</li>`
            }).join("")
            this.wrap.appendChild(this.div)
            this.bindEvent()
        },
        bindEvent: function () {
            this.div.addEventListener("click", function () {
                this.firstElementChild.classList.toggle("active")
            })
        }
    }




    return Dialog
})