require(["page","dom","tab"],function(Page,D,Tab){
    var oList = D.get(".list");
    new Page({
        data:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg"],
        size:[2,3,4],
        oSel:D.get("select"),
        oPage:D.get(".page"),
        renderList:function(data){
            oList.innerHTML = data.map((item)=>{
                return `<img src=img/${item}>`
            }).join("");
        }
    })
})