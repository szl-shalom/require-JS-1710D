require(["dom", "data", "banner1"], function ($, data, Banner) {
    console.log($)
    new Banner({
        wrap: $.get(".wrap"),
        container: $.get(".container"),
        page: $.get(".page"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        data: data,
        // index: 5
    })
})