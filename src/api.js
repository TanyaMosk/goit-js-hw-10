import axios from "axios";

export const catApi = axios.create({
  baseURL: 'https://api.thecatapi.com/v1/',
  headers: {
    'x-api-key':
      'live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo',
  },
});