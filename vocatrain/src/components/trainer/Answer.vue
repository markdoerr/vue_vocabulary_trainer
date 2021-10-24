<template>
  <div class="vocab-trainer-answer">
    <div>
      <b-input-group
      size="lg"
      class="mb-3"
      prepend="Antwort:"
      >
      <b-form-input v-model="answer" type="text" @keyup.enter="checkVocab()"></b-form-input>
      <b-input-group-append>
        <b-button size="sm" text="Button" @click="checkVocab()" variant="success">Check !</b-button>
      </b-input-group-append>
    </b-input-group>
  </div>
  <div class="vocab-trainer-answer-feedback">
    <p> {{answerFeedback}} </p>
  </div>
  <div class="next-vocab">
    <b-button block variant="success" @click="nextVocab()"  >Next Word...</b-button>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface VocabAns {
  language: string
	en: string
	de: string
	en_pl: string
}

@Component
export default class Answer extends Vue {
  @Prop() private vocab!: VocabAns

  checked = false
  correct = false
  answer = ""
  answerFeedback = ""

  checkVocab() {
    var text: string = this.answer.trim();
    if (!this.checked && text) {
      if (text == this.vocab.en){
        this.answerFeedback = "richtig :)"
        this.$store.commit('incrementCorrectWords')
        //this.results.correct_words++;
        //this.vocabulary[this.curr_item].en_correct = true;
      }
      else {
        this.answerFeedback = "falsch - richtig wäre: " + this.vocab.en
      }
      this.checked = true;
    }
  }
  nextVocab() {
     if (this.checked) {
       this.answer = ""
       this.answerFeedback = ""
       this.checked = false;
       console.log("Answer: next vocab ")
       this.$emit('nextVocab')
     }
  }
}
</script>

<style scoped>
.vocab-trainer-answer {
 padding: 30px;
}

.vocab-trainer-answer-feedback {
   text-align: center;
   font-size: 7ex;
   color: blue;
   padding: 3ex;
}
.next-vocab button{
  font-size: 40px;
}
</style>
