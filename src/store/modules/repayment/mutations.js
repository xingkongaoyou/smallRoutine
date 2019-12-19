
import {FETCH_REPAYMENT_LIST, FETCH_LOAN_LIST, SAVE_LOAN_LIST_INFO} from '../../types'

export default {
  [FETCH_REPAYMENT_LIST] (state, info) {
    state.repaymentList = {...state.repaymentList, ...info}
  },
  [FETCH_LOAN_LIST] (state, info) {
    state.loanList = {...state.loanList, ...info}
  },
  [SAVE_LOAN_LIST_INFO] (state, info) {
    state.loanListInfo = {...state.loanListInfo, ...info}
  }
}
