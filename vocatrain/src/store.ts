import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    curr_vocab_unit : "unit1",
    curr_trainings_mode : "de-en",
    curr_target_language : "ENG",
    num_units: 1,
    curr_vocab_index : 0,
    num_vocab: 0,
    correct_words: 0
  },

  mutations: {
    setVocabUnit (state, vocab_unit) {state.curr_vocab_unit = vocab_unit },
    setTrainingsMode (state, trainings_mode) {state.curr_trainings_mode = trainings_mode},
    setTargetLanguage (state, language) {state.curr_target_language = language},
    setNumVocab (state, num) {state.num_vocab = num },
    incrementVocabIndex  (state) { state.curr_vocab_index < state.num_vocab - 1 ? state.curr_vocab_index++ : state.curr_vocab_index = 0 },
    incrementCorrectWords (state) { state.correct_words++ }
  },
  actions: {
  }
});
