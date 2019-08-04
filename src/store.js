import Vue from 'vue';
import Vuex from 'vuex';
import { campaigns } from '@/api';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    campaigns: []
  },
  getters: {
    campaigns: state => state.campaigns,
    currentCampaign: state => id => state.campaigns.find(elem => elem.id === id)
  },
  mutations: {
    getCampaigns: (state, payload) => {
      state.campaigns = payload;
    },
    changeStatus: (state, { campaignId, cardId, status }) => {
      const card = state.campaigns.find(elem => elem.id === campaignId).media.find(elem => elem.id === cardId);

      card.status = status;
    }
  },
  actions: {
    getCampaigns ({ commit }) {
      const data = campaigns.getCampaigns();

      commit("getCampaigns", data);
    },
    changeStatus ({ commit }, { campaignId, cardId, status }) {
      commit("changeStatus", { campaignId, cardId, status });
    }
  }
});