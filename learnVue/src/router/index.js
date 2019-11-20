import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Attr from '../pages/attr'
import Keep from '../pages/keep-alive'
import Home from '../pages/home'
// 动态路由加载
const EventBus = () =>
    import ( '../pages/event-bus/index');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    },
    {
      path: "/attr",
      name: "Attr",
      component: Attr
    },
    {
      path: "/keep",
      name: 'Keep',
      component: Keep
    },
    {
      path: "/home",
      name: 'Home',
      component: Home
    },
    {
      path: "/event",
      name: 'EventBus',
      component: EventBus
    },
  ]
});
