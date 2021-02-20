
export default function createRocketCards(rockets) {
    const cardsContainer = document.querySelector(".cards");
    rockets.forEach(rocket => {
        let img = rocket.flickr_images[1];
        if (img.includes("imgur")) {
            img = "img/spacex-6.png";
        }
        cardsContainer.innerHTML += `
        <div class=" col">
        <div class=" card h-100 ">
            <img class="card-img-top " src="${img}" alt="Card image cap">
            <div class="card-body" >
                <h3 class="card-title">${rocket.name}</h3>
                <p class="card-text">${rocket.description}</p>
                </div>
                <a class=" btn btn-primary" href="detail.html?id=${rocket.id}" > Details</a>
        </div>

    </div> `;
    });
}
