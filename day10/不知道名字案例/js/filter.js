define(function () {
    function A(opt) {
        Object.assign(this, opt)
        this.init()
    }

    A.prototype = {
        constructor: A,
        init: function () {
            this.bindEvent()
        },
        bindEvent: function () {
            this.arr = [...this.ul.children]
            this.search.onclick = () => {
                this.ul.classList.add("active")
            }

            this.ul.onclick = (e) => {
                var tar = e.target;

                if (tar.nodeName === "LI") {
                    tar.innerHTML += "<span>X</span>"
                    this.content.appendChild(tar)
                    this.arr = [...this.ul.children]
                }
            }

            this.content.onclick = e => {
                var tar = e.target;

                if (tar.nodeName === "SPAN") {
                    tar.parentNode.remove(0)
                    this.arr = [...this.ul.children]
                }
            }

            this.search.oninput = () => {
               
                var res = this.arr.filter((item) => {
                    return item.innerHTML.includes(this.search.value)
                })
                this.ul.innerHTML = res.map(function(item){
                    return `<li>${item.innerHTML}</li>`
                }).join("")
            }
        }
    }


    return A
})