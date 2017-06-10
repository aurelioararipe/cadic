
var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  target: 'map', 
  controls: ol.control.defaults({
    attributionOptions: ({
      collapsible: false
    })
  }),
  view: new ol.View({
    center: ol.proj.transform([-51.92528, -14.235004], 'EPSG:4326', 'EPSG:3857'), //função que permite usar longitude e latitude. EPSG é um sistema de coordenadas
    zoom: 4 //6 Estados //? municipios
  })
});
