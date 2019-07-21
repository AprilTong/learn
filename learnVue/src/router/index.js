import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Attr from '../pages/attr'
import Keep from '../pages/keep-alive'

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
    }
  ]
});
