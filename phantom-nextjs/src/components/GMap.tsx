// =====================================================================================
// DO NOT TOUCH THIS FILE UNLESS EXPLICITLY INSTRUCTED BY THE PROJECT OWNER!
// =====================================================================================
//
// This file implements the custom Google Maps integration for the Footer component.
// Any changes to this file must be explicitly approved by the project owner.
// See strict-warnings-to-ai-assistant.md and general-development-notes.md for protocol.
//
// If you need to update or debug this file, document every change in the work log.
// =====================================================================================

"use client"
import { useEffect, useRef } from "react";

// Custom CSS for info card and marker label
const customMapStyles = `
.gmap-info-card {
  padding: 12px 18px;
  background: rgba(255,255,255,0.97);
  color: #133d5a;
  border-radius: 10px;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  box-shadow: 0 2px 12px rgba(0,0,0,0.18);
  margin: 10px 0 0 10px;
  max-width: 320px;
  z-index: 10;
}
.gmap-info-card a {
  color: #259ae1;
  text-decoration: underline;
  font-weight: 700;
}
.gmap-marker-label {
  font-size: 15px;
  font-weight: 700;
  color: #259ae1;
  background: #fff;
  padding: 2px 8px;
  border-radius: 6px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.12);
  white-space: nowrap;
  border: 1px solid #e0e0e0;
}
`;

// Declare global for Google Maps API
declare global {
  interface Window {
    google: any;
    initMap: () => void;
    markerWithLabelLoaded?: boolean;
  }
}

// API key for Google Maps
const API_KEY = "AIzaSyBxYuiO_au2Gw9sZEVjI49dNV-5AZ-1UaE";

// Latitude slightly north of the actual location, so the marker appears lower in the frame
const MAP_CENTER = { lat: 28.4685, lng: 77.3032 };
// Exact coordinates of Phantom Healthcare
const MARKER_POS = { lat: 28.4654, lng: 77.3032 };

export default function GMap() {
  const ref = useRef<HTMLDivElement>(null);

  // Inject custom styles once
  useEffect(() => {
    if (!document.getElementById('gmap-custom-styles')) {
      const style = document.createElement('style');
      style.id = 'gmap-custom-styles';
      style.innerHTML = customMapStyles;
      document.head.appendChild(style);
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;

    // Helper to check if both scripts are loaded
    function readyToInit() {
      return window.google && window.google.maps && window.markerWithLabelLoaded;
    }

    // Main map initialization
    const initialise = () => {
      if (!ref.current) return;
      // @ts-ignore
      const map = new window.google.maps.Map(ref.current, {
        center: MAP_CENTER,
        zoom: 16,
        mapTypeId: "roadmap",
        disableDefaultUI: true,
      });

      // Use PlacesService to fetch the exact coordinates of the business
      const service = new window.google.maps.places.PlacesService(map);
      service.textSearch({
        query: "Phantom Healthcare IND Private Limited, Faridabad"
      }, (results: any[], status: string) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length) {
          const loc = results[0].geometry.location;

          let marker: any;
          const MWL = (window as any).markerWithLabel?.MarkerWithLabel;
          if (MWL) {
            marker = new MWL({
              position: loc,
              map,
              labelContent: '<span class="gmap-marker-label">Phantom Healthcare</span>',
              labelAnchor: new window.google.maps.Point(16, -4),
              labelClass: 'gmap-marker-label',
              labelInBackground: false,
              icon: {
                url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
                scaledSize: new window.google.maps.Size(27, 43),
              },
            });
          } else {
            marker = new window.google.maps.Marker({ position: loc, map });
          }

          // Prepare a label element (will fill after details)
          const label = document.createElement('div');
          label.className = 'gmap-info-card';
          map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(label);

          // Fetch detailed info (address, rating)
          service.getDetails({
            placeId: results[0].place_id,
            fields: ['name','formatted_address','rating','user_ratings_total','url']
          }, (place:any, detStatus:string) => {
            let html = '';
            if (detStatus === window.google.maps.places.PlacesServiceStatus.OK && place) {
              html = `<strong>${place.name}</strong><br/><span>${place.formatted_address ?? ''}</span>`;
              if (place.rating) {
                html += `<br/><span>Rating: ${place.rating} ⭐ (${place.user_ratings_total ?? 0})</span>`;
              }
              if (place.url) {
                html += `<br/><a href="${place.url}" target="_blank" rel="noopener">View larger map</a>`;
              }
            } else {
              html = 'Phantom Healthcare IND Private Limited';
            }
            label.innerHTML = html;
          });

          // Center map slightly north of marker so label isn't clipped
          map.setCenter({ lat: loc.lat() + 0.00025, lng: loc.lng() });
        } else {
          // Fallback to hard-coded marker if Places fails
          let marker: any;
          const MWL2 = (window as any).markerWithLabel?.MarkerWithLabel;
          if (MWL2) {
            marker = new MWL2({
              position: MARKER_POS,
              map,
              labelContent: '<span class="gmap-marker-label">Phantom Healthcare</span>',
              labelAnchor: new window.google.maps.Point(16, -4),
              labelClass: 'gmap-marker-label',
              labelInBackground: false,
              icon: {
                url: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png",
                scaledSize: new window.google.maps.Size(27, 43),
              },
            });
          } else {
            marker = new window.google.maps.Marker({ position: MARKER_POS, map });
          }

          const label = document.createElement('div');
          label.className = 'gmap-info-card';
          label.innerText = 'Phantom Healthcare IND Private Limited';
          map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(label);

          map.setCenter({ lat: MARKER_POS.lat + 0.00025, lng: MARKER_POS.lng });
        }
      });
    };

    // If both scripts are ready, initialize immediately
    function tryInit() {
      if (readyToInit()) initialise();
    }

    // Load Google Maps JS if not present
    if (!window.google || !window.google.maps) {
      const scriptId = "gmap-script";
      if (!document.getElementById(scriptId)) {
        const s = document.createElement("script");
        s.id = scriptId;
        s.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`;
        s.async = true;
        s.onload = tryInit;
        document.body.appendChild(s);
      }
    }

    // Load MarkerWithLabel if not present
    if (!window.markerWithLabelLoaded) {
      const markerScriptId = "markerwithlabel-script";
      if (!document.getElementById(markerScriptId)) {
        const m = document.createElement("script");
        m.id = markerScriptId;
        m.src = "https://unpkg.com/@googlemaps/markerwithlabel/dist/index.min.js";
        m.async = true;
        m.onload = () => {
          window.markerWithLabelLoaded = true;
          tryInit();
        };
        document.body.appendChild(m);
      }
    }

    // Fallback: if both are already loaded (e.g., hot reload), initialize
    tryInit();
  }, []);

  return <div ref={ref} className="w-full h-full" />;
} 