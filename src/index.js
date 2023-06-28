// const options = {
//   headers: {
//     api_ke:
//       live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo,
//   },
// };
// axios.defaults.headers.common["x-api-key"] = "live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo";
// const url = 'https://api.thecatapi.com/v1/images/search';

// fetch('https://api.thecatapi.com/v1/images/search?api_key=live_kne6mpkXLgm7nUZCS4ggJbVB6nrlBRkssF2XTvE8EvJdlnobGv1bcarHfgDxjrmo')
//   .then(responce => responce.json())
//   .then(console.log);

fetch('https://api.thecatapi.com/v1/breeds')
  .then(resp => resp.json)
  .then(console.log);
