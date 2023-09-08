const apiKey = "09906b20144641eaa1441ea1b37556ba"

const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")

async function checkWeather(city){

    const response = await fetch(apiURL + city + `&appid=${apiKey}`)

    var data = await response.json()

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"
    document.querySelector(".weather-icon").src = "images/" + data.weather[0].main + ".png"
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value)
})