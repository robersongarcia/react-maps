import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp.tsx'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJzb25nYXJjaWEiLCJhIjoiY2xocGlkMDE3MDlhNzNlbjA5Z2F3NWdrdCJ9.ZCo5X4EcOevB4T54blxOGQ';

if(!navigator.geolocation) {
  alert('Geolocation is not supported by your browser')
  throw new Error('Geolocation is not supported by your browser')
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
