import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Parctise from "../views/Practise.vue";
import TestData from "../views/TestData.vue";
import Memory from "../views/Memory.vue";
import YiDa from "../views/YiDa.vue";
import My from "../views/My.vue"

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "home",
    component: Home 
  },
  {
    path: "/parctise",
    name: "practise",
    component: Parctise
  },
  {
    path: "/testData",
    name: "testdata",
    component: TestData
  },
  {
    path: "/testMemory",
    name: "memory",
    component: Memory
  },
  {
    path: "/yida",
    name: "yida",
    component: YiDa
  },
  {
    path: "/my",
    name: "my",
    component: My
  }
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
