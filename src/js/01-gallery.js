// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css'

const gallaryList = document.querySelector('.gallery')
console.log(gallaryList)

const markup = galleryItems.map(({preview, original, description}) => {
    return `<a class="gallery__item" href="${original}">
        <img
        class="gallery__image"
      src="${preview}"
      alt="${description}"
    </a>`       
}).join('')
console.log(markup)

gallaryList.insertAdjacentHTML('beforeend', markup)


const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay: 250} );