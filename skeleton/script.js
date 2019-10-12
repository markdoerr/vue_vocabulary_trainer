
var data = {
  vocabulary: vocabulary,
  results: {correct_words: 0},
  title: 'Vocabulary test',
  answer: '',
  curr_item: 0,
  correct: false,
  checked: false,
};

/**
 * Declaring components
 */

var QuestionComponent = Vue.extend({
  data: function () {
    return data;
  // var item = vocabulary[Math.floor(Math.random()*vocabulary.length)]
  // this.curr_item = Math.floor(Math.random() * this.vocabulary.length);
  // vocabulary[Math.floor(Math.random()*vocabulary.length)].en
  },
  template:   '<div class="vocab-question">' +
  '                 {{ vocabulary[curr_item].de }}' +
  '            </div>'

});

var VocabAnswerComponent = Vue.extend({
  data: function () {
    return data;
  },
  methods: {
    checkVocab: function () {
      var text;

      text = this.answer.trim();
      if (!this.checked && text) {
        this.correct = text === this.vocabulary[this.curr_item].en;
        if (this.correct){
          this.results.correct_words++;
          this.vocabulary[this.curr_item].en_correct = true;
        }
        this.checked = true;
      }
    }
  },
  // props: ['answer' , 'correct' ],
  template:
  '<div class="input-group">'                                                                                        +
    '<input v-model="answer" @keyup.enter="checkVocab" placeholder="check vocab" type="text" class="form-control">'  +
    '  <span class="input-group-btn">'                                                                               +
    '    <button @click="checkVocab" class="btn btn-default" type="button">Check !</button>'                          +
    '  </span>' +
    '</div>'
});

var CorrectionFeedbackComponent = Vue.extend({
  data: function () {
    return data;
  },
  template:   '<div class="vocab-feedback">' +
              '  <p> {{ checked ?  (correct ? "Richtig" : "Falsch"): ""  }} </p>'  +
              '</div>'
});

var NextVocabComponent = Vue.extend({
  data: function () {
    return data;
  },
  methods: {
    nextVocab: function () {
      if(this.checked){
        if ( this.curr_item < this.vocabulary.length - 1){
          this.curr_item++;
        }
        else {
          this.curr_item = 0;
        }
        this.checked = false;
        this.correct = false;
        this.answer = "";
      }
    }
  },
  template:   '<div class="next-vocab">' +
              '  <b-button block variant="success" @click="nextVocab"  >Next Word...</b-button>'  +
              '</div>'
});

var VocabStatisticsComponent = Vue.extend({
  data: function () {
    return data;
  },
  template: '<div>  ' +
            ' <b-modal id="vocab-statistics" title="Your Score"> ' +
            ' <p>Hello from modal!</p> '+
            ' </b-modal>' +
            '</div>'
});

var ResultsComponent = Vue.extend({
  data: function () {
    return data;
  },
  template:   '<div class="vocab-results">' +
  '               <p> Results {{results.correct_words}} correct words of {{vocabulary.length}} words </p>' +
  '               <p> Ergebnis {{results.correct_words}} richtige Wörter von {{vocabulary.length}} Wörter </p>' +
  '            </div>'
});

/**
 * Registering components
 */
Vue.component('question-component', QuestionComponent);
Vue.component('vocab-answer-component', VocabAnswerComponent);
Vue.component('correction-feedback-component', CorrectionFeedbackComponent);
Vue.component('vocab-statistics', VocabStatisticsComponent);
Vue.component('next-vocab-component', NextVocabComponent);
Vue.component('results-component', ResultsComponent);

new Vue({
  el: '#app',
  data: data
});
