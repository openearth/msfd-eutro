import {
  bus
} from '@/event-bus.js'

import {
  mapLayers
} from './map-layers-config.js'
import _ from 'lodash'
import mapboxgl from 'mapbox-gl'
import Highcharts from 'highcharts'
import Exporting from 'highcharts/modules/exporting'
import $ from 'jquery'

require('highcharts/highcharts-more.js')(Highcharts)
Exporting(Highcharts)

const SERVER_URL = 'http://tl-tc102.xtr.deltares.nl:8080/thredds/wms/Thredds/'
const ranges = [2002, 2017]
const substances = {
  'Original mean': 'mean_chlorophyll',
  'Classified mean': 'mean_chlorophyll',
  'Original P90': 'P90_chlorophyll',
  'Classified P90': 'P90_chlorophyll'
}

export default {
  name: 'v-map-layers',
  data () {
    return {
      map: null,
      parameter: 'Original mean',
      selectPeriod: 'yearly',
      colorSlider: '',
      customColor: '',
      year: 2003
    }
  },
  mounted () {
    var popup = new mapboxgl.Popup({})
    var div = window.document.createElement('popup')
    div.setAttribute('id', 'popup')

    popup.setDOMContent(div)
    bus.$on('change-time-slider', (val) => {
      this.year = val[1]
    })

    bus.$on('create-color-slider', (colorSlider) => {
      this.colorSlider = colorSlider
      this.generateLayers()
    })

    bus.$on('change-parameter', (parameter) => {
      this.parameter = parameter
      this.generateLayers()
    })

    bus.$on('change-selectPeriod', (selectPeriod) => {
      // preventing to start generateLayers twice while initializing
      if (this.selectPeriod === null) {
        this.selectPeriod = selectPeriod
      } else {
        this.selectPeriod = selectPeriod
        this.generateLayers()
      }
    })
    bus.$on('map-loaded', (map) => {
      this.addShapeLayers()
      this.generateLayers()
      this.map.on('click', (e) => {
        popup.remove()
        popup.setLngLat(e.lngLat)
          .addTo(this.map)
          .setDOMContent(div)
        if (this.selectPeriod === 'yearly') {
          var filename = 'CHL_1km_' + this.year.toString()
        } else if (this.selectPeriod === 'six_yearly') {
          filename = 'CHL_1km_' + parseInt(this.year).toString() + '_' + (parseInt(this.year) + 5).toString()
        }
        this.makeBoxPlot(filename, e.lngLat.lat, e.lngLat.lng)
      })
    })
  },
  methods: {
    deferredMountedTo (map) {
      this.map = map
    },

    generateLayers () {
      bus.$emit('remove-all-layers')

      _.each(_.range(ranges[0], ranges[1]), (year) => {
        this.addMapLayers(year)
      })
    },

    addMapLayers (year) {
      if (this.selectPeriod === 'yearly') {
        var filename = 'CHL_1km_' + parseInt(year).toString()
        var id = parseInt(year).toString()
      } else if (this.selectPeriod === 'six_yearly') {
        filename = 'CHL_1km_' + parseInt(year).toString() + '_' + (parseInt(year) + 5).toString()
        id = parseInt(year).toString() + '_' + (year + 5)
      }
      if (this.parameter === 'Classified mean' | this.parameter === 'Classified P90') {
        var text = 'custom'
        _.each(this.colorSlider.get(), (val, i) => {
          text += '-' + parseInt(val)
        })
        var stylestring = '&STYLES=boxfill/' + text + '&NUMCOLORBANDS=16&'
      } else {
        stylestring = '&STYLES=boxfill/msfd&'
      }

      var tiles = this.getMapString(filename, stylestring)
      var layer = {
        id: id,
        type: 'raster',
        source: {
          type: 'raster',
          tiles: [tiles],
          'tileSize': 256
        },
        paint: {
          'raster-opacity': 0
        }
      }
      this.map.addLayer(layer, mapLayers[0].id)
      bus.$emit('add-layer', layer)
    },

    getMapString (filename, stylestring) {
      var string = SERVER_URL + this.selectPeriod + '/' + filename + '.nc?' +
        'SERVICE=WMS&' +
        'REQUEST=GetMap&' +
        'VERSION=1.3.0&' +
        'LAYERS=' + substances[this.parameter] + '&' +
        'CRS=EPSG:3857&' +
        'BBOX={bbox-epsg-3857}&' +
        'WIDTH=256&' +
        'HEIGHT=256&' +
        'FORMAT=image/png&' +
        'COLORSCALERANGE=0,80&' +
        stylestring +
        'TRANSPARENT=TRUE&'
      return string
    },

    makeBoxPlot (filename, lat, lon) {
      $.ajax({url: 'http://tl-tc102.xtr.deltares.nl:8080/thredds/ncss/grid/Thredds/yearly/' + filename + '.nc?var=P10_chlorophyll&var=P25_chlorophyll&var=P50_chlorophyll&var=P75_chlorophyll&var=P90_chlorophyll&latitude=' + lat + '&longitude=' + lon + '&accept=csv',
        async: false,
        success: function (result) {
          var string = result.split('\n')
          var boxplot = [string[1].split(',').slice(2).map(Number)]
          Highcharts.chart('popup', {
            chart: {
              type: 'boxplot'
            },
            title: {
              text: 'Chlorophyll'
            },
            legend: {
              enabled: false
            },
            xAxis: {
              categories: ['1'],
              title: {
                text: 'Year: ' + filename.split('_')[2]
              }
            },

            yAxis: {
              title: {
                text: 'Chlorophyll [mg/m^3]'
              }
            },

            series: [{
              name: filename,
              data: boxplot,
              tooltip: {
                headerFormat: '<em>lat: ' + lat + ' lon: ' + lon + '</em><br/>'
              }
            }]

          })
        }
      })
    },

    addShapeLayers () {
      _.each(mapLayers, (layer) => {
        this.map.addLayer(layer)
      })
    }
  }
}
