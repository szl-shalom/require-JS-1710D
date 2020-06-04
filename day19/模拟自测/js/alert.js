define(() => {
    function S(opt) {
        Object.assign(this, { clickMaskFlag: false }, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {
            this.create()
        },
        create() {
            this.mask = document.createElement("div");
            this.mask.style = `
                position:fixed;
                top:0;
                left:0;
                width:100%;
                height:100%;
                background:rgba(0,0,0,.3);
            `
            document.body.appendChild(this.mask)

            if (this.clickMaskFlag) {
                this.mask.onclick = () => {
                    this.remove()
                }
            }

            this.content = document.createElement("div")
            this.content.style = `
                position:fixed;
                top:50%;
                left:50%;
                transform:translate(-50%,-50%);
                text-align:center;
                background:#fff;
                padding:50px;
            `
            this.content.innerHTML = `
                <h3>${this.title}</h3>
            `
            var okBtn = document.createElement("button")
            okBtn.innerHTML = this.okValue;
            okBtn.onclick = () => {
                this.remove()

                this.okClick && this.okClick()
            }
            this.content.appendChild(okBtn)

            var cancelBtn = document.createElement("button")
            cancelBtn.innerHTML = this.cancelValue;
            cancelBtn.onclick = () => {
                this.remove()
                this.cancelClick && this.cancelClick()
            }
            this.content.appendChild(cancelBtn)
            document.body.appendChild(this.content)
        },
        remove() {
            this.mask.remove()
            this.content.remove()
        }
    }

    return S
})