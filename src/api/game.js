import axios from './index.js';

export function fetchGame(){
        return axios.get('http://localhost:4000/game')
}