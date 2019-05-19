// pages/detail/addsalegoods/addsalegoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemgoods:[
      {
        id: 1,
        status: true,
        imageurl: "../../image/demo1.jpg",
        goodstext: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339,
        munber: 1
      },
      {
        id: 2,
        status: false,
        imageurl: "../../image/demo1.jpg",
        goodstext: "D60-H3160升电热水器WIFI智能远程控制高温保养",
        money: 339,
        munber: 1
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
  // 减少商品数量
  itemremove: function (e) {
    let i = e.currentTarget.dataset.index;
    if (this.data.itemgoods[i].munber === 1) {
      return
    }
    let itemgoods = this.data.itemgoods;
    itemgoods[i].munber--;
    this.setData({
      itemgoods: itemgoods
    })
  },
  // 添加商品数量
  itemadd: function (e) {
    let i = e.currentTarget.dataset.index;
    let itemgoods = this.data.itemgoods;
    itemgoods[i].munber++;
    this.setData({
      itemgoods: itemgoods
    })
  },
})