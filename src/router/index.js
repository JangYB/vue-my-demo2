import Vue from 'vue'
import Router from 'vue-router'
import A from '../components/A.vue'
import B from '../components/B.vue'
import C from '../components/C.vue'
import D from '../components/D.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/A'
    },
    {
      path: '/A',
      component: A
    },
    {
      path: '/B',
      component: B
    },
    {
      path: '/C',
      component: C
    },
    {
      path: '/D',
      component: D
    }
  ]
})
