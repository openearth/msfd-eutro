const mapLayers = [
  // {
  //   layertype: 'mapbox-layer',
  //   name: 'Combined exposure',
  //   textcolor: 'rgba(199, 23, 220, 1)',
  //   data: [{
  //     id: 'combined-exposure',
  //     layout: {
  //       'visibility': 'visible'
  //     },
  //     type: 'raster',
  //     source: {
  //       type: 'raster',
  //       url: 'mapbox://camvdvries.a3b2by3z'
  //     },
  //     'source-layer': 'CHL_1km_2017_mean_epsg4326-3l2pqi',
  //     'paint': {}
  //   }]
  // }
  {
    layertype: 'mapbox-layer',
    name: 'Combined exposure',
    textcolor: 'rgba(199, 23, 220, 1)',
    data: [{
      id: 'combined-exposure',
      layout: {
        'visibility': 'visible'
      },
      'type': 'raster',
      source: {
        type: 'raster',
        tiles: ['http://tl-tc102.xtr.deltares.nl:8080/thredds/wms/Thredds/yearly/CHL_1km_2017.nc?service=WMS&request=GetMap&version=1.3.0&layers=mean_chlorophyll&crs=EPSG:3857&bbox={bbox-epsg-3857}&width=256&height=256&styles=boxfill/redblue&format=image/png&COLORSCALERANGE=0,80&BELOWMINCOLOR=transparent&ABOVEMAXCOLOR=transparent&NUMCOLORBANDS=3'],
        'tileSize': 256
      }
    }]
  }
]

export {
  mapLayers
}
