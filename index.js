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
var bg = document.querySelector(".container");
var defaultImg =["url('./img/default1.jpg') center / cover "
,"url('./img/default2.jpg') center / cover "
,"url('./img/default3.jpg') center / cover "];

var cloudImg =["url('./img/cloud1.jpg') center / cover "
,"url('./img/cloud2.jpg') center / cover "
,"url('./img/cloud3.jpg') center / cover "];


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


function weatherDes(w){
        if(w == "Drizzle"){
                bg.style.background = "url('./img/drizzle.jpg') center / cover "
        }
        else if(w == "Fog"){
            bg.style.background = "url('./img/fog.jpg') center / cover "
        }
        else if(w == "Haze"){
            bg.style.background = "url('./img/haze.jpg') center / cover "
        }
        else if(w == "Rain"){
            bg.style.background = "url('./img/rain.jpg') center / cover "
        }
        else if(w == "Snow"){
            bg.style.background = "url('./img/snow.jpg') center / cover "
        }
        else if(w == "Thunderstorm"){
            bg.style.background = "url('./img/thunder.jpg') center / cover "
        }
        else if(w == "Clouds"){
            bg.style.background = cloudImg[Math.floor(Math.random() * cloudImg.length)]
        }
        else{
            bg.style.background = defaultImg[Math.floor(Math.random() * defaultImg.length)]
        }
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
        description.innerHTML = (c.weather[0].main).toUpperCase();
        weatherDes(c.weather[0].main);
        feelsLike.innerHTML = Math.round(c.main.feels_like-272.15);
        humidity.innerHTML = c.main.humidity;
        pressure.innerHTML = c.main.pressure;
        windSpeed.innerHTML = Math.round(c.wind.speed * 3.6);
        sunrise.innerHTML = timeStampConverter(c.sys.sunrise);
        sunset.innerHTML =timeStampConverter( c.sys.sunset);
    })

}

