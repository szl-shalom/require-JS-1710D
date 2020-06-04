/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-17 13:57:25
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-17 14:44:40
 */
define(function () {
    function S(opt) {
        Object.assign(this, opt)
        this.init()
    }

    S.prototype = {
        constructor: S,
        init() {
            // 渲染省
            console.log(this.data[26].cityList[14].areaList)
            console.log(this.data[7].cityList[5].areaList)
            this.render(this.province, this.data, "省")
            //调用事件函数
            this.bindEvent()
        },
        // renderProvince() {
        //     this.province.innerHTML = ` <option value="请选择省">请选择省</option>` + this.data.map(item => {
        //         return `
        //             <option value="${item.name}">${item.name}</option>
        //         `
        //     }).join("")
        // },
        // renderCity(data) {
        //     this.city.innerHTML = ` <option value="请选择市">请选择市</option>` + data.map(item => {
        //         return `
        //             <option value="${item.name}">${item.name}</option>
        //         `
        //     }).join("")
        // },
        // renderArea(data) {
        //     this.area.innerHTML = ` <option value="请选择区">请选择区</option>` + data.map(item => {
        //         return `
        //             <option value="${item}">${item}</option>
        //         `
        //     }).join("")
        // },
        // 封装公共渲染方法  节点 数据 省市区不一样以及item
        render(el, data, type) {
            el.innerHTML = ` <option value="请选择${type}">请选择${type}</option>` + data.map(function (item, index) {
                return `
                          <option value=${index}>${item.name || item}</option>
                       `
            }).join("")
        },
        bindEvent() {
            //监听省发生改变
            this.province.addEventListener("change", () => {
                // 获取省对应的下标
                this.provinceIndex = this.province.selectedIndex - 1
                // this.provinceIndex = +this.province.value
                // 获取相应数据
                var data = this.data[this.provinceIndex].cityList
                // 渲染市
                // this.renderCity(data)
                this.render(this.city, data, "市")
            })
            //监听市发生改变
            this.city.addEventListener("change", () => {
                // 获取市对应的下标
                var index = this.city.selectedIndex - 1
                // 获取相应数据
                var data = this.data[this.provinceIndex].cityList[index].areaList
                // 渲染区
                // this.renderArea(data)
                this.render(this.area, data, "区")

            })

        }
    }


    return S
})