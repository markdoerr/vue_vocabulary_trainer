import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curr_vocab_unit : "unit1",
    num_units: 2,
    curr_vocab_index : 0,
    num_vocab: 0,
    correct_words: 0
  },

  mutations: {
    setVocabUnit (state, vocab_unit) {state.curr_vocab_unit = vocab_unit },
    setNumVocab (state, num) {state.num_vocab = num },
    incrementVocabIndex  (state) { state.curr_vocab_index < state.num_vocab - 1 ? state.curr_vocab_index++ : state.curr_vocab_index = 0 },
    incrementCorrectWords (state) { state.correct_words++ }
  },
  actions: {
  }
});
