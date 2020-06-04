require(["dom", "tab", "data"], function ($, Tab, data) {
    new Tab({
        index: 1,
        oTitle: $.get(".left"),
        oContent: $.get(".right"),
        oUnderLine: $.get("i"),
        data: data,
        // type: "mouseover",
    })
})