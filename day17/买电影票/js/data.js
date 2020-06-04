/*
 * @Description: This is a JS program !
 * @Author: 史志龙
 * @Github: https://github.com/szl-shalom/
 * @Date: 2019-10-22 20:08:15
 * @LastEditors: 史志龙
 * @LastEditTime: 2019-10-23 11:00:11
 */
var data = [{
    title: '哥斯拉2：怪兽之王',
    img: 'img/img01.jpg',
    theme: 'pink',
    session: [{
        start_time: '12:00',
        end_time: '14:00',
        language: '英语3D',
        room: '8号激光厅',
        price: 47,
        sit: 56
    }, {
        start_time: '13:00',
        end_time: '15:00',
        language: '英语3D',
        room: '1号IMAX巨幕',
        price: 87,
        sit: 20
    }]
}, {
    title: '阿拉丁神灯',
    img: 'img/img02.jpg',
    theme: 'gold',
    session: [{
        start_time: '12:00',
        end_time: '14:00',
        language: '英语3D',
        room: '4号激光厅',
        price: 33,
        sit: 34
    }, {
        start_time: '17:00',
        end_time: '19:00',
        language: '英语3D',
        room: '1号IMAX巨幕',
        price: 87,
        sit: 10
    }]
}, {
    title: 'X战警：黑凤凰',
    img: 'img/img03.jpg',
    theme: '#666',
    session: [{
        start_time: '12:00',
        end_time: '14:00',
        language: '英语3D',
        room: '3号激光厅',
        price: 45,
        sit: 8
    }, {
        start_time: '20:00',
        end_time: '22:00',
        language: '英语3D',
        room: '1号IMAX巨幕',
        price: 103,
        sit: 55
    }]
}, {
    title: '哆啦A梦：月球探险记',
    img: 'img/img04.jpg',
    theme: 'skyblue',
    session: [{
        start_time: '16:00',
        end_time: '18:00',
        language: '英语3D',
        room: '7号激光厅',
        price: 17,
        sit: 56
    }, {
        start_time: '13:00',
        end_time: '15:00',
        language: '英语3D',
        room: '1号IMAX巨幕',
        price: 87,
        sit: 20
    }]
}, {
    title: '追龙2',
    img: 'img/img05.jpg',
    theme: '#2bb8aa',
    session: [{
        start_time: '10:00',
        end_time: '11:40',
        language: '英语3D',
        room: '8号激光厅',
        price: 22,
        sit: 56
    }, {
        start_time: '13:00',
        end_time: '15:00',
        language: '英语3D',
        room: '1号IMAX巨幕',
        price: 87,
        sit: 20
    }]
}]
data = data.concat(data)
console.log(data)
define(function () {
    return data
})