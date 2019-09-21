import VueRouter from "vue-router";
import Item from "./components/Item";
import Table from "./components/Table";

export default new VueRouter({
  routes: [
    {
      path: "/:id",
      component: Item
    },
    {
      path: "/",
      component: Table
    }
  ],
  mode: "history"
});
