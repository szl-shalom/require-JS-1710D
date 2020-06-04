/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-19 10:02:57
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-19 10:56:48
 */

require(["banner", "serach", "tab", "xfc", "dom"], function (B, S, T, X, D) {
    // Tab模块
    new T({
        oTitle: D.get(".tab"),
    })
    //模糊搜索
    new S({
        data: ["张三", "李四", "王五1", "王五2", "王五3", "隔壁老王"],
        input: D.get(".user-search"),
        ul: D.get(".ul")
    })
    //轮播
    new B({
        container: D.get(".container"),
        page: D.get(".page")
    })

    // 小风车
    new X({
        data:  ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg", "6.jpg", "7.jpg"],
        xfc: D.get(".xfc")
    })
})