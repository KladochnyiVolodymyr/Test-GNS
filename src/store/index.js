import Vue from "vue";
import Vuex from "vuex";
import { getDataApi } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: []
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.data = data;
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    }
  }
});
