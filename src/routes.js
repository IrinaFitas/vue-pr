export const routes = [
  { path: "/", component: () => import("./components/List.vue") },
  { path: "/campaign/:id", component: () => import("./components/Campaign.vue") }
];