import React, { useEffect, useRef, useState } from "react";
import "../css/Map.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Feature from "ol/Feature";
import Point from "ol/geom/Point";
import { fromLonLat, toLonLat } from "ol/proj";
import { transform as transformCoord } from "ol/proj";
import Overlay from "ol/Overlay";

// Import the Geocoder from the ol-geocoder package
import Geocoder from "ol-geocoder/dist/ol-geocoder";

import "ol-geocoder/dist/ol-geocoder.css";

const MapComponent = ({ updateGeolocation }) => {
  const mapRef = useRef(null);
  const [coordinates, setCoordinates] = useState([36.8219, -1.2921]);
  const [incidentReport, setIncidentReport] = useState(null);

  useEffect(() => {
    if (!mapRef.current) {
      return;
    }

    // Initialize the map
    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: fromLonLat(coordinates),
        zoom: 10,
      }),
    });

    // Create a vector source and layer for incident reports
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({
      source: vectorSource,
    });
    map.addLayer(vectorLayer);

    // Function to add or update an incident report
    const addOrUpdateIncidentReport = (coords) => {
      // Remove previous incident report
      vectorSource.clear();

      // Create a new incident report
      const point = new Point(fromLonLat(coords));
      const incidentFeature = new Feature({
        geometry: point,
      });
      vectorSource.addFeature(incidentFeature);

      // Set the incident report in state
      setIncidentReport(incidentFeature);
      setCoordinates(toLonLat(coords));

      // Update the parent component with the geolocation
      updateGeolocation(toLonLat(coords));
    };

    // Add a click event to the map to add or update incident reports
    map.on("click", (event) => {
      const coords = event.coordinate;
      addOrUpdateIncidentReport(coords);
    });

    // Initialize with the user's location (if available)
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const coords = [position.coords.longitude, position.coords.latitude];
        addOrUpdateIncidentReport(fromLonLat(coords));
      });
    }

    // Add search functionality with Nominatim
    const geocoder = new Geocoder("nominatim", {
      provider: "osm",
      lang: "en",
      placeholder: "Search for a location...",
      targetType: "text-input",
      limit: 5,
    });
    geocoder.on("addresschosen", function (evt) {
      const coordinates = transformCoord(
        toLonLat(evt.coordinate),
        "EPSG:3857",
        "EPSG:4326"
      );
      addOrUpdateIncidentReport(coordinates);
    });
    map.addControl(geocoder);

    // Function to Cleanup on unmount
    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} className="map" />
      {incidentReport && (
        <div className="incident-report">
          Latitude: {coordinates[1].toFixed(6)}, Longitude:{" "}
          {coordinates[0].toFixed(6)}
        </div>
      )}
    </div>
  );
};

export default MapComponent;
