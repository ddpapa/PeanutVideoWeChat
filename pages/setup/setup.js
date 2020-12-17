// pages/setup/setup.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 账号设置
        accountSettings: [{
                start: "shouji",
                name: "绑定手机号",
                end: "back-copy",
                border: "1rpx solid #cdcdcd"
            },
            {
                start: "suo",
                name: "账号与安全",
                end: "back-copy",
                border: "1rpx solid #cdcdcd"
            },
            {
                start: "anquan",
                name: "隐私设置",
                end: "back-copy",
            }
        ],
        // 通用设置
        ordinarySettings: [{
            start: "qingli",
            name: "清理缓存",
            end: "back-copy",
        }],
        // 关于设置
        aboutSettings: [{
                start: "bangzhu",
                name: "反馈与帮助",
                end: "back-copy",
                border: "1rpx solid #cdcdcd"
            },
            {
                start: "guanyu",
                name: "关于我们",
                end: "back-copy",
            }
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})