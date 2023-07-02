import { catApi } from './api';

export function fetchBreeds() {
  return catApi.get(`breeds`).then(response => {
    return response.data;
  });
}
export function fetchCatByBreed(breedId) {
  return catApi
    .get(`images/search`, {
      params: {
        breed_ids: breedId,
      },
    })
    .then(response => {
      return response.data;
    });
}


// export function fetchBreeds() {
//   return axios.get(`${BASE_URL}${QUERY_PARAMETERS}`, {
//     headers: {
//       'x-api-key': API_KEY,
//     },
//   })
//     .then(response => {
//       console.log(response);
//       return response.data;
//     })
//     .catch(error => {
//     throw new Error(error.response.status);
//   })
// }

// export function fetchCatByBreed(breedId) {
//   return axios
//     .get(`${BASE_URL}images/search`, {
//       params: {
//         breed_ids: breedId,
//       },
//       headers: {
//         'x-api-key': API_KEY,
//       }
//     })
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {
//       throw new Error(error.response.status);
//     });
// }




// export function fetchBreeds() {
//   return fetch(`${BASE_URL}${QUERY_PARAMETERS}?api_key=${API_KEY}`).then(
//     response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }
//       return response.json();
//     }
//   );
// }

// export function fetchCatByBreed(breedId) {
//   return fetch(
//     `${BASE_URL}images/search?breed_ids=${breedId}&api_key=${API_KEY}`
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }
