<template>
  <div class="training-settings">
    <div>
      <h4> Select lesson / unit to train </h4>
      <b-dropdown id="unit-dropdown-1" text="Unit ?" class="m-md-2">
        <b-dropdown-item>Unit 1</b-dropdown-item>
        <b-dropdown-item>Unit 2</b-dropdown-item>
        <b-dropdown-item>Unit 3</b-dropdown-item>
      </b-dropdown>
    </div>
    <div class="training-mode">
      <b-form-group label="Training mode">
        <b-form-radio-group
        v-model="selected"
        :options="learning_mode"
        name="radio-inline"
        ></b-form-radio-group>
      </b-form-group>
      <div class="mt-3">Selected: <strong>{{ selected }}</strong></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VocabSettings extends Vue {
  private selected: string = 'de-en'
  private learning_mode: LearningMode[] = [
      { text: 'DEU-ENG', value: 'de-en' },
      { text: 'ENG-DEU', value: 'en-de' },
      { text: 'Random', value: 'random' }
     ]

  mounted() {
       this.$root.$on('bv::dropdown::show', bvEvent => {
         console.log('Dropdown is about to be shown', bvEvent)
       })
     }
}
</script>
