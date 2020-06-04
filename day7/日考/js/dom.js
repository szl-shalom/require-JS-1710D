define(function () {
    var obj = {
        get: function (el, parent) {
            parent = parent || document;
            return parent.querySelector(el)
        },
        gets: function (el, parent) {
            parent = parent || document;
            return parent.querySelectorAll(el)
        },
        //添加类名
        addClass: function (el, className) {
            el.classList.add(className)
        },
        //删除类名
        delClass: function (el, className) {
            el.classList.remove(className)
        }
    }


    return obj;
})