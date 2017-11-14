import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Category from '@/pages/Category.vue'
import Cart from '@/pages/Cart.vue'
import Account from '@/pages/Account.vue'
import Search from '@/pages/Search.vue'
import ItemDetail from '@/pages/ItemDetail'
import Foo from '@/components/Foo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Index',
    component: Index
  }, {
    path: '/foo',
    name: 'Foo',
    component: Foo
  }, {
    path: '/search',
    name: 'Search',
    component: Search
  }, {
    path: '/category',
    name: 'Category',
    component: Category
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }, {
    path: '/account',
    name: 'Account',
    component: Account
  }, { path: '/item/:id',
    name: ItemDetail,
    component: ItemDetail
  }]
})
