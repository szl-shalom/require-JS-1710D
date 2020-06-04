require(["dom", "dialog", "confirm", "toast"], function ($, Alert, Confirm, obj) {
    var btns = $.gets("button");
    btns[0].onclick = function () {
        new Alert({
            title: "Alert",
            message: "大请问群无"
        })
    }

    btns[1].onclick = function () {
        new Confirm({
            title: "Alert",
            message: "大请问群无",
            define: function () {
                alert("确定")
            },
            cancel: function () {
                alert("取消")
            }
        })
    }

    btns[2].onclick = function () {
        obj.Etoast("千万人无二 ", 2)
    }
})