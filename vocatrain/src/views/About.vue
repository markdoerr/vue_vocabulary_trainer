<template>
  <div class="about">
    <img alt="Vue logo" src="../assets/logo.png">
    <AboutInfo msg="Welcome to Vocab Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import AboutInfo from '@/components/AboutInfo.vue'; // @ is an alias to /src

@Component({
  components: {
    AboutInfo,
  },
})
export default class About extends Vue {}
</script>
