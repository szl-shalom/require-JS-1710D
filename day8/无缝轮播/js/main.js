require(["dom", "data", "banner"], function ($, data, Banner) {
    new Banner({
        data,
        container: $.get(".container"),
        page: $.get(".page"),
        prev: $.get(".prev"),
        next: $.get(".next"),
        wrap: $.get(".wrap")
    })
})