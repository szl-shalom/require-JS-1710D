require(["dialog"], function (Dialog) {

    document.querySelector("button").addEventListener("click", function () {
        new Dialog({
            // 3.弹窗的标题需要是可配置的（10分）
            title: "今天天气还行吗？",
            // 4.窗确定和取消按钮的文字是可配置的（10分）
            qdValue: "确定",
            cancelValue: "取消",
            // 5.点击每个按钮触发的事件是可配置的（20分）
            qdClickEvent: function () {
                console.log(1)
            },
            cancelClickEvent: function () {
                console.log(2)
            },


        
            
        })
    })
})