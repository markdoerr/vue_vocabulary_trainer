/*
 to use axio and the JSON server, please install:
   sudo npm install -g json-server
*/
<template>
  <div class="vocab-trainer">
    <Question :vocab="vocab[this.curr_vocab_index]" />
    <Answer :vocab="vocab[this.curr_vocab_index]" v-on:nextVocab="nextVocab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Question, {VocabQ} from '@/components/trainer/Question.vue'; // @ is an alias to /src
import Answer, {VocabA} from '@/components/trainer/Answer.vue';
import { AxiosResponse } from 'axios';

@Component({
  components: {
    Question,
    Answer,
  },
})
export default class VocabTrainer extends Vue {
  curr_vocab_index = 0

private vocab: [] = [];

 /*private vocabs = [
        { en: 'tomorrow', de: 'morgen', en_pl: '', language: 'DEU' },
        { en: 'bird', de: 'Vogel', en_pl: 'birds', language: 'DEU' },
  ];*/

  //var curr_vocab = this.vocabs[0]
  private created() {
		this.$http.get('http://localhost:3000/unit1').then((response: AxiosResponse) => {
			this.vocab = response.data.map((val: any) => ({
				en: val.en,
				de: val.de,
				en_pl: val.en_pl,
        language: 'DEU',
				//datePosted: new Date(val.datePosted),
				//highlighted: val.highlighted,
			}));
		});
    // same with fetch api:
    /*
    fetch('http://localhost:3000/unit1').then((response: any) => {
      this.vocab = response.data.map((val: any) => ({
        en: val.en,
        de: val.de,
        en_pl: val.en_pl,
        language: 'DEU',
        //datePosted: new Date(val.datePosted),
        //highlighted: val.highlighted,
      }));
    });*/
  }
  private nextVocab() {
    console.log("trainer: next vocab ")
    if ( this.curr_vocab_index < this.vocab.length - 1){
       this.curr_vocab_index++;
    }
    else {
      this.$root.router.push('statistics')
      this.curr_vocab_index = 0;
    }
  }
}

</script>
