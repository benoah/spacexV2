import "../sass/style.scss";// Import our scss file
import 'bootstrap'
import '@fortawesome/fontawesome-free/css/all.css'



import displayNextLaunch from "./cardcontainer/displayNextLaunch";
import createRocketCards from "./cardcontainer/createRocketCards";

console.log("hello");




let NEXT_LAUNCH = `https://api.spacexdata.com/v4/launches/next`;
export const ROCKETS_URL = `https://api.spacexdata.com/v4/rockets`;

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
