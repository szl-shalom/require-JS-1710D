require(["./js/dom", "./js/addInfo"], function ($, AddInfo) {
    new AddInfo({
        okBtn: $.get(".ok"),
        resBtn: $.get(".res"),
        username: $.get(".text1"),
        age: $.get(".text2"),
        tbody: $.get(".tb")
    })
})  