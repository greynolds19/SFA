
//initialize leaflet map
var map = L.map('map')
	.setView([37.879894, -93.99], 5);


//sadd basemap tiles from mapbox
L.tileLayer('http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png', {
    maxZoom: 18
}).addTo(map);

 
//Start_Date color
function yearColor(d) {
    return d == '2010'   ? '#eff3ff' :
           d == '2011+'  ? '#c6dbef' :
           d == '2011'   ? '#9ecae1' :
           d == '2012+'  ? '#6baed6' :
           d == '2012'   ? '#3182bd' :
           d == '2013'   ? '#08519c' :
                           '#FF00FF' ; 

}

//cluster recruitment color
function binaryColor(d) {
    return d == '0' ? "#FFFFFF" :
           d == '1' ? "#000000" :
                      "#FF00FF" ;
}

//cluster recruitment weight
function getWeight(d) {
    return d == '0' ? .5 :
           d == '1' ? 3 :
                      5 ;
}


    //load geojson and style by data
    $.getJSON('data/schoolsfull.geojson',function(data){
        var geojsonLayer = L.geoJson(data.features, {
            pointToLayer: function (feature, latlng) {

                //circle
                var marker = L.circleMarker(latlng, {
                    radius: 9,
                    fillColor: yearColor(feature.properties.Start_Date),
                    color: "#000",
                    weight: getWeight(feature.properties.cluster_recruitment),
                    opacity: 1,
                    fillOpacity: 1
                });

                //triangle
                // var marker = L.RegularPolygonMarker(latlng, {
                //     numberOfSides: 3,
                //     rotation: 60.0,
                //     radius: 9,
                //     fillColor: yearColor(feature.properties.Start_Date),
                //     color: "#000",
                //     weight: 1,
                //     opacity: 1,
                //     fillOpacity: 1
                // });

                       
                marker.bindPopup( '<font size = "2">' + "District : " + feature.properties.district + '</font>' + 
                                  '<br>' + 
                                  '<b><br />' + "Start Date : " + feature.properties.Start_Date + '</b>' + 
                                  '<b><br />' + "Cluster Recruitment : " + feature.properties.cluster_recruitment + '</b>' +
                                  '<br />' + "District Coach : " + feature.properties.district_coach +
                                  '<br />' + "Full Implementer : " + feature.properties.full_implementer +
                                  '<br />' + "Analysis Sample : " + feature.properties.Analysis_Sample + 
                                  '<br />' + "Evaluation Sample : " + feature.properties.Eval_Sample);
                marker.on('mouseover', function (e) {
            this.openPopup();
        });
        marker.on('mouseout', function (e) {
            this.closePopup();
        });
                return marker; 
            }   

}).addTo(map);
    });




////CHOROPLETH Part

//DP0190001 is "homeowner vacancy (%)"
function choroColor(d) {
    //console.log(d);
    return d < '2'  ? '#f7f7f7' :
           d < '4'  ? '#cccccc' :
           d < '6'  ? '#969696' :
                      '#525252' ;
}

function styleChoro(feature) {
    return {
        fillColor: choroColor(feature.properties.DP0190001),
        weight: .5,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: 0.6
    };
}

L.geoJson(tractData, {style: styleChoro}).addTo(map);

console.log(tractData);






