import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");
const gallerymarkUp = createGalleryItem(galleryItems);
galleryRef.innerHTML = gallerymarkUp;

galleryRef.addEventListener("click", onImageClick);

function createGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<div class="gallery__item">
<a class="gallery__link" href="${original}">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    /></a>
        </div>`
        })
    .join("");
}

let modal;
function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    modal = basicLightbox.create(
    `<img src = ${event.target.dataset.source}>`
    )
    modal.show();
}

