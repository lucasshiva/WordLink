import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/Home/HomeView.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
  },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
