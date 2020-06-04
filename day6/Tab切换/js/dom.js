define(function () {
    return {
        //parent有一个默认值document
        //如果在调用时不传入第二个参数,那么parent值
        get: function (el, parent) {
            parent = parent || document
            return parent.querySelector(el)
        },
       
    }
})