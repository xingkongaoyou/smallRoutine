import {
  FETCH_REPAYMENT_LIST,
  FETCH_LOAN_LIST,
  SAVE_LOAN_LIST_INFO
} from '../../types'
import * as repaymentService from '../../../utils/services/repayment'

export default {
  /**
     * @desc 获取repayment list数据
     * @param {Object} state
     * @param {String} params
     * @return {Promise}
     */
  fetchRepaymentList ({commit}, params) {
    return new Promise((resolve, reject) => {
      repaymentService.fetchRepaymentList(params)
        .then(basic => {
          commit(FETCH_REPAYMENT_LIST, basic)
          resolve(basic)
        }, err => {
          reject(err)
        })
    })
  },

  /**
     * @desc 获取repayment loan-list数据
     * @param {Object} state
     * @return {Promise}
     */
  fetchLoanList ({commit}, info) {
    return new Promise((resolve, reject) => {
      repaymentService.fetchLoanList(info)
        .then(basic => {
          commit(FETCH_LOAN_LIST, basic)
          resolve(basic)
        }, err => reject(err))
    })
  },

  /**
     * @desc 设置保存基本信息
     * @param {Object} state
     * @param {Object} basic
     */
  saveLoanListInfo ({commit}, basic) {
    commit(SAVE_LOAN_LIST_INFO, basic)
  }

}
