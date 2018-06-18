import {
  bus
} from '@/event-bus.js'
import noUiSlider from 'noUiSlider'
import wNumb from 'wNumb'
import _ from 'lodash'

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
        'six_yearly'
      ],
      modes: ['Original mean', 'Classified mean', 'Original P90', 'Classified P90'],
      selectPeriod: 'yearly',
      parameter: 'Original mean',
      value: [2002, 2003],
      shapelayer: false
    }
  },
  watch: {
    selectPeriod: {
      handler: function (selectPeriod) {
        bus.$emit('change-selectPeriod', this.selectPeriod)
        this.updateTimeSlider()
        this.updatePaint()
      },
      deep: true
    },
    parameter: {
      handler: function (parameter) {
        bus.$emit('change-parameter', this.parameter)
        this.updatePaint()
      },
      deep: true
    },
    value: {
      handler: function (value) {
        this.updatePaint()
      },
      deep: true
    },
    layers: {
      handler: function (layers) {
        this.layers = layers
        this.updatePaint()
      },
      deep: true
    }
  },
  mounted () {
    bus.$on('map-loaded', (event) => {
      bus.$on('shapes-added', () =>{
        this.createColorSlider()
        this.createTimeSlider()
        bus.$emit('change-selectPeriod', this.selectPeriod)
        bus.$emit('change-parameter', this.parameter)
      })
    })
  },
  methods: {
    updateTimeSlider () {
      if (this.selectPeriod === 'six_yearly') {
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
        start: [2002, 2007],
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
      this.timeslider.on('slide.one', (val) => {
        this.value = val
        bus.$emit('change-time-slider', val)
      })
      this.updatePaint()
    },

    createColorSlider () {
      var slider = document.getElementById('slider-color')
      var colorSlider = noUiSlider.create(slider, {
        start: [20, 40, 60],
        connect: [true, true, true, true],
        range: {
          'min': [0],
          'max': [80]
        },
        step: 5,
        margin: 5,
        padding: 5,
        pips: {
          mode: 'values',
          values: [0, 20, 40, 60, 80],
          density: 4,
          format: wNumb({
            decimals: 2
          })
        },
        cssPrefix: 'noUi-',
        tooltips: [wNumb({ decimals: 1 }), wNumb({ decimals: 1 }), wNumb({ decimals: 1 })]
      })
      bus.$emit('create-color-slider', colorSlider)

      var connect = slider.querySelectorAll('.noUi-connect')
      var classes = ['c-1-color', 'c-2-color', 'c-3-color', 'c-4-color']

      for (var i = 0; i < connect.length; i++) {
        connect[i].classList.add(classes[i])
      }
      colorSlider.on('slide.one', (val) => {
        bus.$emit('create-color-slider', colorSlider)
        // this.updatePaint()
      })
    },
    updatePaint () {
      var begin = parseInt(parseInt(this.value['0']))
      _.each(this.layers, (layer) => {
        this.map.setPaintProperty(layer.id, 'raster-opacity', 0)
        if (layer.id === begin.toString() && this.selectPeriod === 'yearly') {
          this.map.setPaintProperty(begin.toString(), 'raster-opacity', 1)
        } else if (layer.id === begin.toString() + '_' + (begin + 5).toString() && this.selectPeriod === 'six_yearly') {
          this.map.setPaintProperty(begin.toString() + '_' + (begin + 5).toString(), 'raster-opacity', 1)
        }
      })
    }
  },
  components: {}
}
