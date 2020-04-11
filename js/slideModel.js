$('#backButton').hide();
$('.legend').hide();
/* =====================
Leaflet Configuration
===================== */

var map = L.map('map', {
  center: [40.000, -90.1090],
  zoom: 4
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

/*read data*/
var dataset = 'https://raw.githubusercontent.com/Yichen-Lei/MUSA611_Midterm/master/result_5att.geojson';
var featuregroup;


var parseData = function(D)
{
  return JSON.parse(D);
};

var Filter1= function(feature){
  return feature.properties.Cases!=" ";
};

// POLYGONS
var polyStyle1 = function(feature) {
  if (feature.properties.Cases >10000 ) {
    return {fillColor: '#FF2D2D', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Cases >5000) {
    return {fillColor: '#FFCF53', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Cases >2000) {
    return {fillColor: '#EAFFC0', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.count > 600 ) {
    return {fillColor: '#A1D7FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else {
    return {fillColor: '#4D62FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  }
};


var Filter2= function(feature){
  return feature.properties.Cases>5000;
};

// POLYGONS
var polyStyle2 = function(feature) {
  if (feature.properties.Cases >100000 ) {
    return {fillColor: '#FF2D2D', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Cases >10000) {
    return {fillColor: '#FFCF53', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.count >7000 ) {
    return {fillColor: '#EAFFC0', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else {
    return {fillColor: '#A1D7FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  }
};

var Filter3= function(feature){
  return feature.properties.Twitter!=" ";
};

var polyStyle3 = function(feature) {
  if (feature.properties.Twitter >30000 ) {
    return {fillColor: '#FF2D2D', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Twitter >10000) {
    return {fillColor: '#FFCF53', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Twitter >6000) {
    return {fillColor: '#EAFFC0', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Twitter >3000 ) {
    return {fillColor: '#A1D7FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else {
    return {fillColor: '#4D62FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  }
};

var Filter4= function(feature){
  return feature.properties.sentiment!=" ";
};

var polyStyle4 = function(feature) {
  if (feature.properties.sentiment >0.5 ) {
    return {fillColor: '#FF2D2D', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.sentiment >0) {
    return {fillColor: '#FFCF53', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.sentiment > -0.4) {
    return {fillColor: '#EAFFC0', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.sentiment >-0.5 ) {
    return {fillColor: '#A1D7FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else {
    return {fillColor: '#4D62FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  }
};

var Filter5= function(feature){
  return feature.properties.Concern!=" ";
};

var polyStyle5 = function(feature) {
  if (feature.properties.Concern >5 ) {
    return {fillColor: '#FF2D2D', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Concern >4) {
    return {fillColor: '#FFCF53', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Concern >3) {
    return {fillColor: '#EAFFC0', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else if (feature.properties.Concern >2 ) {
    return {fillColor: '#A1D7FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  } else {
    return {fillColor: '#4D62FF', fillOpacity: 0.4, weight: 1, color: 'white'};
  }
};


var showResults = function() {
  $('#intro').hide();
  $('#results').show();
};

var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
  });
};

//load
$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      onEachFeature: function (feature, layer) {
        layer.myTag = "featureGroup"},
      style: slides.style,
      filter: slides.filter,
    }).addTo(map);

    // quite similar to _.each
    featureGroup.eachLayer(eachFeatureFunction);
  });
});

//remove layer
var removeMarkers = function() {
  map.eachLayer( function(layer) {
    if (layer.myTag && layer.myTag === "featureGroup"){
      map.removeLayer(layer);
    }
  });
};


removeMarkers();
//    <link rel="stylesheet" href="style.css">
