# Mapping Earthquakes

## Overview
We have been asked to create an interactive map that displays earthquake data. The earthquake data we are using for our map is data from the past 7 days and was collected by the [USGS](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). We have also added tectonic plate data from this [GitHub repository](https://github.com/fraxen/tectonicplates/blob/master/GeoJSON/PB2002_boundaries.json). 

## Results

Our map will load as seen below: 

<img width="1373" alt="Full_map" src="https://user-images.githubusercontent.com/116031639/216185725-70fe7801-d250-46c3-a2a2-6028968a7c07.png">

The following Mapbox styles have been added: 
1. Streets
2. Satellite
3. Dark

The following layer groups have been added: 
1. Tectonic plates
2. Earthquakes
3. Major Earthquakes 

We have also added popup features to display the magnitude and location of each point on the map. See below for an example: 

<img width="1371" alt="Full_map_popup" src="https://user-images.githubusercontent.com/116031639/216185800-bb068b62-2f0d-44ca-a289-15d9f9c26ffb.png">
