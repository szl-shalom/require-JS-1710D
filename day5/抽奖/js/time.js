define(["getGift", "data", "dom"], function (GetGift, data, $) {
    function Time(opt) {
        Object.assign(this, opt)
        console.log(this)
        this.init();
    }


    Time.prototype = {
        constructor: Time,
        init: function () {
            var that = this
            var timer = setInterval(function () {
                that.time--
                that.el.innerHTML = `0小时0分钟${that.time}秒`

                if (that.time === 0) {
                    // 调用抽奖模块
                    new GetGift({
                        data: data,
                        oPeople: $.get(".people"),
                        oPhone: $.get(".phone"),
                        oRight: $.get(".right"),
                        count: 3,
                    }).init()

                    // 修改内容
                    that.el.innerHTML = "抽奖中"
                    // 清除定时器
                    clearInterval(timer)
                }
            }, 1000);
        }
    }

    return Time
})