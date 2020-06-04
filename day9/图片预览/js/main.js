require(["previewImage"], function (previewImage) {
    previewImage.show({
        currentIndex: '', // 当前显示图片的索引
        urls: ["1.jpeg", "2.jpg", "3.jpg", "4.jpg", "5.jpeg", "6.jpg", "7.jpg"] // 需要预览的图片链接列表
    })
})