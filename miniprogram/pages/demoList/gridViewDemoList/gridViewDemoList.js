// miniprogram/pages/demoList/gridViewDemoList/gridViewDemoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataArr: [
      {
        text: 'GridView1 - 动态数据',
        pathUrl: '/pages/demoList/gridViewDemoList/gridView/gridView1'
      },
       {
        text: 'GridView2 - 固定头尾',
        pathUrl: '/pages/demoList/gridViewDemoList/gridView/gridView2'
      }, 
      {
        text: 'GridView3 - 固定头尾',
        pathUrl: '/pages/demoList/gridViewDemoList/gridView/gridView3'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: 'gridView1DemoList'
    })
  },

})