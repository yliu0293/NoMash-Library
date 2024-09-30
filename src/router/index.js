import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import store from '../store/store'
import AccessDeniedView from '../Views/AccessDeniedView.vue'
import FirebaseSigninView from '../Views/FirebaseSigninView.vue'
import FirebaseRegisterView from '../Views/FirebaseRegisterView.vue'
import LogoutView from '../Views/LogoutView.vue'
import AddBookView from '../Views/AddBookView.vue'
import GetBookCountView from '../Views/GetBookCountView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
    //pre route guard
    //before enter: (to, from) => {
    // return false
    //}
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/access-denied',
    name: 'AccessDenied',
    component: AccessDeniedView
  },
  {
    path: '/Firelogin',
    name: 'FireLogin',
    component: FirebaseSigninView
  },
  {
    path: '/Fireregister',
    name: 'FireRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogoutView
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/getbookcount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   if (!store.state.isAuthenticated && to.name !== 'Login' && to.name !== 'AccessDenied') {
//     return next({ name: 'AccessDenied' });
//   } else {
//     next();
//   }
// });

// Example of another guard that could be used but is commented out:
// router.beforeEach(async (to, from) => {
//   if (to.name == "About"){
//     return false;
//   }
// });



export default router