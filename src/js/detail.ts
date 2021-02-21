// Import our scss file
import "../sass/style.scss";
// Import our bootstrao
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

import { ROCKETS_URL } from "./script";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
    document.location.href = "/";
}

const detailsUrl = ROCKETS_URL + "/" + id;

(async function () {
    try {
        const response = await fetch(detailsUrl);

        const details = await response.json();

        document.title = details.name;

        console.log("details", details.flickr_images[0]);

        const container = document.querySelector(".detail-container");

        let img = details.flickr_images[0];
        let imgone = details.flickr_images[1];

        if (img.includes("imgur")) {
            img = "img/spacex-6.png"
        }
        if (imgone.includes("imgur")) {
            imgone = "img/spacex-uOHYUeIT31o-unsplash.jpg"
        }
        container.innerHTML = `
        <div class="container detail">
        <div class="row">
        <div class="col-md-6">
        <div class="col-md-12">
          <div class="project-info-box mt-0">
          <h5>${details.name}</h5>
          <p class="mb-0">${details.description}</p>
      </div>
        <div class="project-info-box">
         <p><b>Type:</b> ${details.type}</p>
        <p><b>First flight:</b> ${details.first_flight}</p>
         <p><b>Country:</b> ${details.country}</p>
        <p><b>Material:</b> ${details.landing_legs.material}</p>
        <p class="mb-0"><b>Cost per Launch:</b> $${details.cost_per_launch} </p>
     </div>
     </div>
    </div>
    <div class="col-md-6">
    <div class="col-md-12">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="${img}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${imgone}" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${details.flickr_images[3]}" alt="Third slide">
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
 </a>
<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
   <span class="carousel-control-next-icon" aria-hidden="true"></span>
 </a>
</div>  
<div class ="image-row row "> 
<img class="detailimage" src="${details.flickr_images[0]}" alt="">  
<img class="detailimage" src="${details.flickr_images[1]}" alt="">
<img class="detailimage" src="${details.flickr_images[2]}" alt="">
<img class="detailimage" src="${details.flickr_images[3]}" alt="">
            </div>           
        </div> 
    </div>        
</div>
    </div>
        </div>    
          </div>`;
    } catch (error) {
        console.log(error);
    }
})();
