import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");
const galleryList = galleryItems
  .map(({ preview, original, description }) => {
    return `
        <li data-previev = "${preview}" class="gallery__item js-gallery-item">
      <a class="gallery__link" href="${original}" rel = "noopener noreferrer nofollow " >
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>
    `}).join("");
    gallery.innerHTML = galleryList;
    const lightbox = new SimpleLightbox('.gallery a', {
        caption: true,
        captionsData: 'alt',
        captionDelay: 250,
      });

console.log(galleryItems);
