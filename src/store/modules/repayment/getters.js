export default {
  getRepaymentListInfo (state) {
    return state.repaymentList
  },

  getLoanListInfo (state) {
    return state.loanList
  },

  // 保存loanlist单据信息
  getLoanList (state) {
    return state.loanListInfo
  }

}
