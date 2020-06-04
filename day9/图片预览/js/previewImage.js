define(["alert"], function (Alert) {
    return {
        show: function (obj) {
            document.querySelector(".wrap").innerHTML = obj.urls.map((item, index) => {
                return `<img src=./img/${item} width=200 height=200 index= ${index}>`
            }).join("")
            this.bindEvent(obj)
        },
        bindEvent: function (obj) {
            document.querySelector(".wrap").onclick = function (e) {
                var tar = e.target;
                if (tar.nodeName === "IMG") {
                    new Alert({
                        index: +tar.getAttribute("index"),
                        urls: obj.urls,
                    })
                }
            }
        }

    }
})