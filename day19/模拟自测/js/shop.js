define(["alert"], (Alert) => {
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
            this.table.onclick = e => {
                var tar = e.target;
                //加法
                if (tar.className === "add") {
                    tar.previousElementSibling.value++
                    var count = tar.previousElementSibling.value //数量
                    var price = tar.parentNode.previousElementSibling.firstElementChild.innerHTML  //单价
                    tar.parentNode.nextElementSibling.firstElementChild.innerHTML = count * price
                }
                //减法
                if (tar.className === "sub") {
                    tar.nextElementSibling.value <= 1 ? tar.nextElementSibling.value = 1 : tar.nextElementSibling.value--
                    var count = tar.nextElementSibling.value //数量
                    var price = tar.parentNode.previousElementSibling.firstElementChild.innerHTML  //单价
                    tar.parentNode.nextElementSibling.firstElementChild.innerHTML = count * price
                }
                //全选
                if (tar.className === "checkAll") {
                    // tar.checked; //全选的状态
                    [...this.table.querySelectorAll(".checkOne")].forEach(item => {
                        item.checked = tar.checked
                    })
                }
                //反选
                if (tar.className === "checkOne") {
                    //方法一
                    this.table.querySelectorAll(".checkOne:checked").length === this.table.querySelectorAll(".checkOne").length ? this.allCheck.checked = true : this.allCheck.checked = false
                    // this.table.querySelectorAll(".checkOne:checked").length ? this.allCheck.checked = true : this.allCheck.checked = false
                    //方法二
                    // this.allCheck.checked = [...this.table.querySelectorAll(".checkOne")].every(item => {
                    //     return item.checked
                    // })
                    // this.allCheck.checked = [...this.table.querySelectorAll(".checkOne")].some(item => {
                    //     return item.checked
                    // })
                }
                // 删除
                if (tar.className === "del") {
                    new Alert({
                        okValue: "确定",
                        cancelValue: "取消",
                        title: "确定要删除吗？",
                        okClick: () => {
                            tar.parentNode.remove()
                            this.compute()
                        },
                        cancelClick: function () {

                        },
                        clickMaskFlag: true //遮罩层是否关闭
                    })
                }



                // 计算总价和数量
                this.compute()
            }
        },
        compute() {
            var count = 0, price = 0;
            [...this.table.querySelectorAll(".checkOne:checked")].forEach(item => {
                price += +item.parentNode.parentNode.children[4].firstElementChild.innerHTML
                count += + item.parentNode.parentNode.children[3].children[1].value
            })
            this.sumCount.innerHTML = count
            this.sumPrice.innerHTML = price
        }
    }

    return S
})