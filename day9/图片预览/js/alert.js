define(function () {
    function Alert(opt) {
        Object.assign(this, {}, opt)

        this.init()
    }


    Alert.prototype = {
        constructor: Alert,
        init: function () {
            this.createMask()
            this.createContent()
            this.bindEvent();
        },
        createMask: function () {
            this.mask = document.createElement("div");
            this.mask.style = "position:fixed;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);"
            document.body.appendChild(this.mask)
        },
        createContent: function () {
            this.content = document.createElement("div")
            this.content.innerHTML = `
    
                <span style="position: absolute;right:20px;top:20px;">X</span>
                <img src="./img/${this.urls[this.index]}" alt="" style="position: absolute;width:400px;height: 400px;top:50%;left:50%;margin-left:-200px;
                margin-top:-200px">
                <button style="position: absolute;left: 0;top: 50%;transform: translate(0,-50%);" class="prev">左</button>
                <button style="position: absolute;right: 0;top: 50%;transform: translate(0,-50%);"class="next">右</button>
      
            `
            document.body.appendChild(this.content)
        },
        bindEvent:function(){
            var that = this;
            this.content.querySelector("span").onclick = function(){
                    that.mask.remove();
                    that.content.remove();
            }

            this.content.querySelector(".prev").onclick = function(){
                that.index--
                if(that.index<0){
                    that.index = 0
                }
                that.content.querySelector("img").src = "./img/"+that.urls[that.index]
             }

            this.content.querySelector(".next").onclick = function(){
                that.index++
                if(that.index>that.urls.length -1){
                    that.index = that.urls.length -1
                }
                that.content.querySelector("img").src = "./img/"+that.urls[that.index]
            }

        }



    };



    return Alert;

});