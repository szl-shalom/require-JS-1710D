define(function() {
    return {
        /**
         * 获取符合选择器的第一个元素
         * @param {string} sel  选择器
         * @param {object} parent  父元素
         */
        get: function(sel, parent) {
            parent = parent || document;
            return parent.querySelector(sel);
        },
        /**
         * 获取符合选择器的第一个元素
         * @param {string} sel  选择器
         */

        gets: function(sel, parent) {
            parent = parent || document;
            return parent.querySelectorAll(sel);
        }
    }
})