import './styles.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  ifError: document.querySelector('.error'),
};

refs.breedSelect.addEventListener('change', onChooseCatBreed);

refs.loader.classList.remove('is-hidden');

let catsBreedsId = [];
fetchBreeds()
  .then(data => {
  //   for (let i = 0; i < data.length; i += 1) {
  //     const cat = data[i];
  //   catsBreedsId.push({ text: cat.name, value: cat.id });
  // }
  data.forEach(cat => {
      catsBreedsId.push({ text: cat.name, value: cat.id });
    });
    new SlimSelect({
      select: refs.breedSelect,
      data: catsBreedsId,
      settings: {
        showOptionTooltips: true,
      },
    });
  })
  .catch(onError);



