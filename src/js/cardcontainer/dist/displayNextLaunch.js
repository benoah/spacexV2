"use strict";
exports.__esModule = true;
function displayNextLaunch(data) {
    var nextLaunchContainer = document.querySelector(".next-launch");
    var launchDate = new Date(data.date_local);
    var year = launchDate.getFullYear();
    var month = launchDate.getMonth() + 1;
    var options = { month: "long" };
    var today = new Date();
    var hours = today.getHours();
    nextLaunchContainer.innerHTML = "  \n      <article class=\"jumbotron\">\n        <div class=\"row\">\n          <div id=\"special\" class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12\">\n            <header class=\"jumbotronHeader\">\n              <small class=\"jumbotronCategory \" id=\"jumbotronCategory\">\n              " + (today < launchDate.getTime() ? "Last Launch Was:" : "Next Launch") + "\n              </small>\n              <h1 class=\"jumbotronTitle \" id=\"jumbotronTitle\">\n              " + new Intl.DateTimeFormat("en-US", options).format(month) + "<span>" + year + "</span></h1>\n              <h2 class\"jumbotronName\">" + data.name + "</h2>\n              <p class=\"flight-nr\">Flight-nr: " + data.flight_number + "</p>\n              <footer class=\"jumbotronFooter\" id=\"jumbotronFooter\">\n              <a class=\"btn btn-primary\" href=\"#\" role=\"button\">Start at " + hours + "pm</a>\n            </footer>\n            </header>\n          </div>\n        </div>\n    </div>\n  </article>";
    setInterval(function () {
        var nextLaunchDate = new Date(data.date_local);
        var countDownDate = new Date(nextLaunchDate).getTime();
        var day = document.querySelector("#days");
        var hrs = document.querySelector("#hours");
        var minutes = document.querySelector("#min");
        var seconds = document.querySelector("#sec");
        var nextLanunchText = document.querySelector(".style h5");
        var today = new Date().getTime();
        if (countDownDate > today) {
            var timeRemaining = countDownDate - today;
            var sec = Math.floor(timeRemaining / 1000);
            var min = Math.floor(sec / 60);
            var hours_1 = Math.floor(min / 60);
            var days = Math.floor(hours_1 / 24);
            hours_1 %= 24;
            min %= 60;
            sec %= 60;
            day.innerHTML = "" + days;
            hrs.innerHTML = (hours_1 < 10 ? "0" : "") + " " + hours_1;
            minutes.innerHTML = (min < 10 ? "0" : "") + " " + min;
            seconds.innerHTML = (sec < 10 ? "0" : "") + " " + sec;
        }
        else {
            nextLanunchText.textContent = 'Launch has ended';
            day.textContent = '30';
            hrs.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        }
    }, 1000);
}
exports["default"] = displayNextLaunch;
