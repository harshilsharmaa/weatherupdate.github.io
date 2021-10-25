

// console.log("Weather website");


// API Key: b36a7ef3dfcf44dd82742347212109

// initializing the variable of weather website

window.onload = function () {
showSpinner();
showWeather();
}

function showSpinner() {
let spinner = document.getElementById('spinner');
let spinnerHtml = `<div class="spinner-border " role="status" style="margin-left: 45%; margin-top: 15%; width: 4rem; height: 4rem;" >
        <span class="visually-hidden">Loading...</span>
    </div>`;

spinner.innerHTML += spinnerHtml;
}

function hideSpinner() {
let spinner = document.getElementById('spinner');
// let spinnerHtml = ``;
spinner.innerHTML = "";
}


let key = 'b36a7ef3dfcf44dd82742347212109';
let city = "delhi";
let url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;

let searchCity = document.getElementById('search');
searchCity.addEventListener('click', function () {

city = document.getElementById('city').value;

console.log(city);
// for showing loading spinner
showSpinner();
url = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}&aqi=no`;
showWeather();

// if user enter another value than previous one should be removed

})

function showWeather() {

let weather = document.getElementById('main-box');
let weatherinfo = document.getElementById('info-box');
weather.innerHTML = "";
weatherinfo.innerHTML = "";







// Fetching data from api using xhr

const xhr = new XMLHttpRequest();

xhr.open('POST', url, true);

xhr.onreadystatechange = function () {
    // console.log('ready state is', xhr.readyState);
    if (xhr.readyState == 4) {
    hideSpinner();
    }
}

xhr.onload = function () {
    if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    // location
    let location = json.location;
    console.log(location);

    // temperature
    let temperature = json.current;
    console.log(temperature);

    // condition
    let current = json.current;
    console.log(current);




    // adding html


    // if user enter another value than previous one should be removed

    // weather.innerHTML = "";


    let partialCloudy = 'a.svg';
    let as = 'as.png';

    let backImageUrl;
    let image;


    backImageUrl = ".//background/default.jpeg";
    switch (current.condition.text) {
        case "Partly cloudy":
        backImageUrl = ".//background/partial-cloudy.jpg"
        break;

        case "Mist":
        backImageUrl = ".//background/mist.jpg"
        break;

        case "Patchy rain possible":
        backImageUrl = ".//background/patchy-rain-possible.jpg"
        break;

        case "Light rain shower":
        backImageUrl = ".//background/light-rain-shower.jpg"
        break;

        case "Light rain":
        backImageUrl = ".//background/light-rain-shower.jpg"
        break;

        case "Moderate or heavy rain shower":
        backImageUrl = ".//background/heavy-rain.jpg"
        break;

        case "Patchy light rain with thunder":
        backImageUrl = ".//background/light-rain-shower.jpg"
        break;

        case "Overcast":
        backImageUrl = ".//background/overcast.jpg"
        break;

        case "Fog":
        backImageUrl = ".//background/fog.png"
        break;

        case "Clear":
        backImageUrl = ".//background/clear.jpg"
        break;

        case "Sunny":
        backImageUrl = ".//background/sunny.jpg"
        break;

        case "Torrential rain shower":
        backImageUrl = ".//background/torential-rain-shower.jpg"
        break;

        default:
        backImageUrl = ".//background/default.jpeg"
        break;
    }



    // Adding Icon
    let icon = current.condition.icon;


    // Adding background image
    document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backImageUrl})`;
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    // document.body.style.backgroundTransition = "ease-in-out 2s"
    document.body.style.transition = "all 2s";


    // Day or Night
    let day;
    if (current.is_day == 1) {
        day = "Day";
    }
    else {
        day = "Night"
    }

    let str = `<div id="temperature" class="card text-white bg-dark mb-3"">
        <div class="card-header">${location.name} (${location.region}) (${location.country}) <div class="time">${location.localtime}</div></div>
        <div class="card-body">
            <div class="image-box">
            <i class="flag flag-india"></i>
            <img src=https:${icon} alt="">
            <p style="color:aqua;">${day}</p>
            </div> 
            <div class="temp-text">
            <div>
            <p class="card-text" style="  padding:4px; color:aqua; font-size: 3.2rem;">${temperature.temp_c}&#8451</p>
            <p>Feels like <span style="color:aqua;">${current.feelslike_c}</span></p>
            </div>
            <p style="color:aqua; ">${current.condition.text}</p>
            </div>
        </div>
        </div>`;

    weather.innerHTML += str;

    let infoBox = document.getElementById('info-box');

    infoBox.innerHTML = "";

    let str2 = `        
        <div id="info" class="card text-white bg-secondary mb-3" ">
        <div class="info-body">
            <div class="left">
            <!-- For wind -->

            <div class="wind for-flex">
                <p class="wind-left box-left">Wind</p>

                <p class="wind-right box-right">${current.wind_kph} Kph</p>

            </div>

            <div class="gust for-flex">
                <p class="gust-left box-left">Wind Gust</p>
                <p class="gust-right box-right">${current.gust_kph} Kph</p>
            </div>
            
            <div class="humidity for-flex">
            
                <p class="humidity-left box-left">Humidity</p>
                <p class="humidity-right box-right">${current.humidity}%</p>
                
            </div>

            <div class="precipitation for-flex">
                <p class="precipitation-left box-left">Precipitaion</p>
                <p class="precipitation-right box-right">${current.precip_mm} mm</p>
            </div>
            </div>
            <div class="right">
            <div class="pressure for-flex">
                <p class="pressure-left box-left">Pressure</p>
                <p class="pressure-right box-right">${current.pressure_mb} mb</p>
            </div>

            <div class="cloud for-flex">
                <p class="cloud-left box-left">Cloud</p>
                <p class="cloud-right box-right">${current.cloud}%</p>
            </div>

            <div class="visibility for-flex">
                <p class="visibility-left box-left">Visibility</p>
                <p class="visibility-right box-right">${current.vis_km} Km</p>
            </div>

            <div class="uv for-flex">
                <p class="uv-left box-left">UV</p>
                <p class="uv-right box-right">${current.uv}</p>
            </div>

            </div>
        </div>
    `

    infoBox.innerHTML += str2;

    }
    else {
    
    }
}

xhr.send();

}