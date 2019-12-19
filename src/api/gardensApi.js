import requestUrl from '../utils/http'
/**
 * 说明：返回公厕列表数据
 * @param {*} data       查询条件
 * @param {*} success    获取数据成功
 */
export function getRestRoomList (data = {}) {
  return requestUrl({
    url: '/k/home',
    data: data,
    method: 'GET'
  })
}
