/* ================================
Week 6 Assignment: Slide Model
================================ */
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
var url = 'result_611.json';
 //var bbTeam = L.geoJSON(null, {onEachFeature: forEachFeature, style: style});
  var bbTeam = L.geoJSON(null, {
        onEachFeature: forEachFeature,
        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, geojsonMarkerOptions);
        }
  });

// Get GeoJSON data and create features.
$.getJSON(url, function(data) {
        bbTeam.addData(data);
});

bbTeam.addTo(map);

$.getJSON(url, function(data) {

    var states = `Location: ${data.Location}<br>
                Case: ${data.Cases}<br>
                Twitter: ${data.Twitter}`


    $(".mypanel").html(text);
});
bbTeam.addTo(map);


/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */




var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [slideExample1, slideExample2, slideExample3]
