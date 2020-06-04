define(function () {
    function C(opt) {
        Object.assign(this, opt)
        this.init()
    }

    C.prototype = {
        constructor: C,
        init() {
            //是否存在该商品
            var index; //下标
            var flag = [...this.tbody.children].some((item, ind) => {
                if (item.firstElementChild.innerHTML === this.el.alt) {
                    index = ind
                }
                return item.firstElementChild.innerHTML === this.el.alt
            })
            if (flag) {
                this.add(index)
            } else {
                this.create()
            }
        },
        create() {
            var tr = document.createElement("tr")
            tr.innerHTML = `
                <td>${this.el.alt}</td>
                <td>${this.el.getAttribute("price")}</td>
                <td>1</td>
            `
            this.tbody.appendChild(tr)
        },
        add(index) {
            this.tbody.children[index].lastElementChild.innerHTML++
        }
    }

    return C
})

