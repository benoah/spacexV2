export default function createRocketCards(rockets) {
    const cardsContainer = document.querySelector(".cards");
    rockets.forEach(rocket => {
        let img = rocket.flickr_images[1];
        if (img.includes("imgur")) {
            img = "https://images.unsplash.com/photo-1581822261290-991b38693d1b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80";
        }
        
        cardsContainer.innerHTML += `
        <div class=" col-sm-12 col-md-3 mb-4">
        <div class=" card h-100 ">
            <img class="card-img-top " src="${img}" alt="Card image cap">
            <div class="card-body" >
                <h3 class="card-title">${rocket.name}</h3>
                <p class="card-text width="" ">${rocket.description}</p>
                </div>
                <a class=" btn btn-primary" href="detail.html?id=${rocket.id}" > Details</a>
        </div>

    </div> `;
    });
}
