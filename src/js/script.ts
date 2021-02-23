// Import our scss file
import "../sass/style.scss";
// Import our bootstrao
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'

// Importing function
import displayNextLaunch from "./displayNextLaunch";
import createRocketCards from "./createRocketCards";
import createCompanyList from "./createCompanyList";
import displayLanuches from "./displayLanuches";


// values with the api 
let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;
export const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;
let ABOUT_URL = `https://api.spacexdata.com/v4/company`;



// async functions that are grabbing data we can use
// get data for displaynextlauch
async function getNextLaunch() {
    try {
        const response = await fetch(NEXT_LAUNCH);
        const json = await response.json();
        let data = json;
        displayNextLaunch(data);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getNextLaunch();

// get data for the rocket array
async function getRockets() {
    try {
        const response = await fetch(ROCKETS_URL);
        const json = await response.json();
        let data = json;
        let rocketsArray = data;
        createRocketCards(rocketsArray);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getRockets();


// getting data to the accordion
async function getCompanyInformation() {
    try {
        const response = await fetch(ABOUT_URL);
        const json = await response.json();
        let data = json;
        createCompanyList(data);
    } catch (error) {
        console.log(error);
        // displayMessage("error", error, "container");
    }
}
getCompanyInformation();

const UPCOMING_LAUNCH_URL = `https://api.spacexdata.com/v4/launches/upcoming`;
let launchesArray: any;



fetch(UPCOMING_LAUNCH_URL)
    .then((response) => response.json())
    .then((data) => {
        launchesArray = data;
        displayLanuches(launchesArray);
    })
    .catch((error) => console.log(error));




    const PREVIOUS_LAUNCH_URL = `https://api.spacexdata.com/v4/launches/past`;


    let previousLaunchesArray;
    
    fetch(PREVIOUS_LAUNCH_URL)
        .then((response) => response.json())
        .then((data) => {
            previousLaunchesArray = data;
            displayPreviousLanuches(previousLaunchesArray);
        })
        .catch((error) => console.log(error));
    
    
    function displayPreviousLanuches(previous) {
        const previousLaunchesContainer = document.querySelector(".previouslaunh");
    
        let html = "";
    
    
        for (let i = 113; i < previous.length; i++) {
    
            let launchDate = new Date(previous[i].date_local);
           
            let year = launchDate.getFullYear();
            let date = launchDate.getDate();
            let month = launchDate.getMonth() + 1;
            var options = { month: 'long'};
            
            let today = new Date();
            let hours = today.getHours();
            let min = today.getMinutes();
    
         
    
            console.log(new Intl.DateTimeFormat('en-US', options).format(month));
    
            
    
    
            html += `
            <div class="col-12 col-lg-6 col-md-6 ">
            <div class="event_details">
                <div class="d-flex mb-4">
                    <div class="date">
                    <span>${year}</span>
                    </div>
                    <div class="time-location">
                    <p><span class="dato">${date}.${new Intl.DateTimeFormat('en-US', options).format(month)}</span></p>
                        <p>${hours}:${min} AM</p>
                        <p>${previous[i].name}</p>
                    </div>
                </div>
                <div  class="row">
                <div id="module" class="">
                <p class="collapse" id="collapseExample" aria-expanded="false">
                ${previous[i].details}
                </p>
                <a role="button" class="collapsed" data-toggle="collapse" href="#collapseExample" aria-expanded="false"
                    aria-controls="collapseExample"></a>
            </div>
             
                </div>
            </div>
        </div>
    `;
        }
        previousLaunchesContainer.innerHTML = html;    
    }



    