import axios from 'axios';

const directionsApi = axios.create({
    baseURL:'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        language: 'es',
        geometries: 'geojson',
        overview:'simplified',
        steps: true,
        access_token: 'pk.eyJ1IjoiamVzZmVvcm8iLCJhIjoiY2xqZHpjbmU4MnV2azNlcXp6dmh4dDJtMyJ9.R53Fp7VTpATK3BbTVIcgYg'
    }
});

export default directionsApi;