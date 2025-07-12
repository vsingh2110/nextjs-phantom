/**
 * GOOGLE MAPS COMPONENT
 * =====================
 * 
 * PURPOSE: Custom Google Maps integration for Footer component
 * CREATED: July 11, 2025 (during maps integration work)
 * LAST MODIFIED: July 13, 2025 (restored original functionality)
 * 
 * FEATURES:
 * - Dynamic Google Maps loading with Places API
 * - Business location search and marker placement
 * - Custom marker labels using MarkerWithLabel library
 * - Automatic centering to show marker properly
 * - Business details overlay (rating, address, Google Maps link)
 * - Fallback to hardcoded coordinates if Places API fails
 * 
 * DEPENDENCIES:
 * - Google Maps JavaScript API (loaded dynamically)
 * - Google Places API (for business search)
 * - MarkerWithLabel library (for custom marker labels)
 * - React hooks (useEffect, useRef)
 * 
 * IMPLEMENTATION DETAILS:
 * - Uses dynamic script loading to avoid SSR issues
 * - Searches for "Phantom Healthcare IND Private Limited, Faridabad"
 * - Centers map slightly north of marker to prevent label clipping
 * - Fallback coordinates: lat: 28.4654, lng: 77.3032
 * - Zoom level: 16 (good for business location visibility)
 * 
 * USAGE:
 * <GMap />
 */

"use client"
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    google: any;
    initMap: () => void;
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

  useEffect(() => {
    if (!ref.current) return;

    // if google maps already loaded initialise immediately
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

          // If MarkerWithLabel library is available, use it to attach a tiny name beside the pin
          // otherwise fallback to default marker
          const MWL = (window as any).markerWithLabel?.MarkerWithLabel;
          if (MWL) {
            marker = new MWL({
              position: loc,
              map,
              labelContent: '<span style="font-size:13px;font-weight:700;color:#000;white-space:nowrap;">Phantom Healthcare</span>',
              labelAnchor: new window.google.maps.Point(16, -4),
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
          Object.assign(label.style, {
            padding: '8px 12px',
            background: 'white',
            color: '#000',
            borderRadius: '6px',
            fontSize: '12px',
            lineHeight: '1.35',
            fontWeight: '500',
            boxShadow: '0 1px 6px rgba(0,0,0,0.25)',
            margin: '4px',
            maxWidth: '250px'
          });
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
                html += `<br/><a href="${place.url}" target="_blank" rel="noopener" style="color:#1a73e8;text-decoration:underline;font-weight:600;display:inline-block;margin-top:4px;">View larger map</a>`;
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
              labelContent: '<span style="font-size:13px;font-weight:700;color:#000;white-space:nowrap;">Phantom Healthcare</span>',
              labelAnchor: new window.google.maps.Point(16, -4),
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
          Object.assign(label.style, {
            padding: '8px 12px',
            background: 'white',
            color: '#000',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            boxShadow: '0 1px 6px rgba(0,0,0,0.25)',
            margin: '4px'
          });
          label.innerText = 'Phantom Healthcare IND Private Limited';
          map.controls[window.google.maps.ControlPosition.TOP_LEFT].push(label);

          map.setCenter({ lat: MARKER_POS.lat + 0.00025, lng: MARKER_POS.lng });
        }
      });
    };

    // load script once
    if (window.google && window.google.maps) {
      initialise();
    } else {
      const scriptId = "gmap-script";
      if (!document.getElementById(scriptId)) {
        // Load Google Maps JS
        const s = document.createElement("script");
        s.id = scriptId;
        s.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&callback=initMap`;
        s.async = true;
        window.initMap = initialise as any;
        document.body.appendChild(s);

        // Load MarkerWithLabel helper (for small text beside pin)
        const m = document.createElement("script");
        m.src = "https://unpkg.com/@googlemaps/markerwithlabel/dist/index.min.js";
        m.async = true;
        document.body.appendChild(m);
      } else {
        // script loading – wait for callback
        window.initMap = initialise as any;
      }
    }
  }, []);

  return <div ref={ref} className="w-full h-full" />;
} 