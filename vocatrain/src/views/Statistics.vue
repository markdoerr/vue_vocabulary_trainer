<template>
  <div class="statistics">
    <h1>This is the statistics page</h1>

    <h2 id="correct"> correct words: {{corr_words}} / {{vocab_num}} </h2>

    {{congratulations}}


  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

//@Component({})
// change to typescritp syntax !
export default  { // class Statistics extends Vue {

 computed:  {
    corr_words (this:any) {
      return this.$store.state.correct_words
    },
    vocab_num (this:any) {
      return this.$store.state.num_vocab
    },
    congratulations (this:any) {
      var vocabs_num:number =  this.$store.state.num_vocab
      var corr_words:number =  this.$store.state.correct_words
      
      var num_error: number = vocabs_num - corr_words

      if ( corr_words / vocabs_num  > 0.9 ) {
        return "Super !! (- unter 10% falsch) "
      } else {
        return "Schade - zu viele Fehler (" + num_error + ")"
      }
    }
  }
}
</script>

<style scoped>
.statistics {
 padding: 3ex;
}
#correct {
  padding: 5ex;
  color: red;
}
</style>