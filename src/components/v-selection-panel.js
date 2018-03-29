import {
  bus
} from '@/event-bus.js'

// TODO: Fix this by looping over datasets in this.layers. This is an ugly fix

export default {
  name: 'v-selection-panel',
  props: {
    layers: {
      type: Array,
      required: true
    },
    map: {
      type: Object
    }
  },
  data () {
    return {
      period: 2004,
      periodText: '',
      items: [
        'yearly',
        '6-yearly'
      ],
      selectPeriod: 'yearly',
      radioGroup: null,
      modes: ['Original mean', 'Classified mean', 'Original P90', 'Classified P90']
    }
  },
  watch: {
    layers: {
      handler: function (period) {
        if (this.selectPeriod === 'yearly') {
          this.periodText = (period - 1).toString() + '- ' + period.toString()
        }
      },
      deep: true
    }
  },
  mounted () {
    bus.$on('map-loaded', (event) => {})
  },
  methods: {},
  components: {}
}
