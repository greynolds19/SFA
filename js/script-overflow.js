            
/do the same thing again for 'Cluster Recruitment' variable
    // $.getJSON('schoolsfull.geojson',function(data){
    //     console.log(data);
    //     var geojsonLayer2 = L.geoJson(data.features, {
    //         pointToLayer: function (feature, latlng){

    //         }
    //     }).addTo(map);
    // });



 // example: does this feature have a property named popupContent?
    // if (feature.properties && feature.properties.popupContent) {
    //    layer.bindPopup(feature.properties.popupContent);
    // }


            pointToLayer: function (feature, latlng) { 
                // marker2.on('mouseover', function (e) { this.openPopup(); });
                // marker2.on('mouseout', function (e) {this.closePopup(); });
                // return marker2; 
            }

                //triangle attempt with leaflet-dvf
                // var marker2 = L.RegularPolygonMarker(latlng, {
                //     numberOfSides: 3,
                //     rotation: 60.0,
                //     radius: 10,
                //     color: "d3d3d3",
                //     weight: 1
                // });                

                        //<font size="2" color="blue">This is some text!</font>
                // marker2.bindPopup( '<font size = "2">' + "District : " + feature.properties.district + '</font>' + 
                //                   '<br>' + 
                //                   '<b><br />' + "Start Date : " + feature.properties.Start_Date + '</b>' + 
                //                   '<b><br />' + "Cluster Recruitment : " + feature.properties.cluster_recruitment + '</b>'+ 
                //                   '<br />' + "District Coach : " + feature.properties.district_coach +
                //                   '<br />' + "Full Implementer : " + feature.properties.full_implementer +
                //                   '<br />' + "Analysis Sample : " + feature.properties.Analysis_Sample + 
                //                   '<br />' + "Evaluation Sample : " + feature.properties.Eval_Sample);// +
                                  //(feature.properties.cluster_recruitment = '1' ? <br />' + "Test worked - " : ""
 //zoom in on marker on click
 //Zoom out on click 'where is ridgewood'
 //doesn't work here
  // $('marker2').on('click',function() {
  //   map.zoom(5);
  // });




////////////////////////////
//THIS WAS AT THE VERY BOTTOM
//schools data is our js file. use it to create a geojson layer
// geojson = L.geoJson(schoolsdata, {
//     //might need to use pointToLayer here since it's point data...
//     //pointToLayer: function (feature, latlng) {
//     //    return L.circleMarker(latlng, geojsonMarkerOptions);
//     style: style, 
//     }
//     onEachFeature: onEachFeature
//     //created onEachFeature earlier. It does popup window
// }).addTo(map);


    // $.getJSON('us-states.geojson',function(data){
    //     var geojsonLayer3 = L.geoJson(data.features, {
    //         // pointToLayer: function (feature, latlng) {
    //         //     var marker2 = L.circleMarker(latlng, {
    //         //         //style: style
    //         //         radius: 4,
    //         //         fillColor: binaryColor(feature.properties.cluster_recruitment),
    //         //         //fillColor: "#000",
    //         //         color: "#000",
    //         //         weight: 1,
    //         //         opacity: 1,
    //         //         fillOpacity: 1
    //             })
    //             .addTo(map);
    // });






////////////////////////////////////////
//THIS WAS THE STUFF THAT WAS AT THE TOP

//WE CREATE MANY FUNCTIONS HERE AND USE THEM LATER.
//we don't actually use jquery

//declare control to show school info on hover
// var info = L.control();

// //this gets triggered when it's added to map
// info.onAdd = function(map) {
//     this._div = L.DomUtil.create('div', 'info');
//     //domUtil creates a div with class of 'info' with leaflet
//     this.update();
//     //run the update function (created below)
//     return this._div;
// };

// //creates the 'upate' function which gets run above to populate the div with class 'info'
// //fillString var checks if props.name exists and creates a string for flyout thing
// info.update = function (props) {
//     var fillString;
//     if (props) {
//         fillString = '<b>' + props.schname + '</b><br />';
//     }

