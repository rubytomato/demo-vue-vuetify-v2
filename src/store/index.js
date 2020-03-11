import Vue from 'vue'
import Vuex from 'vuex'
import components from '@/assets/json/components.json'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    components
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export default store
