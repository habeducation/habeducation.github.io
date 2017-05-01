---
layout: post
title: Esri's arcgis javascript libraries for HAB
---


We recently thought it would be a good exercise to use an ArcGIS library to plot our data from our balloon experiments. We found that the ArcGIS's parent company, Esri, provides great javascript libraries

Here is the data from three of our launches plotted over the Damiansville map!




  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.0.3/dist/leaflet.css" />
  <script src="https://unpkg.com/leaflet@1.0.3/dist/leaflet-src.js"></script>
  <script src="https://unpkg.com/esri-leaflet@2.0.8"></script>
  <script src="https://d3js.org/d3.v4.min.js"></script>

  <style>
    body { margin:20px; padding:0; }
    #map { width:100%;height:600px }
  </style>
<div id="map"></div>
<div style='width:200px'>
<div style='background: red;color:white'>HAB_2</div>
<div style='background: green;color:white'>HAB_0</div>
<div style='background: blue;color:white'>HAB_3</div>
</div>
<script>
    var map = L.map("map").setView([38.509, -89.625], 11);
    L.esri.basemapLayer("Topographic").addTo(map);

    d3.csv('/data/esri-data.csv', function(error, dataset) {
      console.log(dataset)
          var points1 = [];
          var points2 = [];
          var points3 = [];
          for(var i = 0; i < dataset.length-1; i++) {

            var point = new L.LatLng(dataset[i].lat, dataset[i].lng);
            if(dataset[i].cat=='HAB_2') points1.push(point);
            if(dataset[i].cat=='HAB_0') points2.push(point);
            if(dataset[i].cat=='HAB_3') points3.push(point);
          }

        var poly1 = new L.Polyline(points1, {
            color: 'red',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        poly1.addTo(map);

        var poly2 = new L.Polyline(points2, {
            color: 'green',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        poly2.addTo(map);

        var poly3 = new L.Polyline(points3, {
            color: 'blue',
            weight: 3,
            opacity: 0.5,
            smoothFactor: 1
        });
        poly3.addTo(map);
    });

</script>



