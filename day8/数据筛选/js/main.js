require(['data', 'dom', 'filter'], function (data, $, Filter) {
    new Filter({
        nav: $.get(".nav"),
        ul: $.get("ul"),
        data,
    })
})