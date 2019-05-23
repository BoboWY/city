// pages/components/itemgoods/itemgoods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsData:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemgoods:function(e){
      let id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: '/pages/detail/itemgoods/itemgoods?id='+id,
      })
    }
  }
})
