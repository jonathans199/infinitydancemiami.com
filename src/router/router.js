import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import About from '../components/home/About.vue'
import StudentSpotlight from '../components/home/StudentSpotlight.vue'
// Menu Clases
import Classes from '../components/home/Classes.vue'
import Schedule from '../components/home/Schedule.vue'
import Camps from '../components/home/Camps.vue'

// Menu Show
import Spring16 from '../components/home/2016Spring.vue'
import Spring15 from '../components/home/2015Spring.vue'
import Spring14 from '../components/home/2014Spring.vue'
import Spring142 from '../components/home/20142Spring.vue'
import Spring13 from '../components/home/2013Spring.vue'
import Spring17 from '../components/home/2017Spring.vue'
import Spring18 from '../components/home/2018Spring.vue'
import Winter17 from '../components/home/2017Winter.vue'

import Tuitionandfees from '../components/home/Tuitionandfees.vue'
import Whatson from '../components/home/whatson.vue'
import Competition from '../components/home/Competition.vue'
import Contact from '../components/home/Contact.vue'

Vue.use(Router)

export default new Router({
  // mode: "history",
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home,
    },
    // About
    {
      name: 'About',
      path: '/about',
      component: About,
    },
    {
      name: 'StudentSpotlight',
      path: '/student-spotlight',
      component: StudentSpotlight,
    },
    // 1 Menu Clases
    {
      name: 'Classes',
      path: '/classes',
      component: Classes,
    },
    // 1.1 Schedule
    {
      name: 'Schedule',
      path: '/schedule',
      component: Schedule,
    },
    // 1.2 Camps
    {
      name: 'Camps',
      path: '/camps',
      component: Camps,
    },
    // 2 Menu Show
    // 2.1 2016-spring
    {
      name: 'Spring16',
      path: '/2016-spring',
      component: Spring16,
    },
    // 2.2 2015-spring
    {
      name: 'Spring2015',
      path: '/2015-winter',
      component: Spring15,
    },
    // 2.3 2014-spring
    {
      name: 'Spring2014',
      path: '/2014-winter',
      component: Spring14,
    },
    // 2.4 20142-spring
    {
      name: 'Sprgin20142',
      path: '/2014-summer',
      component: Spring142,
    },

    {
      name: 'Spring2013',
      path: '/2013-june',
      component: Spring13,
    },
    {
      name: 'Spring2017',
      path: '/2017-Spring',
      component: Spring17,
    },
    {
      name: 'Spring2018',
      path: '/2018-Spring',
      component: Spring18,
    },
    {
      name: 'Winter2017',
      path: '/2017-Winter',
      component: Winter17,
    },
    // END Menu Show
    {
      name: 'Tuitionandfees',
      path: '/tuitionandfees',
      component: Tuitionandfees,
    },
    {
      name: 'Whatson',
      path: '/whatson',
      component: Whatson,
    },
    {
      name: 'Competition',
      path: '/competition',
      component: Competition,
    },
    {
      name: 'Contact',
      path: '/contact',
      component: Contact,
    },
  ],
})
