require(["banner1", "data"], function (Banner, data) {
    new Banner({
        wrap: document.querySelector(".wrap"),
        data: data,
        img: document.querySelector("img"),
        page: document.querySelector(".page"),
        prev: document.querySelector(".prev"),
        next: document.querySelector(".next"),
        index: 5
    })
})