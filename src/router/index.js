import Vue from 'vue'
import Router from 'vue-router'
import Circle from '@/components/circle/Circle'
import Discovery from '@/components/discovery/Discovery'
import Sport from '@/components/sport/Sport'
import Skill from '@/components/skill/Skill'
import Mine from '@/components/mine/Mine'

Vue.use(Router)

export default new Router({
  mode: history,
  routes: [
    {
      path: '/',
      redirect: '/circle'
    },
    {
      path: '/circle',
      name: 'Circle',
      component: Circle
    },
    {
      path: '/discovery',
      name: 'Discovery',
      component: Discovery
    },
    {
      path: '/sport',
      name: 'Sport',
      component: Sport
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
