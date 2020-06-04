define(["./Alert"], function (Alert) {
    function AddInfo(opt) {
        Object.assign(this, {

        }, opt)

        this.init();
    }


    AddInfo.prototype = {
        constructor: AddInfo,
        init: function () {
            this.bindEvent();
        },
        bindEvent: function () {
            this.resBtn.addEventListener("click", () => {
                this.username.value = ""
                this.age.value = ""
            })

            this.okBtn.addEventListener("click", () => {
                var tr = document.createElement("tr");
                tr.innerHTML = `
                        <td>${ (this.tbody.lastElementChild ? + this.tbody.lastElementChild.firstElementChild.innerHTML + 1 : 1)}</td>
                        <td>${this.username.value}</td>
                        <td>${this.age.value}</td>
                        <td><span>删除</span></td>
                `
                this.tbody.appendChild(tr)
                this.resBtn.click()//执行重置按钮的点击事件
            })
            this.tbody.addEventListener("click", e => {
                var tar = e.target;
                if (tar.innerHTML === "删除") {
                    new Alert({
                        okValue: "确定",
                        cancelValue: "取消",
                        title: "确定删除吗？？？？",
                        okClickEvent: function () {
                            tar.parentNode.parentNode.remove()
                        },
                        clickMaskFlag: true,

                    })
                }
            })
        }
    }

    return AddInfo
})

