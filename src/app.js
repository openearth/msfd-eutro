import {
  bus
} from '@/event-bus.js'
import SelectionPanel from './components/VSelectionPanel'
import InfoPanel from './components/VInfoPanel'
import Acknowledgements from './components/VAcknowledgements'
import MapLayers from './components/VMapLayers'

import _ from 'lodash'

export default {
  name: 'app',
  data: function () {
    return {
      map: null,
      drawer: null,
      layers: []
    }
  },
  mounted () {
    this.map = this.$refs.map.map

    bus.$on('add-layer', (layer) => {
      this.layers.push(layer)
    })

    bus.$on('remove-all-layers', () => {
      _.each(this.layers, (layer) => {
        this.map.removeLayer(layer.id)
        this.map.removeSource(layer.id)
      })
      this.layers = []
    })

    this.map.on('load', (event) => {
      bus.$emit('map-loaded', this.map)
    })
  },
  methods: {},
  components: {
    'v-selection-panel': SelectionPanel,
    'v-map-layers': MapLayers,
    'v-info-panel': InfoPanel,
    'v-acknowledgements': Acknowledgements
  }
}
