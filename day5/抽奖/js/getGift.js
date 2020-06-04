define(function () {
    function GetGift(opt) {
        Object.assign(this, opt)

    }


    GetGift.prototype.init = function () {
        this.startTime()
        this.bindEvent()
    }

    GetGift.prototype.startTime = function () {
        var that = this;
        var index
        var timer1 = setInterval(function () {
            index = Math.floor(Math.random() * that.data.length)
            that.oPeople.innerHTML = that.data[index].name
            that.oPhone.innerHTML = that.data[index].phone
        }, 100);
        setTimeout(function () {
            var delObj = that.data.splice(index, 1)[0]
            that.oRight.firstElementChild.innerHTML += `<li>${delObj.name} ${delObj.phone}</li>`
            clearInterval(timer1)
        }, 1000)
    }

    GetGift.prototype.bindEvent = function () {
        var that  = this
        var timer2 = setInterval(function () {
            that.startTime()
            if(that.oRight.firstElementChild.children.length>=that.count - 1){
                clearInterval(timer2)
            }
        }, 2000)
    }
    return GetGift;
})