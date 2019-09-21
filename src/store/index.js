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
    },
    UPD_DATA: (state, updItem) => {
      state.dataTable = state.dataTable.map(item => {
        if (item.id == updItem.id) {
          return updItem;
        } else {
          return item;
        }
      });
    }
  },
  actions: {
    async getData({ commit }) {
      const { data } = await getDataApi();
      commit("SET_DATA", data);
    },
    async sendData({ commit }, item) {
      let res = await sendEditedData(item);
      commit("UPD_DATA", res.data);
    },
    getCurrentItem({ commit }, item) {
      commit("SET_CURRENT_ITEM", item);
    }
  }
});
