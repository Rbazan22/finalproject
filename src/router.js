import { createRouter, createWebHistory } from "vue-router";
import Authorize from "./composable/Authorize";

import Index from "./pages/index.vue";
import Appointment from "./pages/appointment.vue";
import Member from "./pages/becomemember.vue";
import Options from "./pages/options.vue";
import SignIn from "./pages/signin.vue";
import About from "./pages/about.vue";
import NotFound from "./pages/404.vue";

const { hasAuthenticated } = Authorize();

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/appointment",
    name: "Appointment",
    component: Appointment,
    beforeEnter: (to, from, next) => {
      console.log(hasAuthenticated);
      if (!hasAuthenticated.value) {
        next("/signin");
      }
      next();
    },
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
    beforeEnter: (to, from, next) => {
      console.log(hasAuthenticated);
      if (!hasAuthenticated.value) {
        next("/signin");
      }
      next();
    },
  },
  {
    path: "/options",
    name: "Options",
    component: Options,
  },
  {
    path: "/signin",
    name: "Sign In",
    component: SignIn,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
