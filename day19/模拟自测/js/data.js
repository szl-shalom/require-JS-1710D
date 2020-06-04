define(() => {
    return [{
        name: "水果",
        children: [{
            name: "热带",
            children: [{
                name: "山竹"
            }, {
                name: "芭蕉"
            }, {
                name: "椰子"
            }]
        }, {
            name: "温带",
            children: [{
                name: "苹果"
            }, {
                name: "梨"
            }, {
                name: "橘子"
            }]
        }]
    }, {
        name: "蔬菜",
        children: [{
            name: "大棚",
            children: [{
                name: "西红柿"
            }, {
                name: "西瓜"
            }, {
                name: "辣椒"
            }]
        }, {
            name: "非大棚",
            children: [{
                name: "土豆"
            }, {
                name: "韭菜"
            }, {
                name: "蒜"
            }]
        }]
    }]
})