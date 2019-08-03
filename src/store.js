import Vue from 'vue';
import Vuex from 'vuex';
import { campaigns } from '@/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    campaigns: []
  },
  getters: {
    campaigns: state => state.campaigns
  },
  mutations: {
    getCampaigns: (state, payload) => {
      state.campaigns = payload;
    }
  },
  actions: {
    getCampaigns ({ commit }) {
      const data = campaigns.getCampaigns();

      commit("getCampaigns", data);
    }
  }
});