import { galleryItems } from "./gallery-items.js";
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
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
  })
  .join("");
gallery.innerHTML = galleryList;
const gallaryImages = gallery.querySelectorAll(".gallery__image");
gallaryImages.forEach((image) => {
  image.addEventListener("click", (event) => {
    event.preventDefault();
    const source = image.dataset.source;
    const alt = image.alt;
    const instance = basicLightbox.create(`
// <div class="modal"> 
//     <img class = gallery__image src="${source}" alt = "${alt}" />
//     </div>
// `);

    instance.show();
    
  });
});


console.log(galleryItems);
