/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 20:23:27
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-18 10:12:50
 */
require(["dom", "data", "mes"], ($, data, M) => {
    new M({
        data,
        oWrap: $.get(".wrap"),
        container: $.get(".left .top"),
        input: $.get(".user-mes"),
        btn: $.get(".submit"),
    })
})