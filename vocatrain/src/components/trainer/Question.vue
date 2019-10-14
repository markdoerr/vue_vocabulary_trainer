<template>
  <div class="vocab-trainer-question">
     {{vocab.de}} ({{vocab.language}})
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export interface VocabQ {
  language: string;
	en: string;
	de: string;
	en_pl: string;
}

@Component
export default class Question extends Vue {
  @Prop() private vocab!: VocabQ;
}
</script>

<style scoped>
.vocab-trainer-question {
  font-size: 10ex;
  color: red;
}
</style>
