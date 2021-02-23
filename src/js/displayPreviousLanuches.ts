import _ from 'lodash';

    export default function displayPreviousLanuches(previous) {
        const previousLaunchesContainer = document.querySelector(".previouslaunh");
    
            let html = "";
            const reversedItems = _.reverse(previous);
            const fourItems = _.slice(reversedItems, 0, 4)    
    
        for (let i = 0; i < fourItems.length; i++) {
            let launchDate = new Date(fourItems[i].date_local);
               
            let year = launchDate.getFullYear();
            let date = launchDate.getDate();
            let month = launchDate.getMonth() + 1;
            var options = { month: 'long'};
            
            let today = new Date();
            let hours = today.getHours();
            let min = today.getMinutes();
    
        
    
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


