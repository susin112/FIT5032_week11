import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'

import FirebaseLoginView from '../views/FirebaseLoginView.vue'
import FirebaseRegisterView from '../views/FirebaseRegisterView.vue'
import Dashboard from '../views/Dashboard.vue'
import AddBookView from '../views/AddBookView.vue'
import BookList from '../components/BookList.vue'
import GetBookCountView from '../views/GetBookCountView.vue'
import AddBookFirebase from '../views/AddBookFirebase.vue'
import WeatherView from '../views/WeatherView.vue'
import CountBookAPI from '../views/CountBookAPI.vue'
import GetAllBookAPI from '../views/GetAllBookAPI.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  }, 
  {
    path: '/booklist',
    name: 'BookList',
    component: BookList
  }, 
  {
    path: '/FireLogin',
    name: 'FireLogin',
    component: FirebaseLoginView
  },  
  {
    path: '/FireRegister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },  
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard
  },  
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },  
  {
    path: '/AddBookFirebase',
    name: 'AddBookFirebase',
    component: AddBookFirebase
  },  
  {
    path: '/WeatherCheck',
    name: 'WeatherCheck',
    // eslint-disable-next-line no-undef
    component: WeatherView
  },  
  {
    path: '/CountBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  },  
  {
    path: '/GetAllBookAPI',
    name: 'GetAllBookAPI',
    component: GetAllBookAPI 
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router