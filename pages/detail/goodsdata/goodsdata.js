// pages/detail/goodsdata/goodsdata.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemgoods:[
      {
        id:1,
        image:"/pages/image/region.png",
        text:"区域分布"
      },
      {
        id: 2,
        image: "/pages/image/goodstotal.png",
        text: "商品销售统计"
      },
      {
        id: 3,
        image: "/pages/image/storetotal.png",
        text: "门店进货统计"
      },
      {
        id: 4,
        image: "/pages/image/ordertotal.png",
        text: "订单统计"
      },
      {
        id: 5,
        image: "/pages/image/stocktotal.png",
        text: "库存分析"
      },
      {
        id: 6,
        image: "/pages/image/customertotal.png",
        text: "客户分析"
      },
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
  dataBind:function(e){
    let i = e.currentTarget.dataset.id;
    if(i === 1){
      wx.navigateTo({
        url: '../region/region', //区域分布
      })
    }else if(i === 2){
      wx.navigateTo({
        url: '../goodstotal/goodstotal',//商品销售统计
      })
    }else if(i === 3){
      wx.navigateTo({
        url: '../storetotal/storetotal',//门店统计
      })
    }else if(i === 4){
      wx.navigateTo({
        url: '../ordertotal/ordertotal', //订单统计
      })
    }else if(i === 5){
      wx.navigateTo({
        url: '../stocktotal/stocktotal',//库存分析
      })
    }else if(i === 6){
      wx.navigateTo({
        url: '../customertotal/customertotal',//客户分析
      })
    }
  }
})