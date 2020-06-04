require(["Banner"], function (Banner) {
    console.log(1)
    new Banner({
        el: document.querySelector(".wrap"),
        data: ["1.jpeg", "2.jpg", "3.jpg","4.jpg","5.jpeg"],
        img: document.querySelector("img"),
        page:document.querySelector(".page")
    })
})
