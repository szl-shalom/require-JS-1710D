require(["data", "dom", "select"], function (data, $, Select) {
    new Select({
        data,
        oInput: $.get("input"),
        oUl: $.get("ul"),
    })
})