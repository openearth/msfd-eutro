<template>
<div class="v-info-panel">
  <v-toolbar flat slot="header" color="grey lighten-4">
    <v-toolbar-title>
      Information
    </v-toolbar-title>
  </v-toolbar>
  <v-list dense pt-0 three-line>
    <v-card>
      <v-card-text>
        MSFD-Eutro is a free and open, active and interactive web-mapping service that shows chlorophyll indicator maps based on growing-season statistics (mean, and max as P90). MSFD-Eutro aims to facilitate the use and appreciation of ocean colour data by policy
        advisors and policy makers for the European Marine Strategy Framework Directive (MSFD).
        <div class="text-xs-center">
          <v-btn v-on:click.native="clickOpenDap()" round color="primary" dark>OpenDap</v-btn>
          <v-btn v-on:click="dialog=true" round color="primary" dark>Tutorial</v-btn>
        </div>
        <v-welcome v-if="dialog" dialog="dialog"></v-welcome>
      </v-card-text>
    </v-card>
  </v-list>
</div>
</template>

<script src="./v-info-panel.js"></script>

<style>
</style>
