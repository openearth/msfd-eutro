<template>
<div class="v-selection-panel">
  <v-toolbar flat slot="header" color="grey lighten-4">
    <v-toolbar-title>
      Select image
    </v-toolbar-title>
  </v-toolbar>
  <v-list dense pt-0 three-line>
    <v-card>
      <v-card-text>
        Select period: {{periodText}}
          <v-flex xs4>
            <v-select :items="items" v-model="selectPeriod" label="Select" single-line></v-select>
          </v-flex>
        <v-slider v-if="selectPeriod==='yearly'" :min="2004" :max="2017" v-model="period" thumb-label step="1" ticks></v-slider>
        <v-slider v-if="selectPeriod==='6-yearly'" :min="2004" :max="2017" v-model="period" thumb-label step="6" ticks></v-slider>
        <v-radio-group v-model="radioGroup">
          <v-radio v-for="n in modes" :key="n" :label="`${n}`" :value="n"></v-radio>
        </v-radio-group>
      </v-card-text>
    </v-card>
  </v-list>
</div>
</template>

<script src="./v-selection-panel.js"></script>

<style scoped>
#selection {
  padding: 0px;
  width: 100%;
}

#analysis-panel {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}

.analysis-panel {
  top: 50vh;
  max-height: 50vh;
  overflow-y: auto;
}
</style>
