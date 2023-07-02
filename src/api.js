import axios from "axios";

const API_KEY = 'live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo'

export const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key': API_KEY,      
  },
});