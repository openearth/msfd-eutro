const mapLayers = [{
  layertype: 'mapbox-layer',
  name: 'Combined exposure',
  textcolor: 'rgba(199, 23, 220, 1)',
  data: [{
    id: 'combined-exposure',
    layout: {
      'visibility': 'visible'
    },
    type: 'raster',
    source: {
      type: 'raster',
      url: 'mapbox://camvdvries.a3b2by3z'
    },
    'source-layer': 'CHL_1km_2017_mean_epsg4326-3l2pqi',
    'paint': {}
  }]
}]

export {
  mapLayers
}
