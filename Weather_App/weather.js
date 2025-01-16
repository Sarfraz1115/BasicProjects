
const api = "https://api.openweathermap.org/data/2.5/weather?appid=9b37f5873defbce330b964dd7f915710&units=metric&q="

let typecity = document.getElementById("inputbx");
let mybtn = document.getElementById("srchbtn");
let city1 = document.querySelector(".city");
let temp1 = document.querySelector(".temp");
let humi1 = document.querySelector(".humi");
let imgg = document.querySelector(".icon")
let humiicon = document.getElementById("humiicon");
async function check(city) {
    try {

        const response = await fetch(api + city);
        var data = await response.json();
        console.log(data)
        // console.log(data.main.temp)
        console.log(data.weather[0].main)
        city1.innerHTML = data.name;
        temp1.innerHTML = Math.round(data.main.temp) + "°C"
        humi1.innerHTML = data.main.humidity + "% Humidity";



        if (data.weather[0].main == "Mist") {
            imgg.src = "weather-app-img/mist.png"
        }
        else if (data.weather[0].main == "Clouds") {
            imgg.src = "weather-app-img/clouds.png"
        }
        else if (data.weather[0].main == "Rain") {
            imgg.src = "weather-app-img/rain.png"
        }
        else if (data.weather[0].main == "drizzle") {
            imgg.src = "weather-app-img/drizzle.png"
        }
        else if (data.weather[0].main == "Clear") {
            imgg.src = "weather-app-img/clear.png"
        }
        else if (data.weather[0].main == "Snow") {
            imgg.src = "weather-app-img/snow.png"
        }
    } catch (error) {
        city1.innerHTML = "";
        humi1.innerHTML = "";
        temp1.innerHTML = "City Not Found";
    }


}
mybtn.addEventListener("click", () => {
    check(typecity.value);

})

