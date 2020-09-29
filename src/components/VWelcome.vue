<template>
  <div>
    <v-dialog v-model="disclaimer" persistent scrollable height="80vh" width="500px" max-height="80vh" max-width="500px">
      <v-card id="disclaimer" light>
        <v-card-title>
          <span class="headline">
            Disclaimer
          </span>
        </v-card-title>
        <v-card-text>
          <iframe id="disclaimerContent" src="./static/disclaimer.html"></iframe>
        </v-card-text>
        <v-card-actions class="text-xs-center mx-2">
          <v-btn @click.stop="disclaimer=false" round color="primary" dark>Agree and proceed to website</v-btn>
          <v-btn @click.stop="disclaimer=false; tutorialDialog=true" round color="primary" dark>Agree and tutorial</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-dialog v-model="tutorialDialog" max-width="600px" max-heigth="60vh" scrollable>
      <v-card v-if="tutorialScreen==='step1'" light id="tutorialCard">
        <v-card-title>
          <h3 class="headline mb-0">
            Tutorial step 1
          </h3>
        </v-card-title>
        <v-card-text>
          <p>
            Would you like to use satellite data for marine environmental decision making, such as the Marine Strategy Framework Directive (MSFD)?
            Our new algorithm blends thousands of customised satellite datasets of concentration of chlorophyll pigment (CHL), which are indicative
            of phytoplankton in offshore, rocky, and turbid coastal waters. The resulting maps are presented in the MSFD-Eutro viewer
          </p>
          <p>
            Trend analysis of CHL helps to understand the response of the marine ecosystem to human pressures such as eutrophication.
            The status of a particular marine area with respect to eutrophication is determined by winter nutrient concentrations, but also by
            multi-year mean and maximum (expressed as P90) chlorophyll-a concentrations evaluated against certain thresholds (assessment levels).
          </p>
        </v-card-text>
        <v-card-actions>
          <v-btn class="Close" color="primary" flat @click.stop="tutorialDialog=false">Close</v-btn>
          <v-btn flat disabled></v-btn>
          <v-btn class="Next" color="primary" flat @click.stop="tutorialScreen='step2'">Next</v-btn>
        </v-card-actions>
      </v-card>
    <v-card v-if="tutorialScreen==='step2'" light id="tutorialCard">
      <v-card-title>
        <h3 class="headline mb-0">
          Tutorial step 2
        </h3>
      </v-card-title>
      <v-card-text>
        <p>
          Clicking Original mean or Original P90 enables you to check yearly or six-yearly average or maximum chlorophyll concentrations.
          Analyse trends in time by dragging the slider on the time bar. If you click in the map, you can show and download the plot of
          the statistics. With alt + prt sc you capture the map.
        </p>
         <img src="static/images/StatsReporting-Arrows.png" width="100%">
      </v-card-text>
      <v-card-actions>
        <v-btn class="Close" color="primary" flat @click.stop="tutorialDialog=false">Close</v-btn>
        <v-btn class="Back" color="primary" flat @click.stop="tutorialScreen='step1'">Back</v-btn>
        <v-btn class="Next" color="primary" flat @click.stop="tutorialScreen='step3'">Next</v-btn>
      </v-card-actions>
    </v-card>
    <v-card v-if="tutorialScreen==='step3'" light id="tutorialCard">
      <!-- <v-card-media src="http://flakphoto.com/assets/photos/corey-arnold-the-north-sea.jpg" height="200px">
      </v-card-media> -->
      <v-card-title>
        <h3 class="headline mb-0">
          Tutorial step 3
        </h3>
      </v-card-title>
      <v-card-text>
        <p>
          To check the spatial impact of choosing different (international) assessment levels and methods... you can: Select Classified mean or
          Classified P90 and evaluate the spatial impact of assessment levels interactively by dragging the sliders on the colour scale.
        </p>
        <p>
          Our tool directly enables you to use data for good. We hope that our interactive web-mapping tool provides input to the discussion on
          international harmonisation of assessment levels and methods.
        </p>
        <img src="static/images/AssessmentLevels-Arrows.png" width="100%">
      </v-card-text>
      <v-card-actions>
        <v-btn class="Close" color="primary" flat @click.stop="tutorialDialog=false">Close</v-btn>
        <v-btn class="Back" color="primary" flat @click.stop="tutorialScreen='step2'">Back</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  </div>
</template>

<script src="./v-welcome.js"></script>

<style scoped>
#disclaimerContent {
  width: 100%;
  height: 100%;
  border: 0px;
}

#tutorialCard {
  height: 70vh !important;
}
</style>
