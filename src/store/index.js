import Vue from "vue";
import Vuex from "vuex";
import { getDataApi, sendEditedData } from "../api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    dataTable: [],
    currentItem: {
      id: "",
      name: "",
      location: "",
      currency: null
    },
    loading: false
  },
  mutations: {
    SET_DATA: (state, data) => {
      state.dataTable = [...data];
    },
    SET_CURRENT_ITEM: (state, item) => {
      state.currentItem = { ...item };
    },
    UPD_DATA: (state, updItem) => {
      state.dataTable = state.dataTable.map(item => {
        if (item.id == updItem.id) {
          return updItem;
        } else {
          return item;
        }
      });
    },
    SET_LOADING: (state, loading) => {
      state.loading = loading;
    }
  },
  actions: {
    async getData({ commit }) {
      commit("SET_LOADING", true);
      const { data } = await getDataApi();
      commit("SET_DATA", data);
      commit("SET_LOADING", false);
    },
    async sendData({ commit }, item) {
      const { data } = await sendEditedData(item);
      commit("UPD_DATA", data);
    },
    getCurrentItem({ commit }, item) {
      commit("SET_CURRENT_ITEM", item);
    }
  }
});
