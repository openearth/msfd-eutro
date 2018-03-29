import {
  bus
} from '@/event-bus.js'
import SelectionPanel from './components/VSelectionPanel'
import MapLayers from './components/VMapLayers'

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

    this.map.on('load', (event) => {
      bus.$emit('map-loaded', this.map)

      this.map.on('click', (e) => {
        console.log(this.layers)
      })
    })
  },
  methods: {},
  components: {
    'v-selection-panel': SelectionPanel,
    'v-map-layers': MapLayers
  }
}
