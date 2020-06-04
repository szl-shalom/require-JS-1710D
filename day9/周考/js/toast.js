define(function () {
    return {
        Etoast: function (str, num) {
            var mask = document.createElement("div")
            mask.style = `position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);`
            document.body.appendChild(mask)


            var div = document.createElement("div");
            div.style = "position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:white;padding:20px;"
            div.innerHTML = str
            document.body.appendChild(div)

            num = num || 3

            setTimeout(() => {
                div.remove()
                mask.remove()
            }, num * 1000);
        }
    }
})