// pages/detail/paygoods/paygoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表
      itemgoods:[
        {
          id:1,
          imageurl:"../../image/demo1.jpg",
          goodstext:"D60-H3160升电热水器WIFI智能远程控制高温保养",
          money:339,
          munber:1
        },
        {
          id: 2,
          imageurl: "../../image/demo1.jpg",
          goodstext: "D60-H3160升电热水器WIFI智能远程控制高温保养",
          money: 339,
          munber: 1
        }
      ],
      // 商品金额
    mode:[
      {
        id:1,
        text:'商品金额',
        money:600.00
      },
      {
        id: 1,
        text: '运费',
        money: 10.00
      },
      {
        id: 1,
        text: '合计',
        money: 610.00
      },
      {
        id: 1,
        text: '折扣优惠',
        money: 100.00
      },
      {
        id: 1,
        text: '实付款',
        money: 510.00
      }
    ],
    payoutline:true,
    payonline:false
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
  itemremove:function(e){
    let i = e.currentTarget.dataset.index;
    if (this.data.itemgoods[i].munber === 1){
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
      itemgoods:itemgoods
    })
  },
  // 线下支付
  paymode:function(){
    let payoutline = this.data.payoutline;
    let payonline = this.data.payonline;
    if (payonline){
      payonline =  false;
    }
    payoutline = !payoutline;
    this.setData({
      payoutline: payoutline,
      payonline: payonline
    })
  },
  // 线上支付
  paymodeline: function () {
    let payoutline = this.data.payoutline;
    let payonline = this.data.payonline;
    if (payoutline) {
      payoutline = false;
    }
    payonline = !payonline;
    this.setData({
      payonline: payonline,
      payoutline: payoutline
    })
  }
})