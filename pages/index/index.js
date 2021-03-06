//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    qqbind: false
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../bind/bind'
    })
  },
  bindOrderTap: function () {
    wx.navigateTo({
      url: '../order/order'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
      console.log(app.globalData.qq)
      if (app.globalData.qq) {
        that.setData({
          qqbind: true
        })
      } else {
        that.setData({
          qqbind: false
        })
      }
    })
  }
})
