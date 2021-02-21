export default function createCompanyList(information) {
    const lisContainer = document.querySelector(".list");

    ///  console.log("information", information);
    lisContainer.innerHTML += `


    <div class="accordion " id="accordionExample">
    <div class="card">
        <div class="card-header" id="headingOne">
                <a class="btn" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false"
                    aria-controls="collapseOne"><h5>Headquarter</h5></a>
        </div>
        <div id="collapseOne" class="collapse   " aria-labelledby="headingOne" data-parent="#accordionExample">
                 
               <p class=""><span>City:</span>${information.headquarters.city}</p>
                 <p><span> State:</span>${information.headquarters.state}</p>
                 <p><span>Address:</span>${information.headquarters.address}</p>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingTwo">
            <a class="btn  collapsed" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="false" aria-controls="collapseTwo"><h5>Management</h5></a>
        </div>
        <div id="collapseTwo" class="collapse  show " aria-labelledby="headingTwo" data-parent="#accordionExample">        
                        <p><span>CEO:</span>${information.ceo}</p>
                        <p><span>CTO:</span>${information.cto_propulsion}</p>
                        <p><span>Employees:</span>${information.employees}</p>
        </div>
    </div>
    <div class="card">
        <div class="card-header" id="headingThree">
                <a class="btn  collapsed" data-toggle="collapse" data-target="#collapseThree"
                    aria-expanded="false" aria-controls="collapseThree"><h5>Founded</h5></a>
        </div>
        <div id="collapseThree" class="collapse " aria-labelledby="headingThree" data-parent="#accordionExample">
        <p><span>Summary:</span>${information.summary}</p>
        <p><span>Founded:</span>${information.founded}</p>
        </div>
    </div>
    
</div>  `;
}
