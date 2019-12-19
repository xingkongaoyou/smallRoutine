/* 公共request 方法 */
const requestUrl = ({
  url,
  params,
  method = 'post'
}) => {
  wx.showLoading({
    title: '加载中'
  })
  let server = 'http://192.168.1.154:3000'// 正式域名
  // let server = 'http://dxxx.xxxxxxxxxx.cn';//测试域名

  let sessionId = wx.getStorageSync('sid'),
    that = this

  if (sessionId != '' && sessionId != null && sessionId ) {
    var header = { 'content-type': 'application/x-www-form-urlencoded', 'Cookie': 'sid=' + sessionId }
  } else {
    var header = { 'content-type': 'application/x-www-form-urlencoded'}
  }
  return new Promise(function (resolve, reject) {
    wx.request({
      url: server + url,
      method: method,
      data: params,
      header: header,
      success: (res) => {
        wx.hideLoading()
        // if (sessionId == '' || sessionId == null) {
        //   wx.setStorageSync('sid', res.data.info.sessionId)//  如果本地没有就说明第一次请求 把返回的 sessionId 存入本地
        // }
        if (res.data.result === 'error' || res['statusCode'] !== 200) {
          wx.showToast({
            title: res.data&&res.data.msg || '请求出错',
            icon: 'none',
            duration: 2000,
            mask: true
          })
        }
        resolve(res.data)
      },
      fail: function (res) {
        wx.hideLoading()
        wx.showToast({
          title: res.data&&res.data.msg || '请求失败',
          icon: 'none',
          duration: 2000,
          mask: true
        })
        reject(res.data)
      },
      complete: function () {
        wx.hideLoading()
      }
    })
  }).catch((res) => {
      console.log(res);
     })
}
/* 公共showTotast  loading 方法 */
export default requestUrl
