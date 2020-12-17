// miblock/miblock.js
const appInst = getApp();
const systemData = appInst.globalData.systemData;

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        backgroundColor: String,
        backgroundImage: String,
    },

    /**
     * 组件的初始数据
     */
    data: {},

    /**
     * 生命周期函数
     */
    lifetimes: {

    },

    /**
     * 组件使用外部样式
     */
    externalClasses: ['my-class'],

    attached: function() {
        // 获取当前系统的相关信息
        var navbarTopHeight = ['top:' + systemData.statusBarHeight + 'px;'];
        var navbarHeight = ['height:' + systemData.navbarHeight + 'px;'];
        var backgroundColor = this.data.backgroundColor;
        var backgroundImage = this.data.backgroundImage;
        this.setData({
            backgroundColor,
            navbarTopHeight,
            navbarHeight,
            backgroundImage,
        })
    },

    /**
     * 组件的方法列表
     */
    methods: {}
})