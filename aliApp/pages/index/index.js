import city from '../../static/cityList'
Page({
  data: {
    chsCityshow: 1
  },
  onLoad(query) {
    let city_g = [
      {
        name: "中国",
        subList: city
      },
      {
        name: "美国",
        subList: [
          {
            name: "加尼福尼亚",
            subList: [
              {
                name: "洛杉矶",
                subList: [
                  {
                    name: "日落大道‎",
                    subList: [
                      {
                        name: "加利福尼亚大学洛杉矶分校"
                      }, {
                        name: "比佛利山酒店"
                      }
                    ]
                  },
                  {
                    name: '穆赫兰大道',
                    subList: [
                      {
                        name: '穆赫兰公路'
                      },
                      {
                        name: "圣莫尼卡山脉"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ];
    this.setData({
      city:city_g
    })
  },
  showChsCity() {
    this.setData({
      chsCityshow: 1
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: 'My App',
      desc: 'My App description',
      path: 'pages/index/index',
    };
  },
});
