<template>
  <div class="next-vocab">
    <b-button block variant="success" @click="nextVocab"  >Next Word...</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NextVocab extends Vue {

}
</script>

<style scoped>

</style>
