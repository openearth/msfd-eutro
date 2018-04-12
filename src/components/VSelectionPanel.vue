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
        <v-layout row wrap>
          <v-flex xs4>
            Select period:
          </v-flex>
        <v-flex xs4>
          <v-select id="select-period" :items="items" v-model="selectPeriod" label="Select" single-line></v-select>
        </v-flex>
      </v-layout>
        <div id='slider-time'>
        </div>
        <v-radio-group v-model="radioGroup">
          <v-radio v-for="n in modes" :key="n" :label="`${n}`" :value="n"></v-radio>
        </v-radio-group>
        <div id='slider-color'>
        </div>
      </v-card-text>
    </v-card>
  </v-list>
</div>
</template>

<script src="./v-selection-panel.js"></script>

<style>
.input-group {
  padding-top: 0px !important;
}

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

#slider-color, #slider-time {
  margin-top: 30px !important;
  margin-bottom: 40px !important;
}

.noUi-handle {
  width: 10px !important;
}
.c-1-color { background: red; }
.c-2-color { background: yellow; }
.c-3-color { background: green; }
.c-4-color { background: blue; }
</style>
