require.config({
    baseUrl: "./js",
    paths: {
        "dialog": "./dialog",
    }
})


require(["dialog"], function (Dialog) {
    new Dialog({
        color: "red",
        content: "success",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })


    new Dialog({
        color: "blue",
        content: "高泽康",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })


    new Dialog({
        color: "yellow",
        content: "1231231231",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })

    new Dialog({
        color: "yellow",
        content: "1231231231",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })

    new Dialog({
        color: "yellow",
        content: "1231231231",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })

    new Dialog({
        color: "yellow",
        content: "1231231231",
        data: ["1", "2", "3", "4"],
        wrap: document.querySelector(".wrap"),
    })
})