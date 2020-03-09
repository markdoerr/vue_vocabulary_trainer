/*
 to use axio and the JSON server, please install:
   sudo npm install -g json-server
   in assets run:
    json-server --watch vocab_unit1.json
*/
<template>
  <div class="vocab-trainer">
    <Question :vocab="vocab[this.$store.state.curr_vocab_index]" />
    <Answer :vocab="vocab[this.$store.state.curr_vocab_index]" v-on:nextVocab="nextVocab" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Question, {VocabQ} from '@/components/trainer/Question.vue' // @ is an alias to /src
import Answer, {VocabA} from '@/components/trainer/Answer.vue'

@Component({
  components: {
    Question,
    Answer,
  },
})

export default class VocabTrainer extends Vue {
  private vocab: any[] = []

/*
private vocab = [
        { en: 'tomorrow', de: 'morgen', en_pl: '', language: 'DEU' },
        { en: 'bird', de: 'Vogel', en_pl: 'birds', language: 'DEU' },
  ];
*/
  //var curr_vocab = this.vocabs[0]
  private created() {

   /*
		this.$http.get('http://localhost:3000/unit1').then((response: AxiosResponse) => {
			this.vocab = response.data.map((val: any) => ({
				en: val.en,
				de: val.de,
				en_pl: val.en_pl,
        language: 'DEU',
				//datePosted: new Date(val.datePosted),
				//highlighted: val.highlighted,
			}));
		});*/
    // same with fetch api:

    fetch('http://localhost:3000/' + this.$store.state.curr_vocab_unit )
      .then( (response: any) => response.json() )
      .then((data: any) => {
        this.vocab = data.map((val: any) => ({
          en: val.en,
          de: val.de,
          en_pl: val.en_pl,
          language: 'DEU',
        //datePosted: new Date(val.datePosted),
        //highlighted: val.highlighted,
        }))
      })
      .then( () => { console.log(this.vocab)
             console.log(this.vocab.length)
             this.$store.commit('setNumVocab', this.vocab.length  )
      }
      )
      .catch(error => console.error(error))
  }
  private nextVocab() {
    console.log("trainer: next vocab ")
    if ( this.$store.state.curr_vocab_index < this.$store.state.num_vocab - 1){
      this.$store.commit('incrementVocabIndex')
      console.log(this.$store.state.curr_vocab_index)
    } else {
      this.$root.$router.push('statistics')
    }
  }
}

</script>
