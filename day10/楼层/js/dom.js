define(function () {
    return {
        get: function (el, parent) {
            parent = parent || document;
            return parent.querySelector(el)
        },
        gets: function (el, parent) {
            parent = parent || document;
            return parent.querySelectorAll(el)
        }
    }
})