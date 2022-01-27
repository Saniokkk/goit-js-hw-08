import { galleryItems } from './gallery-items.js';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function createListGalleryItems(galleryItems) {
    const listImage = galleryItems.reduce((acc, { preview, original, description }) => {
        acc += 
        `<a class="gallery__item" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `
        return acc;
    }, ''); 
    galleryRef.insertAdjacentHTML('beforeend', listImage);
};
createListGalleryItems(galleryItems);

new SimpleLightbox('.gallery__item',
    {
captionDelay: 250,
captionsData: "alt",        
    });