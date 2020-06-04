require(["shop", "dom", "reg", "sanji", "data"], function (S, $, R, SanJi, data) {
    new S({
        table: $.get("table"),
        allCheck: $.get(".checkAll"),
        sumPrice: $.get(".sumPrice"),
        sumCount: $.get(".sumCount"),
    })

    new R({
        data: [{
            input: $.get(".username"),
            reg: /^[\u4e00-\u9fa5]{2,4}$/,
            errorInfo: "用户名格式不正确",
            okInfo: "请输入2-4个汉字"
        }, {
            input: $.get(".phone"),
            reg: /^1[3-9][0-9]{9}$/,
            errorInfo: "手机号格式不正确",
            okInfo: "请输入11为手机号"
        }]
    })

    new SanJi({
        data,
        province: $.gets("select")[0],
        city: $.gets("select")[1],
        area: $.gets("select")[2],
    })
})