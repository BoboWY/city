// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    homeImage:[
      "pages/image/demo1.jpg",
      "pages/image/demo2.jpg"
    ],
    // 新品商品
    itemgoodsdata:[
      {
        id: 1,
        image: "../../image/demo1.jpg",
        text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339
      }
    ],
    // 热销商品
    saledata: [
      {
        id: 1,
        image: "../../image/demo1.jpg",
        text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339
      },
      {
        id: 2,
        image: "../../image/demo1.jpg",
        text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339
      },
      {
        id: 3,
        image: "../../image/demo1.jpg",
        text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339
      }
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

  // 查看更多新增商品
  goodsmore:function(e){
    wx.navigateTo({
      url: '../detail/addgoods/addgoods',
    })
  },
  // 查看单个商品详情
  itemgoods:function(e){
    wx.navigateTo({
      url: '../detail/itemgoods/itemgoods',
    })
  }
})