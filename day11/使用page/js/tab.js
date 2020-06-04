define(function(){
    var Tab = function(opt){
        Object.assign(this,{index:0},opt);
        this.init();
    }
    Tab.prototype = {
        constructor:Tab,
        init:function(){
            this.renderTitle();
            this.clickTab();
            this.renderContents();
        },
        renderTitle:function(){
            this.oTitle.innerHTML = this.data.map((item,index)=>{
                return `<li index=${index} class=${this.index===index?'active':''}>${item.name}</li>`
            }).join("")
        },
        clickTab:function(){
            this.oTitle.onclick = (e)=>{
                e = e || window.event;
                var ele = e.target || e.srcElement;
                if(ele.tagName==="LI"){
                    this.oTitle.children[this.index].classList.remove("active");
                    ele.classList.add("active");
                    this.index = +ele.getAttribute("index");
                    this.renderContents();
                }
            }
        },
        renderContents:function(){
            var cities=this.data[this.index].cities;
            if(cities.length===1){
                //直辖市
                this.oContents.innerHTML=cities[0].cities.map((item)=>{
                    return `<li>${item.name}</li>`
                }).join("");
            }else{
                this.oContents.innerHTML=cities.map((item)=>{
                    return `<li>${item.name}</li>`
                }).join("");
            }
        }
    }
    return Tab;
})