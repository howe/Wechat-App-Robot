
var app = getApp()
Page({
    data: {
        hiddenLoading: true,
        tip: '',
        qq: '',
        name: ''
    },
    formBindSubmit: function (e) {
        var that = this
        if (e.detail.value.qq.length == 0 || e.detail.value.name.length == 0) {
            that.setData({
                tip: 'QQ和姓名不能为空！'
            })
        } else {
            that.setData({
                tip: '',
                hiddenLoading: false
            })
            wx.request({
                url: app.globalData.base + '/bind',
                method: 'POST',
                data: {
                    qq: e.detail.value.qq,
                    name: e.detail.value.name
                },
                header: {
                    'Accept': 'application/json'
                },
                success: function (res) {
                    console.log(res)
                    if (res.statusCode == 200 && res.data.code == 0) {
                        app.globalData.qq = e.detail.value.qq
                        wx.setStorageSync('qq', app.globalData.qq)
                        that.setData({
                            tip: res.data.msg,
                            hiddenLoading: true
                        })
                        wx.navigateTo({
                            url: '../index/index'
                        })
                    } else if (res.statusCode == 200) {
                        that.setData({
                            tip: res.data.msg,
                            hiddenLoading: true
                        })
                    } else  {
                        that.setData({
                            tip: '',
                            hiddenLoading: true
                        })
                    }
                }
            })
        }
    },
    onLoad: function () {
        console.log('bind')
        var that = this

    }
})
