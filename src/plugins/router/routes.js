import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/pages/not-found.vue"),
  },
  {
    path: "/",
    component: () => import("../../layouts/layout-default.vue"),
    children: [
      {
        path: "/",
        name: "HomePage",
        component: () => import("../../pages/home.vue"),
      },
      {
        path: "/about",
        name: "AboutPage",
        component: () => import("../../pages/about.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
