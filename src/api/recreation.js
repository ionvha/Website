import axios from "./index.js";

export function fetchRecreation(){
    return axios.get('http://localhost:4000/recreation')
}