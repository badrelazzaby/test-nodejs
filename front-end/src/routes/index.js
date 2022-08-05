import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import("@/pages/Home.vue");
const User = () => import("@/pages/User.vue");
const UserList = () => import("@/pages/UserList.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add-new-user",
    name: "User",
    component: User,
  },
  {
    path: "/login",
    name: "UserList",
    component: UserList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
