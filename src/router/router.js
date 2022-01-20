import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import One from "../views/One.vue";
import Two from "../views/Two.vue";
import Three from "../views/Three.vue";
import Last from "../views/Last.vue";
import Thanks from "../views/Thanks.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/one",
    name: "one", 
    component: One,
  },
  {
    path: "/two",
    name: "two", 
    component: Two,
  },
  {
    path: "/three",
    name: "three", 
    component: Three,
  },
  {
    path: "/last",
    name: "last", 
    component: Last,
  },
  {
    path: "/thanks",
    name: "thanks", 
    component: Thanks,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;