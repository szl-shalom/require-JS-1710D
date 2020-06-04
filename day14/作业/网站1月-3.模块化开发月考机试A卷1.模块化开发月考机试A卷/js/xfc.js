/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:03:18
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 11:10:02
 */



define(["../lib/velocity.min"], function (V) {
    function X(opt) {

        Object.assign(this, opt)
        this.init()
    }

    X.prototype = {
        constructor: X,
        init() {
            this.bindEvent()
        },
        bindEvent() {
            this.xfc.onclick = () => {
                V(this.xfc, {
                    rotateZ: [765, 45]
                }, {
                    duration: 2000,
                    complete: () => {
                        document.body.style.backgroundImage = `url("./img/${this.data[Math.floor(this.data.length * Math.random())]}")`
                    }
                })
            }
        }
    }


    return X
})