//     else {
//         fillString = "Hover over a school";
//     }

//     this._div.innerHTML = fillString;
//     //fillString goes in a div
// };

// info.addTo(map);


// //define function 'getcolor' depending on start year
// //red from ColorBrewer
// function getColor(d) {
//     return d = '2010'   ? '#fee5d9' :
//            d = '2011+'  ? '#fcbba1' :
//            d = '2011'   ? '#fc9272' :
//            d = '2012+'  ? '#fb6a4a' :
//            d = '2012'   ? '#de2d26' :
//            d = '2013'   ? '#a50f15' :
//                           '##bdbdbd' ; 
// }

// //define function 'style' to style markers
// function style(feature) {
//     //console.log(feature);
//     return {
//         fillColor: getColor(feature.properties.Start_Date,
//         radius: 6.5,
//         color: "#000",
//         weight: 1,
//         opacity: 1,
//         fillOpacity: 0.7

//     }

// };


// //create a function to be called when there is a mouseover. e is event
// function highlightFeature (e) {
//     var layer = e.target;
//     //e.target is a leaflet layer. We can set style on that layer below (a layer to leaflet is one polygon: Chris)

//     layer.setStyle({
//         weight: 4,
//         fillOpacity: 1
//         //on hover, make outline thicker, and fill fully opaque
//     });

// //IE stuff (came directly from leaflet chroopleth example online)
// if (!L.Browser.ie && !L.Browser.opera) {
//     layer.bringToFront();
// }


// //update info window on hover!
// //we created update fxn already and it is expecting the input 'props'. this is props
// info.update(layer.feature.properties);
// }

// var geojson;
// //declaring a variable to use later

// //create reset function
// //use leaflet resetStyle function to set it back. don't have to manually set width, opacity, etc
// function resetHighlight(e) {
//     geojson.resetStyle(e.target);
//     info.update();
// }

// //comment out for now b/c it gives error
// // funtion zoomToFeature(e) {
// //     map.fitBounds(e.target.getBounds());
// // }
// //get the boundaries of the target of whatever event happened (e) and fit the map to those boundaries
//     //getbounds is a built-in leaflet function

// //call all the functions we created above!
// //assign them to each feature we're declaring
// function onEachFeature(feature, layer) {
//     layer.on({
//         mouseover: highlightFeature,
//         mouseout: resetHighlight,
//         click: zoomToFeature
//         //could also do...
//         //click: function () {
//     });
// }

// //schools data is our js file. use it to create a geojson layer
// geojson = L.geoJson(schoolsdata, {
//     //might need to use pointToLayer here since it's point data...
//     //pointToLayer: function (feature, latlng) {
//     //    return L.circleMarker(latlng, geojsonMarkerOptions);
//     style: style, 
//     }
//     onEachFeature: onEachFeature
//     //created onEachFeature earlier. It does popup window
// }).addTo(map);

// add attribution here
// map.attributionControl.addAttribution('Poverty data &copy; <ahref = 'http://census.gov/'>US Census Bureau</a>);


// my legend will be different. Code below is adapted from Chris' example, but it probably won't work. look up example
// comment it out for now...
// var legend = L.control({position: 'topright'});

// legend.onAdd = function (map) {

//     //create div with classes of info and legend
//     var div = L.DomUtil.create('div', 'info legend')
//     ,
//     grades = [2010, 2011, 2011+, 2011, 2012+, 2012, 2013]
//     //array to create legend. don't know if this will work (numeric vs. character...)
//     labels = [],
//     //assign labels an empty array
//     from, to;
//     //create these variables but don't assign them anything yet

// //loops through every elements in grades (length is # of elements)
// for (var i=0; i < grades.length; i++) {
//     from = grades[i];
//     to = grades{i = 1];

//     labels.push(
//         '<i syle="background:' + getColor(i);
// }






