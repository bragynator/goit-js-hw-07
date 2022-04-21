import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.innerHTML = galleryMarkup;
galleryRef.addEventListener('click', onImgClick);

const allLinksRef = document.querySelectorAll('.gallery__link');
allLinksRef.forEach(link =>
	link.addEventListener('click', evt => evt.preventDefault()),
);

function createGalleryMarkup(items) {
	return items
		.map(
			item => `
            <div class="gallery__item">
                <a class="gallery__link" href="${item.original}">
                    <img
                        class="gallery__image"
                        src="${item.preview}"
                        data-source="${item.original}"
                        alt="${item.description}"
                    />
                </a>
            </div>`,
		)
		.join('');
}

function onImgClick(evt) {
	if (!evt.target.classList.contains('gallery__image')) {
		return;
	}

	const lightboxModal = basicLightbox.create(
		`<img src="${evt.target.dataset.source}">`,
		{
			closable: false,
			onShow: () => {
				document.addEventListener('keydown', detectEscBtn);
			},
			onClose: () => {
				document.removeEventListener('keydown', detectEscBtn);
			},
		},
	);

	function detectEscBtn(evt) {
		console.log(evt.code);
		if (evt.code !== 'Escape') {
			return;
		}

		lightboxModal.close();
	}

	lightboxModal.show();
}
