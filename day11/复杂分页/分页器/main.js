require.config({
    baseUrl: "./js",
    paths: {
        "dom": "dom",
        "page": "page",
        "data": "../mock/data",
    }
})

require(["dom", "page", "data"], function ($, Page, data) {

})