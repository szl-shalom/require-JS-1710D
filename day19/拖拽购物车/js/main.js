require(["drag", "dom"], function (D, $) {
    new D({
        left: $.get(".left"),
        right: $.get(".right")
    })
})