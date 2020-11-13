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
        <v-radio-group v-model="parameter">
          <v-radio v-for="n in modes" :key="n" :label="`${n}`" :value="n"></v-radio>
        </v-radio-group>
        <div id='slider-color' :hidden="parameter==='Original mean' || parameter==='Original P90'">
        </div>
        <!-- <div id='legendgraph'></div> -->
        <div id='colorbar' v-if="parameter==='Original mean' || parameter==='Original P90'"></div>
        <div id='bartext' v-if="parameter==='Original mean' || parameter==='Original P90'"> 0 80 <span> </span> </div>

        <!-- <v-switch v-model="shapelayer"> Shapes </v-switch> -->
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

#slider-color,
#slider-time {
  margin-top: 30px !important;
  margin-bottom: 40px !important;
  margin-left: 10px;
  margin-right: 10px;
}

.noUi-handle {
  width: 10px !important;
}

.noUi-horizontal .noUi-handle-upper .noUi-tooltip {
  left: 12px
}

.noUi-horizontal .noUi-handle-lower .noUi-tooltip {
  left: -9px
}

.noUi-tootltip {
  padding: 3px;
}

.c-1-color {
  background: #33cc33;
}

.c-2-color {
  background: #ffff00;
}

.c-3-color {
  background: #ff9900;
}

.c-4-color {
  background: #990000;
}

#colorbar {
  height: 10px;
  width: 80%;
  margin-left: 10%;
  text-align: justify;
  padding-top: 10px;
  background: linear-gradient(to right, rgb(0, 49, 232),
rgb(81, 204, 61),
rgb(167, 215, 31),
rgb(205, 172, 25),
rgb(237, 136, 20),
rgb(238, 121, 20),
rgb(240, 108, 19),
rgb(241, 93, 19),
rgb(243, 78, 18),
rgb(244, 65, 18),
rgb(246, 50, 17),
rgb(247, 37, 17),
rgb(249, 22, 16),
rgb(250, 9, 16),
rgb(247, 1, 15),
rgb(234, 5, 15),
rgb(222, 9, 14),
rgb(209, 13, 13),
rgb(197, 17, 13),
rgb(184, 21, 12),
rgb(172, 25, 12),
rgb(159, 29, 11),
rgb(147, 33, 10),
rgb(134, 37, 10),
rgb(126, 37, 9),
rgb(121, 34, 9),
rgb(116, 32, 8),
rgb(111, 29, 8),
rgb(106, 27, 8),
rgb(101, 24, 7),
rgb(96, 22, 7),
rgb(90, 19, 6),
rgb(86, 17, 6),
rgb(80, 14, 6),
rgb(76, 12, 5),
rgb(70, 9, 5),
rgb(66, 7, 4),
rgb(60, 4, 4));
}

/* #legendgraph {
  width: 20px;
  margin: 10%;
  text-align: justify;
  height: 200px;
  background: url('https://msfd.avi.deltares.nl/thredds/wms/Thredds/yearly/CHL_1km_2017.nc?SERVICE=WMS&REQUEST=GetLegendGraphic&LAYER=mean_chlorophyll&WIDTH=20&HEIGHT=200&LOGSCALE=true&COLORSCALERANGE=0,80&COLORBARONLY=true&TRANSPARENT=TRUE') 0 0 repeat;
  transform: rotate(90deg);
} */

#bartext {
  height: 10px;
  width: 80%;
  margin-left: 10%;
  text-align: justify;

}

span {
  width: 100%;
  height: 1em;
  display: inline-block;
}
</style>
