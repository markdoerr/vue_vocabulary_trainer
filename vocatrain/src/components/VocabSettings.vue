<template>
  <div class="training-settings">
    <div>
      <h4> Select lesson / unit to train </h4>
      <b-dropdown id="unit-dropdown-1" 
                  text="Unit ?" 
                  class="m-md-2" >
        <b-dropdown-item v-for="item in dropdown_items"
              :key="item.id" 
              :value="item.value"
              @click="setUnit(item)" >
           {{item}}
         </b-dropdown-item>"
      </b-dropdown>
    </div>
    <div class="training-mode">
      <b-form-group label="Training mode">
        <b-form-radio-group
        v-model="trainings_mode"
        :options="learningMode"
        name="radio-inline"
        @input="setTrainingsMode"
        ></b-form-radio-group>
      </b-form-group>
      <div class="mt-3">Selected: <strong>{{ trainings_mode }}</strong></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VocabSettings extends Vue {
  private trainings_mode:string = 'de-en'
  private vocab_unit_selected:string = '1'
  
  learningMode: any[] = [
      { text: 'DEU-ENG', value: 'de-en' },
      { text: 'ENG-DEU', value: 'en-de' },
      { text: 'Random', value: 'random' },
    ]
  private dropdown_items: string[] = ['unit1', 'unit2']

  setUnit(unit:string) {
    this.$store.commit('setVocabUnit',unit)
  }
  
  setTrainingsMode() {
    this.$store.commit('setTrainingsMode',this.trainings_mode)

    if (this.trainings_mode == "de-en") this.$store.commit('setTargetLanguage','ENG');
    if (this.trainings_mode == "en-de") this.$store.commit('setTargetLanguage','DEU');
  }

  showDebugMessage() {
     console.log('dropdonw item selected');
  }

  /*private computed: object =  {
    dropdown_items_ (this:any) {

      var dropdown_item_html:string = ""

      for (var unit of this.$store.state.num_units ) {
        dropdown_item_html += "<b-dropdown-item> unit" + unit + " </b-dropdown-item>"
      }
      return dropdown_item_html
    }
  }
  */

  protected mounted() {
       this.$root.$on('bv::dropdown::show', (bvEvent : Event)  => {
         console.log('Dropdown is about to be shown');
       });
     }
}
</script>
