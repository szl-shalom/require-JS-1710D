define(["dom"],function(D){
    var Page = function(opt){
        //给容器设置必填项
        if(!opt.oPage){
            alert("存放页码的容器必须设置");
            return;
        }
        Object.assign(this,{data:[],index:1},opt);
        this.init();
    }
    Page.prototype = {
        constructor:Page,
        init:function(){
            this.renderSel();
            this.renderPage();
            this.changeSel();
            this.clickPage();
            this.renderList(this.data.slice((this.index-1)*this.oSel.value,this.index*this.oSel.value));
        },
        /**
         * 渲染下拉框
         */
        renderSel:function(){
                  this.oSel.innerHTML=this.size.map(function(item){
                      return `<option value="${item}">每页${item}条</option> `
                  }).join("");
        },
        /**
         * 渲染页码
         */
        renderPage:function(){
            var n = Math.ceil(this.data.length/ this.oSel.value);
            var str = ``;
            for(var i =1;i<=n;i++){
                str+=`<span class=${this.index===i?'active':''}>${i}</span>`
            }
            this.oPage.innerHTML = str;
        },
        /**
         * 切换下拉框
         */
        changeSel:function(){
            this.oSel.onchange = ()=>{
                this.renderPage();
                //每次渲染列表的时候  只需要把当前页对应的数据传过来
                this.renderList(this.data.slice(0,this.oSel.value));
            }
        },
        /**
         * 点击页码
         */
        clickPage:function(){
            this.oPage.onclick = (e)=>{
                e = e || window.event;
                var ele = e.target || e.srcElement;
                if(ele.tagName==="SPAN"){
                    var dom = D.get(".active",this.oPage);
                    dom&&dom.classList.remove("active");
                    ele.classList.add("active");
                    var no = +ele.innerHTML;
                    this.renderList(this.data.slice((no-1)*this.oSel.value,no*this.oSel.value));
                }
            }
        }
        /**
         * 渲染列表
         */
        // renderList:function(data){
        //     new Tab({
        //         data:data,
        //         oTitle:this.oTitle,
        //         oContents:this.oContents
        //     })
        // }
    }
    return Page;
})