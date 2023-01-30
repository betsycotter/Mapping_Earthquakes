// Add console.log to check to see if our code is working.
console.log("working");

/*
// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);

 Create the map object with a center and zoom level- alternate to above 14.2.4.
let map = L.map("mapid", {
    center: [
      40.7, -94.5
    ],
    zoom: 4
  }); 
  
//  14.4.1 Add a simple marker to the map for Los Angeles, California.
let marker = L.marker([34.0522, -118.2437]).addTo(map);
*/
// Adding a circle marker
// 14.4.1 Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add a marker to the map for LA CA
L.circle([34.0522, -118.2437], {
  radius: 300, 
  color: 'black',
  fillColor: 'lightyellow', 
  fillOpacity: 0.5
}).addTo(map); 

/*
// We create the tile layer that will be the background of our map - this is street view light.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
*/

// to make it dark mode, change first URL and add dark mode id
// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/dark-v10',
    accessToken: API_KEY
});


// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

