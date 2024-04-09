import{i as c,S as p}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function m(s){return s.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:f})=>`
    <li class="gallery-item">
      <div class="gallery">
       <a class="gallery-link" href="${i}">
       <img class="gallery-image"
         src="${r}"
         alt="${o}"
        />
       </a>
       
      <ul class="card-description">
        <li class="description">Likes <span class="accent">${e} </span></li>
        <li class="description">Views <span class="accent">${t} </span></li>
        <li class="description">Comments <span class="accent">${n} </span></li>
        <li class="description">Downloads <span class="accent">${f} </span></li>
      </ul>
      </div>
    </li>
    `).join("")}const a=document.querySelector(".form-inline"),u=document.querySelector(".js-list"),g=document.querySelector(".loader");a.addEventListener("submit",y);a.addEventListener("click",h);function l(){g.classList.toggle("visible")}let d="";function y(s){s.preventDefault(),u.innerHTML="";const{query:r}=s.currentTarget.elements;if(r.value.trim()==="")return c.error({title:"",message:"The field can not be empty!!!",position:"topCenter",timeout:3e3,pauseOnHover:!1});d=r.value,l(),getInfo(d).then(i=>{i.hits.length===0?(c.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3,pauseOnHover:!1}),l()):(u.insertAdjacentHTML("beforeend",m(i.hits)),lightbox.refresh(),l())}).catch(i=>console.log(i)).finally(()=>{a.reset()})}function h(s){s.preventDefault(),s.target.nodeName==="IMG"&&new p(".images a",{captionsData:"alt",captionDelay:250})}
//# sourceMappingURL=commonHelpers.js.map
