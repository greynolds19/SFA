
//set up our map
var map = L.map('map')
	.setView([37.879894, -93.99], 5);


//set up basemap tiles from mapbox
L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);



//load external geoJSON
$.getJSON('schools.geojson',function(data){
        var geojsonLayer = L.geoJson(data.features, {
    pointToLayer: function (feature, latlng) {
                                return L.circleMarker(latlng, {
                                        radius: 8,
                                        //fillColor: "#ff7800",
                                        fillColor: "#DD3131",
                                        color: "#000",
                                        weight: 1,
                                        opacity: 1,
                                        fillOpacity: 0.7
                                });
                        }
  }).addTo(map);
});



//GR contributions  -- don't work yet...


//create marker - from hw3 code
//var marker = L.marker([40.708051, -73.899450]).addTo(map);
//marker.bindPopup("My apartment").openPopup();


//style markers based on sidebar click
//$('.field').click(function(){
//	var clicked = $(this);
//	geojsonLayer.eachLayer(function(marker)) {
//		if clicked.attr('id')==marker.feature.property
//	}
//}




