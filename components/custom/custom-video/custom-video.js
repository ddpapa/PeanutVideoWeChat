// miplayer/miplayer.js
const appInst = getApp();
const systemData = appInst.globalData.systemData;
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        videoList: Array,
    },

    /**
     * 组件的初始数据
     */
    data: {
        // 显示或者隐藏播放按钮
        pauseHiden: false,
        // 当前视频的播放状态
        isplaying: true,
    },

    /**
     * 组件生命周期
     */
    lifetimes: {
        attached: function() {
            wx.createVideoContext('video-0', this).pause();
            this.setData({
                systemData,
            });
        }
    },

    /**
     * 组件的方法列表
     */
    methods: {
        pauseVideo: function(e) {
            console.log(e);
            const currentVideo = wx.createVideoContext(e.currentTarget.id, this);
            console.log(currentVideo);
            if (this.data.isplaying) {
                currentVideo.pause();
                this.setData({
                    isplaying: false,
                    pauseHiden: true,
                })
            } else {
                currentVideo.play();
                this.setData({
                    isplaying: true,
                    pauseHiden: false,
                })
            }
        },

        checkVideos: function(e) {
            const current_videoId = e.detail.current;
            const prev_videoId = current_videoId - 1;
            const next_videoId = current_videoId + 1;
            console.log("current_videoId:" + current_videoId);
            if (prev_videoId >= 0) {
                wx.createVideoContext("video-" + prev_videoId, this).pause();
            }
            if (next_videoId >= 0) {
                wx.createVideoContext("video-" + next_videoId, this).pause();
            }
            var videoContentCurrent = wx.createVideoContext("video-" + current_videoId, this);
            videoContentCurrent.play();
            this.setData({
                isplaying: true,
                pauseHiden: false,
            })
        },
    }
})