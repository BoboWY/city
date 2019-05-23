// pages/class/class.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 侧边栏数据
      navtitle:[
        {
          id:1,
          text:"厨房电器"
        },
        {
          id: 2,
          text: "家用电器"
        },

        {
          id: 3,
          text: "手机用品"
        }
      ],
      active:1,
      // 单个商品
    itemgoodsdata:[
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
        money: 450
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
  // 侧边栏激活路由
  activenav:function(e){
    let active = e.currentTarget.dataset.id;
    this.setData({
      active:active
    })
  },
  // 商品 详情
  goodsdetail:function(){
    wx.navigateTo({
      url: '../detail/itemgoods/itemgoods',
    })
  }
})