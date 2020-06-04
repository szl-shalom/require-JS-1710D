define(() => {
    function S(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {
            this.render(this.province, this.data, "种类")
            this.bindEvent()
        },
        render(el, data, type) {
            el.innerHTML = `<option>请选择${type}</option>` + data.map(item => {
                return `
                    <option>${item.name}</option>
                `
            }).join("")
        },
        bindEvent() {
            this.province.onchange = () => {
                this.render(this.city, this.data[this.province.selectedIndex - 1 === -1 ? 0 : this.province.selectedIndex].children, "地区")
                this.area.innerHTML = `<option>请选择吃的</option>`
            }

            this.city.onchange = () => {
                this.render(this.area, this.data[this.province.selectedIndex - 1 === -1 ? 0 : this.province.selectedIndex].children[this.city.selectedIndex - 1 === -1 ? 0 : this.city.selectedIndex].children, "吃的")
            }
            // this.city.innerHTML = `<option>请选择地区</option>`
            // this.area.innerHTML = `<option>请选择吃的</option>`
            console.log(this.province.onchange)
            this.province.onchange()
        }
    }

    return S
})