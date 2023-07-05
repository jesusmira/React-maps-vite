import React from 'react'
import ReactDOM from 'react-dom/client'
import { MapsApp } from './MapsApp'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzZmVvcm8iLCJhIjoiY2xqZHpjbmU4MnV2azNlcXp6dmh4dDJtMyJ9.R53Fp7VTpATK3BbTVIcgYg';


if( !navigator.geolocation ){
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
)
