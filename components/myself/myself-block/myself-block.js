// miblock/miblock.js
Component({
    /**
     * 传入组件外部样式
     */
    externalClasses: ['my-class'],
    /**
     * 组件的属性列表
     */
    properties: {
        list: Array,
    },

    /**
     * 组件的初始数据
     */
    data: {

    },

    /**
     * 
     */
    lifetimes: {
        attached: function() {
            console.log("hello" + this.data.list);
        }
    },
    /**
     * 组件的方法列表
     */
    methods: {}
})