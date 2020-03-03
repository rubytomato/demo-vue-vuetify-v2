import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    components: [
      { name: 'Home', path: '/', active: 'primary' },
      { name: 'Alert', path: '/alert', active: 'primary' },
      { name: 'Avatar', path: '/avatar', active: 'primary' },
      { name: 'Badge', path: '/badge', active: 'primary' },
      { name: 'Button', path: '/button', active: 'primary' },
      { name: 'Button2', path: '/button2', active: 'primary' },
      { name: 'ButtonGroup', path: '/button/group', active: 'primary' },
      { name: 'Calendar', path: '/calendar', active: 'primary' },
      { name: 'Card', path: '/card', active: 'primary' },
      { name: 'Chip', path: '/chip', active: 'primary' },
      { name: 'ChipGroup', path: '/chip/group', active: 'primary' },
      { name: 'Dialog', path: '/dialog', active: 'primary' },
      { name: 'Footer', path: '/footer', active: 'primary' },
      { name: 'Grid', path: '/grid', active: 'primary' },
      { name: 'Icon', path: '/icon', active: 'primary' },
      { name: 'Image', path: '/image', active: 'primary' },
      { name: 'List', path: '/list', active: 'primary' },
      { name: 'ListGroup', path: '/list/group', active: 'primary' },
      { name: 'ListItemGroup', path: '/list/item/group', active: 'primary' },
      { name: 'Menu', path: '/menu', active: 'primary' },
      { name: 'Pagination', path: '/pagination', active: 'primary' },
      { name: 'Sheet', path: '/sheet', active: 'primary' },
      { name: 'Stepper', path: '/stepper', active: 'primary' },
      { name: 'Tooltip', path: '/tooltip', active: 'primary' }
    ]
  },
  getters: {},
  mutations: {},
  actions: {},
  modules: {}
})

export default store
