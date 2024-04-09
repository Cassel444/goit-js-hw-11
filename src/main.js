import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { createMarkup } from "./js/render-functions.js";
import { getInform } from "./js/pixabay-api.js";

const form = document.querySelector(".form-inline");
const list = document.querySelector(".js-list");
const loader = document.querySelector(".loader")

form.addEventListener("submit", searchImages);
form.addEventListener("click", handlerClick);

function loaderShow() {
    loader.classList.toggle("visible");
}

let searchInput = '';
function searchImages(evt) {
    evt.preventDefault();
    list.innerHTML = '';
    const { query } = evt.currentTarget.elements;
    if (query.value.trim() === '') {
        return iziToast.error({
            title: '',
            message: 'The field can not be empty!!!',
            position: 'topCenter',
            timeout: 3000,
            pauseOnHover: false,
        });
    }

    searchInput = query.value;
    loaderShow();

    getInfo(searchInput)
        .then(data => {
            if (data.hits.length === 0) {
                iziToast.error({
                    title: '',
                    message:
                        'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight',
                    timeout: 3000,
                    pauseOnHover: false,
                });
                loaderShow();
            } else {
                list.insertAdjacentHTML("beforeend", createMarkup(data.hits));
                lightbox.refresh();
                loaderShow();
            }
        })
        .catch(error => console.log(error))
        .finally(() => {
            form.reset();
        });
}
function handlerClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const lightbox = new SimpleLightbox('.images a', {
        captionsData: 'alt',
        captionDelay: 250,
    });
}



const options = {
    title: '✖',
    titleColor: 'rgba(255, 190, 190, 1)',
    titleSize: '24px',
    messageColor: '#FFFFFF',
    messageSize: '16px',
    backgroundColor: 'rgba(239, 64, 64, 1)',
    timeout: 4000,
    position: 'topRight',
};



