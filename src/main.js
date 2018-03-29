/* eslint-disable */
import Vue from 'vue';
import Vuetify from 'vuetify';
import App from './App.vue';
import Vue2MapboxGL from 'vue2mapbox-gl';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vue2MapboxGL);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
});
