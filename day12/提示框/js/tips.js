/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 13:01:24
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 15:31:35
 */
define(function () {
    function Tips(opt) {
        if (!opt.btn) {
            alert("你忘记传参了！！！！btn")
            return;
        }


        Object.assign(this, opt)
        this.init()
    }

    Tips.prototype = {
        constructor: Tips,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.btn.onclick = () => {
                this.create()
            }
        },
        create() {
            var div = document.createElement("div");
            div.innerHTML = this.content;
            Object.assign(div.style, this.style)
            document.body.appendChild(div)
            this.setPos(div)
        },
        setPos(div) {
            var btnPos = this.btn.getBoundingClientRect()
            div.style.position = "absolute";
            console.log(btnPos)
            switch (this.pos) {
                case "left":
                    div.style.left = btnPos.left - div.offsetWidth - 10 + "px"
                    div.style.top = btnPos.top + btnPos.height / 2 - div.offsetHeight / 2 + "px"
                    break;
                case "right":
                    div.style.left = btnPos.left + btnPos.width + 10 + "px"
                    div.style.top = btnPos.top + btnPos.height / 2 - div.offsetHeight / 2 + "px"
                    break;
            }
            
        }

    }


    return Tips
})