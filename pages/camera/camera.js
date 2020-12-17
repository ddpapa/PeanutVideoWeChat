// pages/camera/camera.js
const appInst = getApp();
const systemData = appInst.globalData.systemData;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        // 摄像头方向
        direction: "back",
        // 定时开启状态
        timingStatus: "停",
        // 闪光灯的状态
        flash: "off",
        // 是否打开切换比例窗口
        canChangeProportion: false,
        // 拍摄界面对齐方式
        alignSelf: "flex-start",
        // 屏幕尺寸
        screensize: "icon_fullscreen",
        // 屏幕尺寸集合
        sizeArray: [{
                text: "全屏",
                proportion: 0,
                iconfont: 'icon_fullscreen'
            },
            {
                text: "9:16",
                proportion: 16 / 9,
                iconfont: 'icon_ninetosixteen'
            },
            {
                text: "3:4",
                proportion: 4 / 3,
                iconfont: 'icon_threetofour'
            },
            {
                text: "1:1",
                proportion: 1,
                iconfont: 'icon_onetoone'
            },
        ],
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        console.log("相机：" + JSON.stringify(systemData));
        this.setData({
            systemData
        })
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
        wx.hideHomeButton({
            success: (res) => {
                console.log("藏了");
            },
        })
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
     * 用户点击关闭按钮，回退路由
     */
    goBack: function() {
        wx.navigateBack({
            complete: (res) => {

            },
        })
    },

    /**
     * 用户点击切换镜头
     */
    checkDirection: function() {
        console.log("切换镜头")
        var direction = this.data.direction == "back" ? "front" : "back";
        var animation = wx.createAnimation({
            duration: 1000,
            delay: 0,
        })
        animation.rotate(180).step();
        animation.opacity(1).rotate(-180).step({ duration: 0, delay: 0 });
        animation.opacity(0).step({ duration: 0, delay: 0 });
        this.setData({
            rotateAnimation: animation.export(),
            direction
        })
    },

    /**
     * 用户点击闪光灯按钮
     */
    openLight: function() {
        console.log("我要开灯了");
        var flash = this.data.flash == "off" ? "on" : "off";
        this.setData({
            flash
        });
    },

    /**
     * 用户想要切换视频比例
     */
    checkScreenProportion: function() {
        console.log("我要换比例");
        var canChangeProportion = this.data.canChangeProportion == true ? false : true;
        this.setData({
            canChangeProportion,
        })
    },

    /**
     * 用户点击了不同的视频比例
     */
    changeScreenProportion: function(e) {
        var index = e.currentTarget.dataset.id;
        console.log(index);
        if (index == 0) {
            this.setData({
                screensize: this.data.sizeArray[index].iconfont,
                screenHeight: "",
                alignSelf: "",
            })
        } else if (index == 1) {
            var screenWidth = wx.getSystemInfoSync().screenWidth;
            console.log(screenWidth);
            this.setData({
                screensize: this.data.sizeArray[index].iconfont,
                screenHeight: screenWidth * this.data.sizeArray[index].proportion,
                alignSelf: "",
            })
        } else {
            var screenWidth = wx.getSystemInfoSync().screenWidth;
            console.log(screenWidth);
            this.setData({
                screensize: this.data.sizeArray[index].iconfont,
                screenHeight: screenWidth * this.data.sizeArray[index].proportion,
                alignSelf: "center",
            })
        }
    },


})