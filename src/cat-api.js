const BASE_URL = 'https://api.thecatapi.com/v1/';
const QUERY_PARAMETERS = './breeds';
const API_KEY =
  'live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo';

export function fetchBreeds() {
  return fetch(`${BASE_URL}${QUERY_PARAMETERS}?api_key=${API_KEY}`).then(
    response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

export function fetchCatByBreed(breedId) {
  return fetch(
    `${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
