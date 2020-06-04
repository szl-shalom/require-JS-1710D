define(["V"], function (V) {
    function Tab(opt) {
        Object.assign(this, {
            index: 0,
        }, opt)

        this.init()
    }


    Tab.prototype = {
        constructor: Tab,
        init: function () {
            this.renderTitle();
            this.bindEvent();
        },
        renderTitle: function () {
            console.log(this.data)
            var arr = []
            var str = "<span>热门</span>"
            //遍历对象 并将数据推入数组
            for (var key in this.data.data.citylist) {
                arr.push(key)
            }
            //将数组每四位进行切割 并进行字符串拼接
            while (arr.length) {
                str += ` <span>${arr.splice(0, 4).join("")}</span>`
            }
            this.oTitle.innerHTML = str;

            //渲染热门
            this.renderHostList()
        },
        renderHostList: function () {
            this.oContent.innerHTML = this.data.data.hotcitylist.map(item => {
                return `<span>${item.name}</span>`
            }).join("")
        },
        bindEvent: function () {
            this.oTitle.addEventListener("click", e => {
                var tar = e.target;
                if (tar.nodeName === "SPAN") {
                    //控制下划线
                    V(this.oUnderLine, {
                        left: tar.offsetLeft,
                        width: tar.offsetWidth,
                    })

                    //判断点击是不是热门
                    if (tar.innerHTML === "热门") {
                        this.renderHostList()
                    } else {
                        //点击的英文字母


                        var str = "<ul>"
                        //获取点击的内容
                        var val = tar.innerHTML
                        for (var i = 0; i < val.length; i++) {
                            str += ` <li><b>${val[i]}</b>`
                            for (var j = 0; j < this.data.data.citylist[val[i]].length; j++) {
                                for (var key in this.data.data.citylist[val[i]][j]) {
                                    str += `<span>${key}</span>`
                                }
                            }


                            str += "</li>"
                        }

                        str += "</ul>"

                        this.oContent.innerHTML = str
                    }
                }
            })
        }
    }



    return Tab
})