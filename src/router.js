import { createRouter, createWebHistory } from "vue-router";

import Index from "./pages/index.vue";
import Appointment from "./pages/appointment.vue";
import Member from "./pages/becomemember.vue";
import Options from "./pages/options.vue";
import SignIn from "./pages/signin.vue";
import About from "./pages/about.vue";
import NotFound from "./pages/404.vue";

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
  },
  {
    path: "/member",
    name: "Member",
    component: Member,
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
