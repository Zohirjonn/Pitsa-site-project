import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Korzina from "../views/KorzinaView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/korzina",
      name: "korzina",
      component: Korzina,
    },
  ],
});

export default router;
