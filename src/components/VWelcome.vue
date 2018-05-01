<template>
<v-dialog v-model="dialog" max-width="600px" max-height="400px">
  <v-card id="welcome" light>
    <v-card-media src="http://flakphoto.com/assets/photos/corey-arnold-the-north-sea.jpg" height="200px">
    </v-card-media>
    <v-card-title>
      <h3 class="headline mb-0">
        Hallo allemaal
      </h3>
      <div>Wat fijn dat je er bent! Ben je voor het eerst hier? Of ben je al Bekend? </div>
      <div class="text-xs-center">
        <v-btn @click.stop="dialog=false" round color="primary" dark>Al bekend</v-btn>
        <v-btn v-on:click.native="openTutorial()" round color="primary" dark>Eerste keer</v-btn>
      </div>
    </v-card-title>
  </v-card>
  <v-card id="tutorial1" light>
    <v-card-media src="http://flakphoto.com/assets/photos/corey-arnold-the-north-sea.jpg" height="200px">
    </v-card-media>
    <v-card-title>
      <h3 class="headline mb-0">
      Tutorial
    </h3>
      <div>This is a short introduction to the sandmotor viewer.</div>
    </v-card-title>
    <v-card-actions>
      <v-btn color="primary" flat @click.stop="dialog=false">Close</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
</template>

<script src="./v-welcome.js"></script>

<style scoped>
#tutorial1 {
  display: none;
}
</style>
