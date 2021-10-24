<template>
<div>  <div class="vocab-trainer-question" v-if="this.$store.state.curr_trainings_mode == 'de-en'">
     {{vocab.de}} (ENG)
  </div>
  <div class="vocab-trainer-question" v-if="this.$store.state.curr_trainings_mode == 'en-de'">
     {{vocab.en}} (DEU)
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface VocabQuest {
  language: string;
	en: string;
	de: string;
	en_pl: string;
}

@Component
export default class Question extends Vue {
  @Prop() private vocab!: VocabQuest;

  //get curr_lang() : any { return this.$store.curr_target_language } 
}
</script>

<style scoped>
.vocab-trainer-question {
  font-size: 10ex;
  padding-top: 3ex;
  color: red;
}
</style>
