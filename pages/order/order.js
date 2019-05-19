// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navList:[
        {
          id:1,
          text:'全部'
        },
        {
          id: 1,
          text: '待审核'
        },
        {
          id: 1,
          text: '已审核'
        },
        {
          id: 1,
          text: '已发货'
        },
        {
          id: 1,
          text: '已收货'
        },
      ],
      active: 0,// 订单状态 0:全部 1:待审核 2:已审核 3:已发货 4:已收货
      itemgoods:[
        {
          id:1,
          ordermunber: 6452554511131,
          active: '待审核',
          goods:[
            {
              id:1,
              imageurl:'../image/demo1.jpg',
              text:"D60-H3160升电热水器WIFI智能远程控制高温保养",
              money:339,
              munber:1
            },
            {
              id: 2,
              imageurl: '../image/demo1.jpg',
              text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
              money: 339,
              munber: 2
            }
          ],
          total: 3
        },
        {
          id: 2,
          ordermunber: 6452554511131,
          active: '已审核',
          goods: [
            {
              id: 1,
              imageurl: '../image/demo1.jpg',
              text: "D60-H3160升电热水器WIFI智能远程控制高温保养",
              money: 339,
              munber: 2
            }
          ],
          total: 2
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
  // 导航栏
  navBind:function(e){
    // console.log("e->",e)
    let i = e.currentTarget.dataset.index;
    this.setData({
      active:i
    })
  },
  // 订单详情
  orderdetail:function(){
    wx.navigateTo({
      url: '../detail/orderdetail/orderdetail',
    })
  }
})