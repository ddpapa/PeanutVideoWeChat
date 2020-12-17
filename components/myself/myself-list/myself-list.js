// milist/milist.js
Component({
    /**
     * 开启多槽点功能
     */
    options: {
        multipleSlots: true,
    },
    /**
     * 组件的属性列表
     */
    properties: {
        dataMsg: {
            type: Array,
        },
        fontSize: Number,
        rightWidth: Number,
        rightHeight: Number,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 组件的方法列表
     */
    methods: {
        onTap: function(e) {
            var myEventDetail = { name: 'tapList', id: e.currentTarget.dataset.id, } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('tapList', myEventDetail, myEventOption);
        }
    }
})