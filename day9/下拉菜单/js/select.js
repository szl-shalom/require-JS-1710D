define(function () {

    function Select(opt) {
        Object.assign(this, opt)
        this.init()
    }


    Select.prototype = {
        constructor: Select,
        init: function () {
            this.render();
            this.bindEvent()
        },
        render: function () {
            this.oUl.innerHTML = this.data.map(item => {
                return `
                    <li>
                        <input type="checkbox">
                        <span>${item}</span>
                    </li>
                `
            }).join("")
        },
        bindEvent: function () {
            this.oInput.addEventListener("click", () => {
                this.oUl.classList.add("active")
            })

            this.oUl.addEventListener("click", (e) => {
                var tar = e.target;
                if (tar.nodeName === "INPUT") {
                    [...this.oUl.querySelectorAll("input:checked")].forEach(function (item) {
                        item.checked = false
                    })
                    tar.checked = true
                    this.oInput.value =tar.nextElementSibling.innerHTML
                }
            })
        }
    }

    return Select
})