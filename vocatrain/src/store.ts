import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curr_vocab_index : 0,
    num_vocab: 0,
  },

  mutations: {
    incrementVocabIndex : state => state.curr_vocab_index < state.num_vocab ? state.curr_vocab_index++ : state.curr_vocab_index = 0
  },
  actions: {

  },
});
