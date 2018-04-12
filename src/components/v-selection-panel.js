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
      radioGroup: 'Original mean',
      modes: ['Original mean', 'Classified mean', 'Original P90', 'Classified P90']
    }
  },
  watch: {
    selectPeriod: {
      handler: function (selectPeriod) {
        this.updateTimeSlider()
      },
      deep: true
    },
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
      this.createColorSlider()
      this.createTimeSlider()
    })
  },
  methods: {
    updateTimeSlider () {
      if (this.selectPeriod === '6-yearly') {
        var margin = 6
        var limit = 6
        var range = {
          'min': 2002,
          'max': 2023
        }
      } else if (this.selectPeriod === 'yearly') {
        margin = 1
        limit = 1
        range = {
          'min': 2002,
          'max': 2017
        }
      }
      this.timeslider.updateOptions({
        margin: margin,
        limit: limit,
        range: range
      })
    },
    createTimeSlider () {
      var timeslider = document.getElementById('slider-time')
      this.timeslider = noUiSlider.create(timeslider, {
        start: [2002, 2008],
        step: 1,
        margin: 1,
        limit: 1,
        behaviour: 'drag-fixed',
        connect: true,
        range: {
          'min': 2002,
          'max': 2017
        },
        tooltips: [wNumb({ decimals: 0 }), wNumb({ decimals: 0 })]
      })
    },
    createColorSlider () {
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
          format: wNumb({
            decimals: 2
          })
        },
        cssPrefix: 'noUi-',
        tooltips: [wNumb({ decimals: 1 }), wNumb({ decimals: 1 }), wNumb({ decimals: 1 })]
      })
      var connect = slider.querySelectorAll('.noUi-connect')
      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color']

      for (var i = 0; i < connect.length; i++) {
        connect[i].classList.add(classes[i])
      }
    }
  },
  components: {}
}
