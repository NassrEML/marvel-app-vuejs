import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Characters from './views/Characters.vue';
import Comics from './views/Comics.vue';
import Creators from './views/Creators.vue';
import Events from './views/Events.vue';
import Series from './views/Series.vue';
import Stories from './views/Stories.vue';

export default new Router({
  routes: [
    {
      path: '/Characters',
      component: Characters
    },
    {
      path: '/Comics',
      component: Comics
    },
    {
      path: '/Creators',
      component: Creators
    },
    {
      path: '/Events',
      component: Events
    },
    {
      path: '/Series',
      component: Series
    },
    {
      path: '/Stories',
      component: Stories
    }
  ]
})
