import {
  SET_WHITELIST_BASIC_INFO
} from '../../types'
import * as whitelistService from '../../../utils/services/whitelist'

export default {
  /**
     * @desc 查询白名单基本信息
     * @param {Object} state
     * @return {Promise}
     */
  fetchWhitelistBasicInfo ({ commit }) {
    return new Promise((resolve, reject) => {
      whitelistService.fetchWhitelistBasicInfo()
        .then(basic => {
          commit(SET_WHITELIST_BASIC_INFO, basic)
          resolve(basic)
        }, err => reject(err))
    })
  },
  /**
     * @desc 保存基本信息
     * @param {Object} state
     * @param {Object} basic
     * @return {Priomise}
     */
  saveWhitelistBasicInfo ({commit}, basic) {
    return new Promise((resolve, reject) => {
      whitelistService.saveWhitelistBasicInfo(basic)
        .then(result => resolve(result), err => reject(err))
    })
  },
  /**
     * @desc 发送邮箱验证码
     * @param {Object} state
     * @param {String} mail - 邮箱地址
     * @return {Promise}
     */
  sendEmailVerifyCode ({ commit }, mail) {
    return new Promise((resolve, reject) => {
      whitelistService.sendEmailVerifyCode(mail)
        .then(result => {
          resolve(result)
        }, err => {
          reject(err)
        })
    })
  },
  /**
     * @desc 校验申请白名单相关信息
     * @param {Object} state
     * @param {Object} info - 校验信息
     * @return {Promise}
     */
  checkWhiteListApplyInfo ({ commit }, info) {
    return new Promise((resolve, reject) => {
      whitelistService.checkWhiteListApplyInfo(info)
        .then(result => resolve(result), err => {
          reject(err)
        })
    })
  },
  /**
     * @desc 发送申请加入白名单信息
     * @param {Object} state
     * @param {Object} info
     * @return {Promise}
     */
  applyWhitelist ({commit}, info) {
    return new Promise((resolve, reject) => {
      whitelistService.applyWhitelist(info)
        .then(result => resolve(result), err => reject(err))
    })
  },
  /**
     * @desc 设置保存基本信息
     * @param {Object} state
     * @param {Object} basic
     */
  setBasicInfo ({commit}, basic) {
    commit(SET_WHITELIST_BASIC_INFO, basic)
  }
}
