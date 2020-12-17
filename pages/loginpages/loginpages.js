//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //登录按钮
    btnMessage: [{
        index: '1',
        items: " 手机号登录",
        color: "#ff5000",
        iconfontType: "shouji54",
        openType: "getPhoneNumber"
      },
      {
        index: '2',
        items: " 微信登录",
        color: "#09ba08",
        iconfontType: "gongzhonghao",
        openType: "getPhoneNumber"
      },
      {
        index: '3',
        items: " QQ登录",
        color: "#40a8ff",
        iconfontType: "QQ-shixin",
        openType: "getPhoneNumber"
      },
    ],
    //同意协议 true:表示未选中 false:表示选中
    isShow: 'true',
  },
  changeState: function () {
    const bol = this.data.isShow;
    this.setData({
      isShow: !bol,
    })
  },
  jumpToPages: function (e) {
    const idx = e.target.id;
    switch (idx) {
      case 'btn1':
        ;
        break;
      case 'btn2':
        console.log("this is " + idx);
        break;
      case 'btn3':
        console.log("this is " + idx);
        break;
      case 'otherways':
        wx.navigateTo({
          url: '../otherways/otherways',
        });
        break;
    }
  },
})