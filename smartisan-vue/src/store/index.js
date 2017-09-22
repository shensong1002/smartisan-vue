import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  smallCarList: [] // 小购物车商品列表
}

const getters = {
  smallCarNum: state => { // 小购物车商品总数
    let num = 0
    state.smallCarList.forEach((item) => {
      num += item.sku_num
    })
    return num
  },
  smallCarPrice: state => { // 小购物车商品总价格
    let price = 0
    state.smallCarList.forEach((item) => {
      price += item.sku_num * item.price
    })
    return price
  }
}

const actions = {
}

const mutations = {
  changeSmallCarList(state, payload) {
    state.smallCarList = payload
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
