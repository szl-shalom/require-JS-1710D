define(function () {
    return {
        get: (el, parent = document) => parent.querySelector(el),
        gets: (el, parent = document) => parent.querySelectorAll(el),
    }
})