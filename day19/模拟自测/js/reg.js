define(() => {
    function S(opt) {
        Object.assign(this, {}, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.data.forEach((item) => {
                item.input.onblur = () => {
                    item.reg.test(item.input.value) ? item.input.nextElementSibling.innerHTML = "" : item.input.nextElementSibling.innerHTML = item.errorInfo
                }
                item.input.nextElementSibling.innerHTML = item.okInfo

                item.input.onfocus = () => {
                    item.input.nextElementSibling.innerHTML = item.okInfo
                }
            })
        }
    }

    return S
})