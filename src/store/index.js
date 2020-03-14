import Vue from 'vue'
import Vuex from 'vuex'
import components from '@/assets/json/components.json'
import friends from './friends'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    components
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    friends
  }
})

export default store
