// pages/videoFind/videoFind.js
const appInst = getApp();
const systemData = appInst.globalData.systemData;

Page({
    /**
     * 页面的初始数据
     */
    data: {
        bgcolor: "white",
        systemData: {},
        currentTab: 2,
        scrollwithanimation: false,
        // 当前登录用户的信息
        personal: {
            avatar: "../resource/images/1213.jpg",
            nickname: "ddpapa",
            description: "先知其然，然后知其所以然。。。。。。。。。。。。。。。。。。。。。。结果僧分散佛三国"
        },
        // tabbar
        list: [{
                "text": "同城",
                "selected": "wide",
            },
            {
                "text": "关注",
                "selected": "wide",
            },
            {
                "text": "发现",
                "selected": "wide",
            }
        ],

        // 侧边列表功能区数据
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

        tabBarStyle: {
            leftBarName: "liebiao2-copy",
            rightBarName: "shexiangji-copy",
            tabItemBgColorDefault: ["#e6e6e6", "#e6e6e6", "#e6e6e6"],
            tabItemBgColorSelected: ["white", "white", "white"],
            slideBgColorDefault: "transparent",
            slideBgColorSelected: ["white", "white", "white"]
        },

        // 同城热门标签
        hostlabel: [{
            "name": "直播广场",
            "url": "#"
        }, {
            "name": "附近游戏",
            "url": "#"
        }],

        //封面列表渲染数组
        videolist: [{
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1214.jpg",
                "createTIME": "7小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1213.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },
            {
                "imagesURL": "../../../pages/resource/images/cover123.jpg",
                "avatarURL": "../../../pages/resource/images/1216.jpg",
                "createTIME": "23小时"
            },

        ],

        dataList: [{
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                // @API
                author: "虾米经典音乐",
                // @API
                description: "当年他们也是很青涩，也会紧张到忘词跑调",
                // @API
                bgm: "虾米经典音乐的作品原声",
                // @API
                avatar: "../pages/resource/images/1213.jpg",
                // @API
                likes: "11w",
                // @API
                comments: "6669",
            },
            {
                url: "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
                // @API
                author: "虾米经典音乐",
                // @API
                description: "当年他们也是很青涩，也会紧张到忘词跑调",
                // @API
                bgm: "虾米经典音乐的作品原声",
                // @API
                avatar: "../pages/resource/images/1214.jpg",
                // @API
                likes: "132w",
                // @API
                comments: "11w",
            }
        ],
    },
    onLoad: function() {
        this.setData({
                systemData,
            })
            // this.createNavItem1Observer();
            // this.createNavItem2Observer();
        console.log("+++++++++++++++++++++++++++++++++");
    },

    onShow: function() {
        this.setData({
            scrollwithanimation: true,
        })
    },

    /**
     * 页面卸载
     */
    onUnload: function() {
        if (this._navObserver1) this._navObserver1.diconnect();
        if (this._navObserver2) this._navObserver2.diconnect();
    },

    /** 
     * 监听导航栏中的文字和最后一页的位置
     */
    createNavItem2Observer: function() {
        let that = this;
        that._navObserver2 = wx.createIntersectionObserver(that, {
            observeAll: true,
        });
        that._navObserver2.relativeTo("#item2", { left: 0 }).observe(".text-item", (res) => {
            console.log(res);
            if (res.intersectionRatio > 0) {
                // 监控目标进入
                if (res.id == 'leftBar') {
                    that.setData({
                        'tabBarStyle.leftBarName': 'liebiao2-copy'
                    })
                } else if (res.id == 'rightBar') {
                    that.setData({
                        'tabBarStyle.rightBarName': 'shexiangji-copy'
                    })
                } else {
                    var idx = Number(res.id.replace("tab-", ""));
                    var key0 = 'tabBarStyle.tabItemBgColorDefault[' + idx + ']';
                    var key1 = 'tabBarStyle.tabItemBgColorSelected[' + idx + ']';
                    var key2 = 'tabBarStyle.slideBgColorSelected[' + idx + ']';
                    that.setData({
                        [key0]: '#e6e6e6',
                        [key1]: 'white',
                        [key2]: 'white'
                    })
                }
            } else {
                if (res.id == 'leftBar') {
                    that.setData({
                        'tabBarStyle.leftBarName': 'liebiao2'
                    })
                } else if (res.id == 'rightBar') {
                    that.setData({
                        'tabBarStyle.rightBarName': 'shexiangji'
                    })
                } else {
                    var idx = Number(res.id.replace("tab-", ""));
                    var key0 = 'tabBarStyle.tabItemBgColorDefault[' + idx + ']';
                    var key1 = 'tabBarStyle.tabItemBgColorSelected[' + idx + ']';
                    var key2 = 'tabBarStyle.slideBgColorSelected[' + idx + ']';
                    that.setData({
                        [key0]: '#c6c6c6',
                        [key1]: '#222222',
                        [key2]: '#222222'
                    })
                }
            }
        });
    },

    createNavItem1Observer: function() {
        let that = this;
        that._navObserver1 = wx.createIntersectionObserver(that, {
            observeAll: true,
        });
        that._navObserver1.relativeTo("#item1", { right: 0 }).observe(".text-item", (res) => {
            console.log(res);
            if (this.data.currentTab == 2) {
                if (res.intersectionRatio > 0) {
                    // 监控目标进入
                    if (res.id == 'leftBar') {
                        that.setData({
                            'tabBarStyle.leftBarName': 'liebiao2'
                        })
                    } else if (res.id == 'rightBar') {
                        that.setData({
                            'tabBarStyle.rightBarName': 'shexiangji'
                        })
                    } else {
                        var idx = Number(res.id.replace("tab-", ""));
                        var key0 = 'tabBarStyle.tabItemBgColorDefault[' + idx + ']';
                        var key1 = 'tabBarStyle.tabItemBgColorSelected[' + idx + ']';
                        var key2 = 'tabBarStyle.slideBgColorSelected[' + idx + ']';
                        that.setData({
                            [key0]: '#c6c6c6',
                            [key1]: '#222222',
                            [key2]: '#222222'
                        })
                    }
                } else {
                    // 监控目标进入
                    if (res.id == 'leftBar') {
                        that.setData({
                            'tabBarStyle.leftBarName': 'liebiao2-copy'
                        })
                    } else if (res.id == 'rightBar') {
                        that.setData({
                            'tabBarStyle.rightBarName': 'shexiangji-copy'
                        })
                    } else {
                        var idx = Number(res.id.replace("tab-", ""));
                        var key0 = 'tabBarStyle.tabItemBgColorDefault[' + idx + ']';
                        var key1 = 'tabBarStyle.tabItemBgColorSelected[' + idx + ']';
                        var key2 = 'tabBarStyle.slideBgColorSelected[' + idx + ']';
                        that.setData({
                            [key0]: '#e6e6e6',
                            [key1]: 'white',
                            [key2]: 'white'
                        })
                    }
                }
            }
        })
    },

    /**
     * 
     * @param {*} event 
     * @description 切换tab有两种方式：1.点击切换 2.滑动切换
     */
    changeSelected: function(event) {
        var currentTarget;
        if (event.type === "change") {
            currentTarget = "tab-" + event.detail.current;
        } else {
            currentTarget = event.currentTarget.id;
        }
        console.log(currentTarget);
        switch (currentTarget) {
            case "tab-0":
                {
                    console.log("同城");
                    var tabBarStyle = {
                        leftBarName: "liebiao2",
                        rightBarName: "shexiangji",
                        tabItemBgColorDefault: ["#c6c6c6", "#c6c6c6", "#c6c6c6"],
                        tabItemBgColorSelected: ["#222222", "#222222", "#222222"],
                        slideBgColorDefault: "transparent",
                        slideBgColorSelected: ["#222222", "#222222", "#222222"]
                    };
                    this.setData({
                        currentTab: 0,
                        tabBarStyle,
                    })
                };
                break;
            case "tab-1":
                {
                    console.log("关注");
                    var tabBarStyle = {
                        leftBarName: "liebiao2",
                        rightBarName: "shexiangji",
                        tabItemBgColorDefault: ["#c6c6c6", "#c6c6c6", "#c6c6c6"],
                        tabItemBgColorSelected: ["#222222", "#222222", "#222222"],
                        slideBgColorDefault: "transparent",
                        slideBgColorSelected: ["#222222", "#222222", "#222222"]
                    };
                    this.setData({
                        currentTab: 1,
                        tabBarStyle,
                    })
                };
                break;
            case "tab-2":
                {
                    console.log("发现");
                    var tabBarStyle = {
                        leftBarName: "liebiao2-copy",
                        rightBarName: "shexiangji-copy",
                        tabItemBgColorDefault: ["#e6e6e6", "#e6e6e6", "#e6e6e6"],
                        tabItemBgColorSelected: ["white", "white", "white"],
                        slideBgColorDefault: "transparent",
                        slideBgColorSelected: ["white", "white", "white"]
                    };
                    this.setData({
                        currentTab: 2,
                        tabBarStyle,
                    })
                };
                break;
        }
    },

    /**
     * 
     */
    gainLeftWidth: function(e) {
        console.log(e);
    },

    /**
     * 用户点击：头像、昵称、个人描述跳转至个人信息页面
     */
    gotoUserIndex: function() {
        wx.navigateTo({
            url: '../user/index/index',
        })
    },

    /**
     * 用户点击相机组件，跳转至相机按钮
     */
    gotoCamera: function() {
        wx.navigateTo({
            url: '../camera/camera',
        })
    },

    /**
     * 用户点击列表中的事件
     */
    tapList: function(e) {
        console.log(e);
        const targetItem = e.detail.id;
        switch (targetItem) {
            case "item6":
                {
                    wx.navigateTo({
                        url: '../setup/setup',
                    })
                };
                break;
        }
    }
})