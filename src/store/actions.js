import { SET_HOME_INFO, FETCH_HOME_WASHROOM } from './types'
import * as homeApi from '../api/home'

export default {
  fetchHome ({commit}, params) {
    return new Promise((resolve, reject) => {
      homeApi.fetchHome(params).then(basic => {
        basic.data.map(val => {
          val.dis = val.dis.toFixed(2)
        })
        commit(SET_HOME_INFO, basic)
        resolve(basic)
      })
    })
  },
  fetchWashroom ({commit}, params) {
    return new Promise((resolve, reject) => {
      homeApi.fetchWashroom(params).then(res => {
        commit(FETCH_HOME_WASHROOM, res)
        resolve(res)
      })
    })
  }
}
