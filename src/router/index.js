
import { createRouter, createWebHistory } from "vue-router";
import home from "@/views/home.vue"
import about from "@/views/about.vue"
import recently from "@/views/recently.vue"
import request from "@/views/request.vue"
import admin from "@/views/admin.vue"
import details from "@/views/details.vue"
import result from "@/views/result.vue"
import unfinished from "@/views/unfinished.vue";

const routes = [
  {
    path: "/",
    name: "Root",
    component: home,
    alias: "/root"
  }, 
  {
    path: '/:pathMatch(.*)*', component:unfinished
  },
  {
    path: "/about",
    name: "about",
    component: about
  }, {
    path: "/recently",
    name: "recently",
    component: recently
  }, {
    path: "/request",
    name: "request",
    component: request
  }, {
    path: "/result",
    name: "result",
    component: result
  }, {
    path: "/admin",
    name: "admin",
    component: admin,
    meta: { requiresAuth: true }
  }, {
    path: "/details/:id",
    name: "details",
    component: details,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes
});
export default router;