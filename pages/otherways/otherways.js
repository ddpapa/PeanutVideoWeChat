//index.js
//获取应用实例

import WxValidate from '../../utils/WxValidate'

const app = getApp()

Page({
  data: {
    array:[
      {
        number:'+86',
        region:'中国'
      },
      {
        number:'+65',
        region:'新加坡'
      },
      {
        number:'+90',
        region:'土耳其'
      },
      {
        number:'+853',
        region:'澳门'
      },
      {
        number:'+62',
        region:'印度尼西亚'
      },
      {
        number:'+673',
        region:'文莱'
      },
      {
        number:'+850',
        region:'朝鲜'
      },
      {
        number:'+856',
        region:'老挝'
      },
      {
        number:'+886',
        region:'台湾'
      },
      {
        number:'+90',
        region:'土耳其'
      },
      {
        number:'+92',
        region:'巴基斯坦'
      },
      {
        number:'+94',
        region:'斯里兰卡'
      },
      {
        number:'+960',
        region:'马尔代夫'
      },
      {
        number:'+962',
        region:'约旦'
      },
      {
        number:'+964',
        region:'伊拉克'
      },
      {
        number:'+966',
        region:'沙特阿拉伯'
      },
      {
        number:'+972',
        region:'以色列'
      },
      {
        number:'+974',
        region:'卡塔尔'
      },
      {
        number:'+976',
        region:'蒙古'
      },
      {
        number:'+98',
        region:'伊朗'
      },
      {
        number:'+60',
        region:'马来西亚'
      },
      {
        number:'+63',
        region:'菲律宾'
      },
      {
        number:'+66',
        region:'泰国'
      },
      {
        number:'+81',
        region:'日本'
      },
      {
        number:'+84',
        region:'越南'
      },
      {
        number:'+852',
        region:'香港'
      },
      {
        number:'+855',
        region:'柬埔寨'
      },
      {
        number:'+880',
        region:'孟加拉国'
      },
      {
        number:'+91',
        region:'印度'
      },
      {
        number:'+93',
        region:'阿富汗'
      },
      {
        number:'+95',
        region:'缅甸'
      },
      {
        number:'+961',
        region:'黎巴嫩'
      },
      {
        number:'+963',
        region:'叙利亚'
      },
      {
        number:'+965',
        region:'科威特'
      },
      {
        number:'+968',
        region:'阿曼'
      },
      {
        number:'+973',
        region:'巴林'
      },
      {
        number:'+975',
        region:'不丹'
      },
      {
        number:'+977',
        region:'尼泊尔'
      }
    ],
    // 区号回显
    message:'+86',
    // 电话号码
    vaulePhoneNumber:null,
    // 验证码
    valueCodeNumber:null,
    // 是否禁用button
    endisable:true,
    // 是否可删除电话号码
    isDeletePhone:false,
    // 是否可删除验证码
    isDeleteCode:false,
    // 显示或者隐藏 获取验证码
    getCode:false,
    // 重新发送倒计时
    countdown:60,
    // 计时器 id
    timeNumber:1,
    // 是否重新发送
    isAgainSend:false,
    labelColor:'#c6c6c6',
    // 是否显示时间
    isTimeShow:false,
    //同意协议 true:表示未选中 false:表示选中
    isShow:'true',
    // 是否开启密码登录
    canUsePwd:false,
    // codeInput默认值
    defaultValue:"验证码",
    // 切换登录
    labelMsg:'密码',
    // codeInput 最大长度
    maxlen:6,
  },
  onLoad(){
    this.initValidatePhone();
    this.initValidateAll();
  },
  // 报错 
  showToast(error) {
    console.log(error);
    const errormsg = error.msg;
    wx.showToast({
      title: errormsg,
      icon: 'none',
      duration: 1500, //持续的时间 
    })
  },

  // 控制再次发送按钮
  showAgainSend:function(){
    this.setData({
      getCode:false,
      isAgainSend:true,
      isTimeShow:false,
      labelColor:'#c6c6c6',
      countdown:60,
    })
    this.timeDown();
  },

  // 倒计时递归方法
  timeDown:function() {
    var timer = this.data.countdown-1;
    this.setData({
      countdown:timer,
    });
    this.data.timeNumber = setTimeout(this.timeDown,1000);
    this.stopDown();
  },

  // 停止倒计时方法
  stopDown:function() {
    if(this.data.countdown == 0){
      console.log("需要停止计时了");
      clearTimeout(this.data.timeNumber);
      this.setData({
        isTimeShow:true,
        labelColor:'#ff5000',
        countdown:60,
      })
    }
  },

  // 初始化验证规则
  initValidatePhone() {
    const rules = {
      phone: {
        required: true,
        tel:true,
      },
    }
    const messages = {
      phone: {
        required: '请填写手机号',
        tel:'请输入正确的手机号'
      },
    }
    this.WxValidatePhone = new WxValidate(rules, messages)
  },

  // 初始化校验规则
  initValidateAll() {
    const rules = {
      phone: {
        required: true,
        tel:true,
      },
      code:{
        required:true,
        minlength:6,
        maxlength:6,
      }
    }
    const messages = {
      phone: {
        required: '请填写手机号',
        tel:'请输入正确的手机号'
      },
      code:{
        required: '请输入验证码',
        minlength:'验证码错误',
        maxlength:'验证码错误',
      }
    }
    this.WxValidateAll = new WxValidate(rules, messages)
  },

  // 对电话号码进行验证——获取验证码按钮
  formSubmitPhone: function(){
    const params = {
      phone:this.data.vaulePhoneNumber,
    };
    //校验电话号码
    if (!this.WxValidatePhone.checkForm(params)) {
      const error = this.WxValidatePhone.errorList[0]
      this.showToast(error)
      return false
    }
    this.showToast({
      msg: '验证码已经发送，请注意查收！'
    })
    this.showAgainSend();
  },

  // 调用验证函数
  formSubmitAll: function(e) {
    console.log('form发生了submit事件，携带的数据为：', e.detail.value)
    const params = e.detail.value;
    //校验验证码
    if (!this.WxValidateAll.checkForm(params)) {
      const error = this.WxValidateAll.errorList[0]
      this.showToast(error)
      return false
    }
    this.showToast({
      msg: '提交成功'
    })
  },

  // 再次发送验证码
  againSendCode:function(){
    this.setData({
      isTimeShow:false,
      labelColor:'#c6c6c6',
    })
    this.formSubmitPhone();
  },

  changeMessage:function(e){
    const idx = e.detail.value;
    var msg = this.data.array[idx].number;
    this.setData({
      message: msg,
    })
  },

  showDelete:function(e){
    const idx = e.target.id;
    var len = e.detail.value.length;
    // 根据输入框的输入状态显示|隐藏清空按钮
    if(idx == 'phoneInput'){
      this.setData({
        isDeletePhone:true,
        getCode:true,   //显示获取验证码
      })
    }
    if(idx == 'codeInput'){
      this.setData({
        isDeleteCode:true,
      })
      // 当验证码输入完成时，启用按钮
      if(len == 6){
        this.setData({
          endisable:false,
        });
        // 再次验证电话号码
        const params = {
          phone:this.data.vaulePhoneNumber,
        };
        // 校验电话号码
        if (!this.WxValidatePhone.checkForm(params)) {
          const error = this.WxValidatePhone.errorList[0]
          this.showToast(error)
        }
      }
    }
  },

  // 获得焦点时，显示 delete 按钮
  hasFoucs:function(e){
    const idx = e.target.id;
    const len = e.detail.value.length;
    if(idx == 'phoneInput'){
      if(len != 0){
        this.setData({
          isDeletePhone:true,
          isDeleteCode:false,
        })
      } else {
        // const codeStatu =  this.data.isDeleteCode;
        this.setData({
          isDeleteCode:false,
          isDeletePhone:false,
        })
      }
    }
    if(idx == 'codeInput'){
      if(len != 0){
        this.setData({
          isDeleteCode:true,
          isDeletePhone:false,
        })
      } else {
        // const phoneStatu =  this.data.isDeletePhone;
        this.setData({
          isDeleteCode:false,
          isDeletePhone:false,
        })
      }
    }
  },

  // 重置input文本框
  resetPhoneInput:function(){
    this.setData({
      vaulePhoneNumber:null,
      isDeletePhone:false,
      getCode:false,
      countdown:1,  //控制后台倒计时，及时终止
      isAgainSend:false,
      endisable:this.data.canUsePwd&this.endisable,
    })
  },
  resetCodeInput:function(){
    console.log("我被点击了");
    this.setData({
      valueCodeNumber:null,
      isDeleteCode:false,
      endisable:false,
    })
  },


  changeState:function(){
    const bol = this.data.isShow;
    this.setData({
      isShow:!bol,
    })
  },
  getStatu:function(e){
    console.log(e.detail);
  },

  // 开启密码登录
  clickPassWord:function(){
    this.resetCodeInput();
    if(this.data.canUsePwd){
      this.setData({
        labelMsg:'密码',
        defaultValue:"验证码",
        maxlen:6,
        canUsePwd:false,
      })
    }else{
      this.setData({
        labelMsg:'验证码',
        defaultValue:"密码",
        maxlen:-1,
        canUsePwd:true,
      })
    }
  },

  jumpToPages:function(e){
    const idx = e.target.id;
    switch(idx){
      case 'btn1':console.log("this is "+idx);break;
      case 'btn2':
        wx.navigateTo({
          url: '../agreement/agreement',
        });
        wx.setNavigationBarTitle({ title:"逗趣视频用户协议"});
        break;
      case 'btn3':
        wx.navigateTo({
          url: '../agreement/agreement',
        });
        wx.setNavigationBarTitle({ title:"逗趣视频隐私政策"});
        break;
    }
  }
})
