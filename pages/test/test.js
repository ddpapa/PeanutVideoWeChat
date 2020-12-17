// pages/test/test.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        videoList: {
            "imagesURL": "../../../pages/resource/images/cover123.jpg",
            "avatarURL": "../../../pages/resource/images/1214.jpg",
            "createTIME": "7小时"
        },
        leftList: [{
                start: "jifen",
                name: "攒积分",
            },
            {
                start: "souyisou",
                name: "搜一搜",
            },
            {
                start: "ic-wenjian",
                name: "本地作品",
            },
            {
                start: "saoyisao",
                name: "扫一扫",
            },
            {
                start: "shangcheng",
                name: "逗趣商城",
            },
            {
                start: "gengduo1",
                name: "更多",
            },
            {
                start: "shezhi1",
                name: "设置",
            },
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

    },

    /**
     * 组件自定义事件
     */
    tapList: function(e) {
        console.log(e);
    }
})