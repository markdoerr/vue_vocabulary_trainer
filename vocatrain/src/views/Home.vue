<template>
  <div class="home">
    <h1> Leo's Vocabulary Learning App </h1>
    <VocabSettings/>
    <b-button variant="success" size="lg"  href="/trainer">Let's start...</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VocabSettings from '@/components/VocabSettings.vue'; // @ is an alias to /src

@Component({
  components: {
    VocabSettings,
  },
})
export default class Home extends Vue {}
</script>
