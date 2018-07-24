<template>
<div class="v-acknowledgements">
  <v-toolbar flat slot="header" color="grey lighten-4">
    <v-toolbar-title>
      Acknowledgements
    </v-toolbar-title>
  </v-toolbar>
  <v-list dense pt-0 three-line>
    <v-card>
      <v-card-text>
        We acknowledge CMEMS, ESA, EUMETSAT and Copernicus for satellite data, and CMEMS for funding.
        The MSFD-Eutro service was developed as a Demonstration Project under Contact 33–DEM2-L2.
      </v-card-text>
      <v-card-actions  class="text-xs-center">
        <img id="logo" class="center" src="static/images/CMEMS-DEMO-MSFD-EUTRO_33-DEM3-L2.png">
      </v-card-actions>
    </v-card>
  </v-list>
</div>
</template>

<script src="./v-acknowledgements.js"></script>

<style>
#logo {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 40%;
}
</style>
