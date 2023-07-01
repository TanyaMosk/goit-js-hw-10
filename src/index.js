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
  textLoader: document.querySelector('.loader-text'),
};

refs.breedSelect.addEventListener('change', onChooseCatBreed);

refs.loader.classList.remove('is-hidden');
refs.textLoader.classList.remove('is-hidden');

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
      
    });
  })
  .catch(onError);

function onChooseCatBreed(event) {
  refs.catInfo.innerHTML = '';
  refs.loader.classList.remove('is-hidden');
  refs.textLoader.classList.remove('is-hidden');

  const breedId = event.currentTarget.value;

  fetchCatByBreed(breedId)
    .then(data => {
      refs.loader.classList.add('is-hidden');
      refs.textLoader.classList.add('is-hidden');
      // console.log(breedId);
      createMarkup(data);
    })
    .catch(onError);
}

function createMarkup(cats) {
  return cats
    .map(({ url, breeds }) => {
      // const { url, breeds } = cat;
      refs.catInfo.innerHTML = /*html*/ `
    <div class="cat-description">
      <img src="${url}" alt="${breeds[0].name}" width="460">
      <div class="cat-text">
      <h2>${breeds[0].name}</h2>
      <h3>Origin</h3>
      <p>${breeds[0].origin}</p>
      <h3>Temperament</h3>
      <p>${breeds[0].temperament}</p>
      <h3>Description</h3>
      <p>${breeds[0].description}</p></div>
    </div> `;
    })
    .join('');
}

function onError() {
  refs.loader.classList.remove('is-hidden');

  Notiflix.Notify.failure(refs.ifError.textContent, {
    position: 'center-top',
    timeout: 5000,
    width: '520px',
    fontSize: '20px',
    cssAnimationStyle: 'from-top',
  });
}

