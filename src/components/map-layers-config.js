const mapLayers = [
  {
    'id': 'ospar-eu-6iavvw',
    'type': 'line',
    'source': {
      'url': 'mapbox://mariekeeleveld.410g4lyk',
      'type': 'vector'
    },
    'source-layer': 'ospar_eu-6iavvw',
    'filter': [
      '==',
      '$type',
      'LineString'
    ],
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'line-dasharray': [
        2,
        2
      ],
      'line-gap-width': 0,
      'line-color': '#000000'
    }
  },
  {
    'id': 'ospar-nl-c0abqr',
    'type': 'line',
    'source': {
      'url': 'mapbox://mariekeeleveld.cfz5dxdk',
      'type': 'vector'
    },
    'source-layer': 'ospar_nl-c0abqr',
    'filter': [
      '==',
      '$type',
      'Polygon'
    ],
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'line-dasharray': [
        1,
        1
      ]
    }
  },
  {
    'id': 'mwtl-nl-7c3j4z',
    'type': 'circle',
    'source': {
      'url': 'mapbox://mariekeeleveld.53vxfur6',
      'type': 'vector'
    },
    'source-layer': 'mwtl_nl-7c3j4z',
    'filter': [
      '==',
      '$type',
      'Point'
    ],
    'layout': {
      'visibility': 'visible'
    },
    'paint': {
      'circle-color': 'hsla(0, 0%, 0%, 0.32)'
    }
  }
]

export {
  mapLayers
}
