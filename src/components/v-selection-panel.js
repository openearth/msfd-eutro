import {
  bus
} from '@/event-bus.js'
import noUiSlider from 'noUiSlider'
import wNumb from 'wNumb'
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
    bus.$on('map-loaded', (event) => {
      var slider = document.getElementById('slider-color')
      noUiSlider.create(slider, {
        start: [2.5, 5, 7.5],
        connect: [true, true, true, true],
        range: {
          'min': [0],
          'max': [10]
        },
        step: 0.1,
        pips: {
          mode: 'values',
          values: [0, 2.5, 5, 7.5, 10],
          density: 4,
          format: wNumb({ decimals: 2 })
        },
        cssPrefix: 'noUi-',
        tooltips: [true, true, true]
      })
      var connect = slider.querySelectorAll('.noUi-connect')
      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color']

      for (var i = 0; i < connect.length; i++) {
        connect[i].classList.add(classes[i])
      }
    })
  },
  methods: {},
  components: {}
}
