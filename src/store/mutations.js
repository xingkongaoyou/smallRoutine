
import { SET_HOME_INFO, FETCH_HOME_WASHROOM, SAVE_HOME_DERAILTYPE } from './types'

export default {
  [SET_HOME_INFO] (start, info) {
    start.homeInfo = {
      ...start.homeInfo,
      ...info
    }
  },
  [FETCH_HOME_WASHROOM] (start, info) {
    start.homeWashroom = {
      ...start.homeWashroom,
      ...info
    }
  },
  [SAVE_HOME_DERAILTYPE] (start, data) {
    start.home.derailType = data
  }
}
