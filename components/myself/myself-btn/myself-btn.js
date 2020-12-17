// components/myself/myself-btn/myself-btn.js
Component({
    /**
     * 传入组件外部样式
     */
    externalClasses: ['my-class'],
    /**
     * 组件的属性列表
     */
    properties: {

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
        /**
         * 点击事件
         */
        gotoCamera: function() {
            console.log("当前页面路径", getCurrentPages())
            var myEventDetail = { name: 'jump' } // detail对象，提供给事件监听函数
            var myEventOption = {} // 触发事件的选项
            this.triggerEvent('jump', myEventDetail, myEventOption);
        }
    },

})