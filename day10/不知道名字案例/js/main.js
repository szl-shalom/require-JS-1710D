require(["dom", "filter"], function ($, Filter) {
    new Filter({
        search: $.get(".search"),
        content: $.get(".content"),
        wrap: $.get(".wrap"),
        ul: $.get(".ul")
    })
})