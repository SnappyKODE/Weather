var city ="lucknow";
var temp = document.getElementById("temperature");
var description = document.getElementById("description");
var feelsLike = document.getElementById("feels");
var humidity = document.getElementById("humidity");
var pressure = document.getElementById("pressure");
var windSpeed = document.getElementById("wind");
var sunrise = document.getElementById("sunrise");
var sunset = document.getElementById("sunset");
var btn = document.getElementById("subBtn");
var cityIn =  document.getElementById("searchedCity");


fetchWeather();

btn.addEventListener("click",()=>{
    city = document.getElementById("searchBox").value;
    cityIn.innerHTML = city;
    fetchWeather();
})

function timeStampConverter(timestamp){
    
var date = new Date(timestamp * 1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
var formattedTime = hours + ':' + minutes.substr(-2);
return formattedTime;
}

function fetchWeather(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=321950fcdddf706d0383f10195640ba9`)
    .then((response)=>{
        console.log(response);
        return response.json();

    }).then((c)=>{
        console.log(c);
        Math.round(c.main.temp-272.15);
        temp.innerHTML = Math.round(c.main.temp-272.15);
        description.innerHTML = (c.weather[0].description).toUpperCase();
        feelsLike.innerHTML = Math.round(c.main.feels_like-272.15);
        humidity.innerHTML = c.main.humidity;
        pressure.innerHTML = c.main.pressure;
        windSpeed.innerHTML = Math.round(c.wind.speed * 3.6);
        sunrise.innerHTML = timeStampConverter(c.sys.sunrise);
        sunset.innerHTML =timeStampConverter( c.sys.sunset);
    })

}



// key = 321950fcdddf706d0383f10195640ba9


// btn.addEventListener("click",()=>{
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=321950fcdddf706d0383f10195640ba9`)
//     .then((response)=>{
//         console.log(response);
//         return response.json();

//     }).then((c)=>{
//         console.log(c)
//     })
// })

