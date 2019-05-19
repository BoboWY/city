// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navList:[
      {
        id:1,
        icon:"/pages/image/after_sales.png",
        text:"售后反馈"
      },
      {
        id: 2,
        icon: "/pages/image/sales.png",
        text: "销售库存"
      },
      {
        id: 3,
        icon: "/pages/image/goods.png",
        text: "商品库存"
      },
      {
        id: 4,
        icon: "/pages/image/map.png",
        text: "收货地址"
      },
      {
        id: 5,
        icon: "/pages/image/menber.png",
        text: "联系德伟速达"
      },
      {
        id: 6,
        icon: "/pages/image/after_sales.png",
        text: "数据分析"
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
  // 设置星级
  starclass:function(){
    wx.navigateTo({
      url: '../detail/starclass/starclass',
    })
  },
  // 消息详情
  information:function(){
    wx.navigateTo({
      url: '../detail/information/information',
    })
  },
  // 列表信息
  navListBind:function(e){
    let i = e.currentTarget.dataset.id;
    if(i === 1){
      wx.navigateTo({
        url: '../detail/sale/sale',
      })
    }else if(i === 2){
      wx.navigateTo({
        url: '../detail/stock/stock', //销售出库
        // url:"../detail/salegoods/salegoods" //销售详情
        // url:'../detail/addsalegoods/addsalegoods' //销售填写
      })
    }else if(i === 3){
      wx.navigateTo({
        url: '../detail/goods/goods',
      })
    }else if(i === 4){
      wx.navigateTo({
        url: '../detail/addre/addre',
      })
    }else if(i === 5){
      wx.navigateTo({
        url: '../detail/express/express',
        // url:'../detail/loginexpress/loginexpress'  德伟速达登录
      })
    }else if(i === 6){
      wx.navigateTo({
        url: '../detail/goodsdata/goodsdata',
      })
    }
  }
})