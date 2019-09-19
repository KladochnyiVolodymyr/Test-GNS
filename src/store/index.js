import Vue from "vue";
import Vuex from "vuex";
import { getDataApi } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataTable: []
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.dataTable = data;
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    }
  }
});
