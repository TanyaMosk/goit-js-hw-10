export function createMarkup(cats) {
  return cats
    .map(({ url, breeds }) => {
      // const { url, breeds } = cat;
      const markup = `
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
      return markup;
    })
    .join('');
}
