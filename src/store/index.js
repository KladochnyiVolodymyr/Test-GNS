import Vue from "vue";
import Vuex from "vuex";
import { getDataApi } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataTable: [],
    currentItem: {
      id: "",
      name: "",
      location: "",
      currency: null
    }
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.dataTable = data;
    },
    SET_CURRENT_ITEM: (state, item) => {
      state.currentItem.id = item.id;
      state.currentItem.name = item.name;
      state.currentItem.location = item.location;
      state.currentItem.currency = item.currency;
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    },
    getCurrentItem({ commit }, item) {
      commit("SET_CURRENT_ITEM", item);
    }
  }
});
