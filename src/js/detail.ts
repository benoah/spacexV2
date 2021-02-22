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

        let img = details.flickr_images[1];
        if (img.includes("imgur")) {
            img = "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80";
        }
        container.innerHTML = `
        <div class=" detail">
        <div class="row">
        <div class="col-md-6">
        <div class="col-md-12">
          <div class="project-info-box mt-0">
          <h4 id="Upcomming" class=" cardTitle ">
          ${details.name}</h4>
          <div class="project-info-box-text">
          <p>${details.description}</p>
          </div>
      </div>
        <div class="project-info-box-content">
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
      <img class="d-block w-100" src="${details.flickr_images[1]}" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="${details.flickr_images[2]}" alt="Second slide">
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
<img class="detailimage" src="${details.flickr_images[1]}" alt="">  
<img class="detailimage" src="${details.flickr_images[2]}" alt="">
<img class="detailimage" src="${details.flickr_images[3]}" alt="">
<img class="detailimage" src="${details.flickr_images[4]}" alt="">
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
