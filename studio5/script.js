// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // http://leafletjs.com/reference.html

    // initialize mymap, add coordinates (long/lat)
    var mymap = L.map('mapid').setView([38.53769, -121.76877], 13);

    // tile layer shows streets and an image, add it to mymap, use mapbox to change maps, this is Map Box Streets
    L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic21nYW56ZXIiLCJhIjoiY2l6ZWk1ZjZxMjU3MDMzcXBvemZsdmJnbyJ9.6m8Vaso24T-LH_i6Oi-y2w', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        id: 'your.mapbox.project.id',
        accessToken: 'your.mapbox.public.access.token'
    }).addTo(mymap);


    // a stand alone popup wherever you want it, could be good for debugging
    // use openOn instead of addTo because it handles automatic closing of a previously opened popup when opening a new one which is good for usability
    var popup = L.popup()
        .setLatLng([38.53769, -121.76877])
        .setContent("Welcome to UC Davis!</br>Click on an icon to learn more.")
        .openOn(mymap);


    //mymap.on('click', onMapClick);

    var popup = L.popup();

    // make a tag pop up
    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }

    mymap.on('click', onMapClick);

    var cowIcon = L.icon({
        iconUrl: 'images/cow.png',
        shadowUrl: 'images/shadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });

    var sunflowerIcon = L.icon({
        iconUrl: 'images/sunflower.png',
        shadowUrl: 'images/sunflowerShadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });

    var otterIcon = L.icon({
        iconUrl: 'images/otter.png',
        shadowUrl: 'images/otterShadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });

    var weightIcon = L.icon({
        iconUrl: 'images/weight.png',
        shadowUrl: 'images/weightShadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });

    var deathstarIcon = L.icon({
        iconUrl: 'images/deathstar.png',
        shadowUrl: 'images/deathstarShadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });

    var carrotIcon = L.icon({
        iconUrl: 'images/carrot.png',
        shadowUrl: 'images/carrotShadow.png',

        iconSize: [38, 39], // size of the icon
        shadowSize: [38, 39], // size of the shadow
        iconAnchor: [14, 14], // point of the icon which will correspond to marker's location
        shadowAnchor: [0, 14], // the same for the shadow
        popupAnchor: [4, -15] // point from which the popup should open relative to the iconAnchor
    });


    L.marker([38.53875, -121.76316], {
        icon: cowIcon
    }).addTo(mymap).bindPopup("Come pet the cows here!");
    L.marker([38.56256, -121.77974], {
        icon: sunflowerIcon
    }).addTo(mymap).bindPopup("Get a cute insta pic in a sunflower field!");
    L.marker([38.53712, -121.74797], {
        icon: otterIcon
    }).addTo(mymap).bindPopup("This is the home of the campus otters!");
    L.marker([38.54285, -121.75966], {
        icon: weightIcon
    }).addTo(mymap).bindPopup("Work out here, break a sweat!");
    L.marker([38.54293, -121.74778], {
        icon: deathstarIcon
    }).addTo(mymap).bindPopup("Be careful not to get lost!");
    L.marker([38.54457, -121.74414], {
        icon: carrotIcon
    }).addTo(mymap).bindPopup("Check out the Farmer's Market for fresh fruits and vegies");




});
