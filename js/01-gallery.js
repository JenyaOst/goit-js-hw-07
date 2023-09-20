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
  gallery.addEventListener("click", handleClick);

  function handleClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
      return;
    }

  
    const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" alt="${event.target.alt}"/>
    `,{
      onShow: () => { document.addEventListener("keydown", onEscPress) },
      onClose: () => {document.removeEventListener("keydown", onEscPress)}
    });
    instance.show();
  
    function onEscPress(event) {
      if (event.code === "Escape") {
        instance.close();
      }
    };
  }


console.log(galleryItems);
