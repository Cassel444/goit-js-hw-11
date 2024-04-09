import{S as g,i as c}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function h(r){return r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:m})=>`
    <li class="gallery-item">
      <div class="gallery">
       <a class="gallery-link" href="${i}">
       <img class="gallery-image"
         src="${s}"
         alt="${o}"
        />
       </a>
       
      <ul class="card-description">
        <li class="description">Likes <span class="accent">${e} </span></li>
        <li class="description">Views <span class="accent">${t} </span></li>
        <li class="description">Comments <span class="accent">${n} </span></li>
        <li class="description">Downloads <span class="accent">${m} </span></li>
      </ul>
      </div>
    </li>
    `).join("")}function y(r=""){const s="https://pixabay.com/api/",i="43214840-c1c575028749116cdd7e0c5e8",o=new URLSearchParams({key:i,q:r,image_typ:"photo",orientation:"horizontal",safesearch:!0,per_page:20});return fetch(`${s}?${o}`).then(e=>{if(console.log(e),!e.ok)throw new Error(e.statusText);return e.json()})}const f=document.querySelector(".form-inline"),l=document.querySelector(".form-control"),u=document.querySelector(".js-list"),b=document.querySelector(".loader");f.addEventListener("submit",S);function a(){b.classList.toggle("visible")}let p="";const L=new g(".images a",{captionsData:"alt",captionDelay:250});function S(r){r.preventDefault(),u.innerHTML="",p=l.value,l.value.trim()===""&&c.show({...d,message:"The field can not be empty!!!"}),a(),y(p).then(s=>{s.hits.length===0?(c.show({...d,message:"Sorry, there are no images matching your search query. Please try again!"}),a()):(u.insertAdjacentHTML("beforeend",h(s.hits)),L.refresh(),a())}).catch(s=>console.log(s)).finally(()=>f.reset())}const d={title:"✖",titleColor:"rgba(255, 190, 190, 1)",titleSize:"24px",messageColor:"#FFFFFF",messageSize:"16px",backgroundColor:"rgba(239, 64, 64, 1)",timeout:4e3,position:"topRight"};
//# sourceMappingURL=commonHelpers.js.map
