import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";
import { getInform } from "./js/pixabay-api.js";

const form = document.querySelector(".form-inline");
const input = document.querySelector(".form-control")
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader")

form.addEventListener("submit", searchImages);

function loaderShow() {
    loader.classList.toggle("visible");
}

let searchInput = '';
const lightbox = new SimpleLightbox('.images a', {
    captionsData: 'alt',
    captionDelay: 250,
});

function searchImages(evt) {
    evt.preventDefault();
    list.innerHTML = '';
    searchInput = input.value;
    if (input.value.trim() === '') {
        iziToast.show({
            ...optionsRejected,
            message: 'The field can not be empty!!!',
        });
    }

    loaderShow();

    getInform(searchInput)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.show({
                    ...optionsRejected,
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                });
                loaderShow();
            } else {
                list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
                lightbox.refresh();
                loaderShow();
            }
        })
        .catch(error => console.log(error))
        .finally(() => form.reset());

}
const optionsRejected = {
    title: '✖',
    titleColor: 'rgba(255, 190, 190, 1)',
    titleSize: '24px',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    backgroundColor: 'rgba(239, 64, 64, 1)',
    timeout: 4000,
    position: 'topRight',
};




