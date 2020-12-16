import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import WhoAreWe from "../views/WhoAreWe.vue";
import Memories from "../views/Memories.vue";
import Footprints from "../views/Footprints.vue";
import Tips from "../views/Tips.vue";
import Contact from "../views/Contact.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/whoarewe",
    name: "WhoAreWe",
    component: WhoAreWe
  },
  {
    path: "/memories",
    name: "Memories",
    component: Memories
  },
  {
    path: "/footprints",
    name: "Footprints",
    component: Footprints
  },
  {
    path: "/tips",
    name: "Tips",
    component: Tips
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
