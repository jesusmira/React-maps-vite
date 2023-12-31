import axios from 'axios';

const searchApi = axios.create({
    baseURL:'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiamVzZmVvcm8iLCJhIjoiY2xqZHpjbmU4MnV2azNlcXp6dmh4dDJtMyJ9.R53Fp7VTpATK3BbTVIcgYg'
    }
});

export default searchApi;