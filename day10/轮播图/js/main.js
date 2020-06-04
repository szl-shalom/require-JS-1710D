require(["dom", "data", "banner","Banner"], function ($, data, Banner,A) {
    console.log(Banner,A)
    new Banner({
        index: 1,
        img: $.get("img"),
        page: $.get(".page"),
        data: data,
        wrap: $.get(".wrap")
    })
})