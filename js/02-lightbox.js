import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;

function createGalleryMarkup(items) {
	return items
		.map(
			item => `
                <a class="gallery__item" href="${item.original}">
                    <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`,
		)
		.join('');
}

let gallery = new SimpleLightbox('.gallery a', {
	showCounter: false,
	scaleImageToRatio: true,
	maxZoom: 4,
	captionsData: 'alt',
	captionDelay: 250,
});

gallery.on('show.simplelightbox');
