import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/Home.vue')
  },
  {
    path: '/alert',
    name: 'Alert',
    component: () => import(/* webpackChunkName: "Alert" */ '../views/demo/Alert.vue')
  },
  {
    path: '/avatar',
    name: 'Avatar',
    component: () => import(/* webpackChunkName: "Avatar" */ '../views/demo/Avatar.vue')
  },
  {
    path: '/badge',
    name: 'Badge',
    component: () => import(/* webpackChunkName: "Badge" */ '../views/demo/Badge.vue')
  },
  {
    path: '/button',
    name: 'Button',
    component: () => import(/* webpackChunkName: "Button" */ '../views/demo/button/Button.vue')
  },
  {
    path: '/button2',
    name: 'Button2',
    meta: { layout: 'no-header-footer' },
    component: () => import(/* webpackChunkName: "Button2" */ '../views/demo/button/Button2.vue')
  },
  {
    path: '/button/group',
    name: 'ButtonGroup',
    component: () => import(/* webpackChunkName: "ButtonGroup" */ '../views/demo/button/ButtonGroup.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "Calendar" */ '../views/demo/Calendar.vue')
  },
  {
    path: '/card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "Card" */ '../views/demo/Card.vue')
  },
  {
    path: '/chip',
    name: 'Chip',
    component: () => import(/* webpackChunkName: "Chip" */ '../views/demo/chip/Chip.vue')
  },
  {
    path: '/chip/group',
    name: 'ChipGroup',
    component: () => import(/* webpackChunkName: "ChipGroup" */ '../views/demo/chip/ChipGroup.vue')
  },
  {
    path: '/dialog',
    name: 'Dialog',
    component: () => import(/* webpackChunkName: "Dialog" */ '../views/demo/Dialog.vue')
  },
  {
    path: '/grid/p1',
    name: 'GridP1',
    component: () => import(/* webpackChunkName: "GridP1" */ '../views/demo/grid/p1.vue')
  },
  {
    path: '/grid/p2',
    name: 'GridP2',
    component: () => import(/* webpackChunkName: "GridP2" */ '../views/demo/grid/p2.vue')
  },
  {
    path: '/grid/p3',
    name: 'GridP3',
    component: () => import(/* webpackChunkName: "GridP3" */ '../views/demo/grid/p3.vue')
  },
  {
    path: '/grid/p4',
    name: 'GridP4',
    component: () => import(/* webpackChunkName: "GridP4" */ '../views/demo/grid/p4.vue')
  },
  {
    path: '/grid/p5',
    name: 'GridP5',
    component: () => import(/* webpackChunkName: "GridP5" */ '../views/demo/grid/p5.vue')
  },
  {
    path: '/icon',
    name: 'Icon',
    component: () => import(/* webpackChunkName: "Icon" */ '../views/demo/Icon.vue')
  },
  {
    path: '/image',
    name: 'Image',
    component: () => import(/* webpackChunkName: "Image" */ '../views/demo/Image.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import(/* webpackChunkName: "List" */ '../views/demo/list/List.vue')
  },
  {
    path: '/list/group',
    name: 'ListGroup',
    component: () => import(/* webpackChunkName: "ListGroup" */ '../views/demo/list/ListGroup.vue')
  },
  {
    path: '/list/group/:sub/:no',
    name: 'ListGroup',
    component: () => import(/* webpackChunkName: "ListGroupSubNo" */ '../views/demo/list/ListGroup.vue')
  },
  {
    path: '/list/item/group',
    name: 'ListItemGroup',
    component: () => import(/* webpackChunkName: "ListItemGroup" */ '../views/demo/list/ListItemGroup.vue')
  },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import(/* webpackChunkName: "Menu" */ '../views/demo/Menu.vue')
  },
  {
    path: '/pagination',
    name: 'Pagination',
    component: () => import(/* webpackChunkName: "Pagination" */ '../views/demo/Pagination.vue')
  },
  {
    path: '/sheet',
    name: 'Sheet',
    component: () => import(/* webpackChunkName: "Sheet" */ '../views/demo/Sheet.vue')
  },
  {
    path: '/stepper',
    name: 'Stepper',
    component: () => import(/* webpackChunkName: "Stepper" */ '../views/demo/Stepper.vue')
  },
  {
    path: '/tooltip',
    name: 'Tooltip',
    component: () => import(/* webpackChunkName: "Tooltip" */ '../views/demo/Tooltip.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
