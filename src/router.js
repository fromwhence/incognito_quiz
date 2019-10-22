import Vue from 'vue'
import Router from 'vue-router'
import Quiz from './views/QuizLt.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', name: 'quiz', component: Quiz }
  ]
})
