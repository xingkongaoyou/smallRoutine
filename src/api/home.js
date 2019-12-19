import requestUrl from '../utils/http'

export function fetchHome (params) {
  return requestUrl({
    url: '/k/home',
    data: params,
    method: 'GET'
  })
}
export function fetchWashroom (params) {
  return requestUrl({
    url: '/k/washroom',
    data: params,
    method: 'POST'
  })
}
