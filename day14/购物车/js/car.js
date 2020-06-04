/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 11:28:55
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 11:59:11
 */
define(function () {
    function C(opt) {
        Object.assign(this, opt)
        this.init()
    }

    C.prototype = {
        constructor: C,
        init() {
            this.render()
            this.bindEvent()
        },
        render() {
            this.tbody.innerHTML = this.data.map(function (item) {
                return `
                <tr>
                    <td class="checkbox"><input class="check-one check" type="checkbox" /></td>
                    <td class="goods"><img src="images/${item.img}" alt="" /><span>${item.desc}</span></td>
                    <td class="price">${item.price}</td>
                    <td class="count">
                        <span class="reduce">-</span>
                        <input class="count-input" type="text" value="${item.count}" />
                        <span class="add">+</span></td>
                    <td class="subtotal">${item.price * item.count}</td>
                    <td class="operation"><span class="delete">删除</span></td>
                </tr>
                `
            }).join("")
        },
        bindEvent() {
            this.wrap.onclick = e => {
                var tar = e.target;
                if (tar.className === "delete") {
                    tar.parentNode.parentNode.remove()
                }

                if (tar.className === "check-all check") {
                    var checkOnes = [...this.tbody.querySelectorAll("input[type='checkbox']")]
                    checkOnes.forEach(function (item) {
                        item.checked = tar.checked
                    })
                }

                if (tar.className === "add") {
                    tar.previousElementSibling.value++
                    //小计


                    tar.parentNode.nextElementSibling.innerHTML = tar.parentNode.previousElementSibling.innerHTML * tar.previousElementSibling.value
                }

                if (tar.className === "reduce") {

                    tar.nextElementSibling.value--;
                    if (+tar.nextElementSibling.value === 0) {
                        var flag = confirm("数量为0，商品就要删除了！！！")
                        if (flag) {
                            tar.parentNode.parentNode.remove()
                        } else {
                            tar.nextElementSibling.value = 1
                        }
                    }
                    tar.parentNode.nextElementSibling.innerHTML = tar.parentNode.previousElementSibling.innerHTML * tar.nextElementSibling.value
                }


                if (tar.className === "check-one check") {
                    var checkOnes = [...this.tbody.querySelectorAll("input[type='checkbox']")];
                    document.querySelector(".check-all").checked = checkOnes.some(function (item) {
                        return item.checked
                    })  
                }
                this.cpmputePrice()
            }
        },
        cpmputePrice() {
            var checkOnes = [...this.tbody.querySelectorAll("input:checked")]
            var allPrice = 0, allCount = 0;
            checkOnes.forEach(function (item) {
                allPrice += +item.parentNode.parentNode.querySelector(".subtotal").innerHTML
                allCount += +item.parentNode.parentNode.querySelector(".count-input").value
            })
            document.querySelector("#selectedTotal").innerHTML = allCount
            document.querySelector("#priceTotal").innerHTML = allPrice.toFixed(2)
        }

    }

    return C
})