
import {SET_WHITELIST_BASIC_INFO} from '../../types'

export default {
  [SET_WHITELIST_BASIC_INFO] (state, basic) {
    state.basicInfo = {...state.basicInfo, ...basic}
  }
}
