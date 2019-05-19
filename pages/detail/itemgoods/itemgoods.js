// pages/detail/itemgoods/itemgoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeImage:[
      "pages/image/demo1.jpg",
      "pages/image/demo2.jpg"
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 返回首页
  homeBind:function(){
    wx.switchTab({
      url: '../../home/home',
    })
  },
  // 返回购物车
  shopBind:function(){
    wx.switchTab({
      url: '../../shop/shop',
    })
  },
  // 立即购买
  paygoods:function(){
    wx.navigateTo({
      url: '../paygoods/paygoods',
    })
  }
})