// pages/user/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userInfo: {
            avatar: "../../resource/images/1213.jpg",
            nickname: "User_",
            userid: "2141181005",
            gender: "男",
            birthday: "1998-09-04",
            region: [
                "湖北省", "襄阳市", "襄城区"
            ],
            description: "我是一个好人"
        },
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
     * 跳转到编辑器页面
     */
    gotoEditor: function(e) {
        console.log("我要跳转的编辑器是", e.currentTarget.dataset.name);
        switch (e.currentTarget.dataset.name) {
            case "avatar":
                wx.navigateTo({
                    url: './editor/avatar/avatar',
                });
                break;
            case "nickname":
                {
                    const object = {
                        type: "nickname",
                        data: this.data.userInfo.nickname
                    };
                    let obj = JSON.stringify(object);
                    wx.navigateTo({
                        url: './editor/text/text?obj=' + obj,
                    })
                };
                break;
            case "userid":
                {
                    const object = {
                        type: "userid",
                        data: this.data.userInfo.userid
                    };
                    let obj = JSON.stringify(object);
                    wx.navigateTo({
                        url: './editor/text/text?obj=' + obj,
                    })
                };
                break;
            case "description":
                wx.navigateTo({
                    url: './editor/textarea/textarea?text=' + this.data.userInfo.description,
                });
                break;
        }
    },

    /**
     * 修改生日
     */
    bindDateChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            ['userInfo.birthday']: e.detail.value
        })
    },

    /**
     * 修改地区
     */
    bindRegionChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            ['userInfo.region']: e.detail.value
        })
    }
})