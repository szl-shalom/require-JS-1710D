require(["dom", "floor", "data"], function ($, Floor, data) {
    new Floor({
        oContent: $.get(".floor-content"),
        oWord: $.get(".floor-word"),
        data: data,
    })
})