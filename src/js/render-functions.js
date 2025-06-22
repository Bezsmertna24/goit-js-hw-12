import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags} width="360"" />
      </a>
      <div class="info">
        <p class="text-descr">Likes: <span class="descr">${image.likes}</span></p>
        <p class="text-descr">Views: <span class="descr">${image.views}</span></p>
        <p class="text-descr">Comments: <span class="descr">${image.comments}</span></p>
        <p class="text-descr">Downloads: <span class="descr">${image.downloads}</span></p>
      </div>
    </li>
  `).join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  galleryEl.innerHTML = '';
}

export function showLoader() {
  loaderEl.classList.remove('hidden');
}

export function hideLoader() {
  loaderEl.classList.add('hidden');
}