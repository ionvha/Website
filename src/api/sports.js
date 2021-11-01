import axios from './index.js';

export function fetchSports(){
        return axios.get('http://localhost:4000/sports')
}