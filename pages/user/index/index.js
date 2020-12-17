// pages/user/index/home.js
const appInst = getApp();
const systemData = appInst.globalData.systemData;

Page({

    /**
     * 页面的初始数据
     */
    data: {
        swiperHeight: systemData.safeArea.height - systemData.navbarHeight - systemData.screenHeight * 0.08,
        observerHeight: (systemData.screenHeight - systemData.navbarHeight - systemData.statusBarHeight) * (-1),
        topMaskHeight: systemData.navbarHeight + systemData.statusBarHeight,
        showMaskLayer: true,
        navbarIconBg: "rgba(0, 0, 0, 0.3)",
        navbarIcon: "icon_guanbi",
        opus: [{
                name: "作品",
                number: 0,
                data: [],
            },
            {
                name: "私密",
                number: 0,
                data: [],
            },
            {
                name: "点赞",
                number: 76,
                data: [{
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                    {
                        "imagesURL": "../../../pages/resource/images/cover123.jpg",

                    },
                ],
            },
            {
                name: "动态",
                number: 0,
                data: [],
            },
        ],
        selected: 0,
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        const that = this;
        that._observer = wx.createIntersectionObserver(that);
        that._observer.relativeToViewport({ top: 100, bottom: this.data.observerHeight, left: 0, right: 0 }).observe(".observer-sign", (res) => {
            console.log(res);
            if (res.intersectionRatio === 0) {
                // 昵称退出监听区域
                wx.setNavigationBarColor({
                    frontColor: '#ffffff',
                    backgroundColor: '#000000'
                })
                this.setData({
                    navbarIconBg: "rgba(0, 0, 0, 0.3)",
                    navbarIcon: "icon_guanbi",
                    topBackgroundColor: "transparent",
                })
                console.log(this.data.topBackgroundColor)
            } else {
                // 昵称进入监听区域
                wx.setNavigationBarColor({
                    frontColor: '#000000',
                    backgroundColor: '#ffffff'
                })
                this.setData({
                    navbarIconBg: "transparent",
                    navbarIcon: "icon_guanbiCopy",
                    topBackgroundColor: "white",
                })
                console.log(this.data.topBackgroundColor)
            }
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
     * 路由跳转
     */
    gotoUserInfo: function() {
        wx.navigateTo({
            url: '../info/info',
        })
    },

    /**
     * 跳转至相机页面
     */
    gotoCamera: function() {
        wx.navigateTo({
            url: '../../camera/camera',
        })
    },

    /**
     * 路由回退
     */
    goBack: function() {
        wx.navigateBack({
            complete: (res) => {},
        })
    },

    /**
     * 父级scroll-view触底（顶）事件
     */
    showMaskLayer: function(e) {
        var showMaskLayer;
        if (e.type === 'scrolltolower') {
            // 触底事件
            showMaskLayer = false;

        } else {
            // 触顶事件
            showMaskLayer = true;
        }
        this.setData({
            showMaskLayer,
        });
    },

    /**
     * 用户切换tab
     */
    switchTab: function(e) {
        const topNumber = 0;
        if (e.type === "change") {
            // 监听swiperitem改变
            const selected = e.detail.current;
            if (this.data.opus[selected].data.length === 0) {
                this.setData({
                    selected,
                    topNumber
                });
            } else {
                this.setData({
                    selected,
                });
            }
        }
        if (e.type === "tap") {
            // 监听手动点击tab
            const selected = e.currentTarget.dataset.id;
            if (this.data.opus[selected].data.length === 0) {
                this.setData({
                    selected,
                    topNumber
                });
            } else {
                this.setData({
                    selected,
                });
            }
        }
    }
})