import _ from 'lodash';

    export default function displayLanuches(launches) {
        const upcomingLaunchesContainer = document.querySelector(".upcominlaunh");
    
        let html = "";

        const fourItems = _.slice(launches, 0, 8)  

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
            <div class="col-6 col-lg-3 col-md-6">
                <div class="event_details">
                    <div class="d-flex mb-4">
                    <div class="date"><span>${year}</span></div>
                    <div class="time-location">
                    <p><span class="dato">${date}.${new Intl.DateTimeFormat('en-US', options).format(month)}</span></p>

                    <p><span class="ti-time mr-2"></span> ${hours}:${min} AM</p>
                     <p><span class="ti-location-pin mr-2"></span> ${launches[i].name}</p>
                    </div>
                    </div>
                    <div class="row">
                    
                    <div class="col-sm eventtext">
                    Flight nr:
                    ${launches[i].flight_number}
                  </div>
                  <div class="col-sm eventtext">
                  </div>
                  </div>
                </div>
                </div>
    `;
        }
        upcomingLaunchesContainer.innerHTML = html;
    
    }
    