import { createRouter, createWebHistory } from 'vue-router';
import Welcome from '../views/Welcome.vue';
import Login from '../views/Login.vue';
import SignIn from '../views/SignIn.vue';
import Settings from '../views/Settings.vue';
import Calendar from '../views/Calendar.vue';




/*on importe le component situé dans les déclarations de routes, on importe pas le nom. 
 le name dans la déclaration de route sert juste à appeler cette route par son nom plutôt que par son path, mais ce n'est même pas obligatoire.*/
const routes = [
      { path: '/', name: 'welcome', component: Welcome },
      { path: '/login', name: 'Login', component: Login },
      { path: '/signin', name: 'SignIn', component: SignIn },
      { path: '/settings', name: 'Settings', component: Settings },
      { path: '/calendar', name: 'Calendar', component: Calendar }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
