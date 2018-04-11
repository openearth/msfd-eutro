<template>
<v-app id="inspire">
  <v-navigation-drawer width=400 id="navdrawer" app v-model="drawer">
    <v-selection-panel :layers="layers" :map="map"></v-selection-panel>
  </v-navigation-drawer>
  <v-toolbar xs6 color="grey lighten-4" fixed app>
    <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
    <v-toolbar-title>MSFD Eurto - Interactive web-mapping of chlorophyll indicator maps</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <div id="map">
      <v-mapbox access-token="pk.eyJ1Ijoic2lnZ3lmIiwiYSI6Il8xOGdYdlEifQ.3-JZpqwUa3hydjAJFXIlMA" map-style="mapbox://styles/mapbox/light-v9" :center="[5.673272, 52.079502]" :zoom="7.88" :pitch="0" :bearing="0" :min-zoom="5" id="map" ref="map">
        <v-map-layers></v-map-layers>
        <v-mapbox-navigation-control></v-mapbox-navigation-control>
      </v-mapbox>
    </div>
  </v-content>
</v-app>
</template>

<script src="./app.js"></script>

<style >
@import 'mapbox-gl/dist/mapbox-gl.css';
@import 'material-design-icons/iconfont/material-icons.css';
@import 'nouislider/distribute/nouislider.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-align: center;
}
#map {
  height: 100vh;
  width: 100vw;
}
.noUi-handle {
  width: 10px !important;
  right: -5px !important;
  left: 100% -5px !important;
}
:before{
  display: none !important;
}

:after{
  display: none !important;
}
</style>
