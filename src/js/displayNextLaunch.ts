
export default function displayNextLaunch(data:any) {
  const nextLaunchContainer = document.querySelector(".next-launch");
  let launchDate = new Date(data.date_local);
  let year = launchDate.getFullYear();
  let month = launchDate.getMonth() + 1;
  let options = { month: "long" };
  let today = new Date();
  let hours = today.getHours();


  nextLaunchContainer.innerHTML = `  
  <small class="jumbotronCategory " id="jumbotronCategory">
  ${today < launchDate.getTime() ? "Last Launch Was:" : "Next Launch"}
  </small>
  <h3 class="jumbotronHeaderone">${new Intl.DateTimeFormat("en-US", options).format(month)}<span class="year">${year}</span></h3>
  <h5 class="jumbotronHeadertwo">${data.name}</span></h5>
  <p class ="Flight-nr">Flight-nr: ${data.flight_number}</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href="#" role="button">Start at ${hours}pm</a>
  </p>
  `;


  setInterval(() => {

      const nextLaunchDate = new Date(data.date_local);
      const countDownDate = new Date(nextLaunchDate).getTime();


      const day = document.querySelector("#days");
      const hrs = document.querySelector("#hours");
      const minutes = document.querySelector("#min");
      const seconds = document.querySelector("#sec");
      const nextLanunchText = document.querySelector(".style h5");

      const today = new Date().getTime();
      if (countDownDate > today) {
          const timeRemaining = countDownDate - today;
          let sec = Math.floor(timeRemaining / 1000);
          let min = Math.floor(sec / 60);
          let hours = Math.floor(min / 60);
          let days = Math.floor(hours / 24);
          hours %= 24;
          min %= 60;
          sec %= 60;

          day.innerHTML = `${days}`;
          hrs.innerHTML = `${hours < 10 ? "0" : ""} ${hours}`;
          minutes.innerHTML = `${min < 10 ? "0" : ""} ${min}`;
          seconds.innerHTML = `${sec < 10 ? "0" : ""} ${sec}`;
      } else {
          nextLanunchText.textContent = 'Launch has ended';
          day.textContent = '30';
          hrs.textContent = '00';
          minutes.textContent = '00';
          seconds.textContent = '00';
      }
  }, 1000);

}
