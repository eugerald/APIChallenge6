var APIKey = "92820eef69fda2fba3415f46ffdad057"
var weatherFormEle = document.getElementById("Weather")
weatherFormEle.addEventListener("submit", buttonClick)
console.log("Javascript File")

displayCity()
function buttonClick(e) {
    e.preventDefault();
    var searchtext = document.getElementById("city").value
    console.log("text",searchtext)
    var storedCity = JSON.parse(localStorage.getItem("weatherapi")) || []
    storedCity.push(searchtext)
    localStorage.setItem("weatherapi",JSON.stringify(storedCity))
    displayCity()
    forecast(searchtext)
}

function displayCity(){
    var data = document.getElementById("previousSearch") 
    var storedCity = JSON.parse(localStorage.getItem("weatherapi")) || []
    console.log(storedCity)
    var buttonHTML = "<h4>Previous Search</h4>"
    for(let i =0; i<storedCity.length; i++){
        buttonHTML += `<button class="searchCity btn btn-info m-1 p-1">${storedCity[i]}</button>`
    }
    data.innerHTML=buttonHTML
    var button = document.querySelectorAll(".searchCity")
    button.forEach(element => element.addEventListener("click",getButtonText))
}

function getButtonText(){
    var city = this.textContent
    console.log("city",city)
    forecast(city)
}
function forecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`)
        .then(response => response.json())
        .then(apidata => {
            var data = apidata.list
            console.log(apidata,data)
            document.getElementById("city").textContent = "City : "+ city
            var htmlCard =""
            for(let i =0;i<data.length;i=i+8){
                    htmlCard +=  `<div class="card" style="width: 18rem;">
                 
                    <div class="card-body">
                     <h5 class="card-title">${data[i].dt_txt}</h5> 
                      <p class="card-text">Temp:${data[i].main.temp}.<span>
                      <img src="https://openweathermap.org/img/wn/${data[i].weather[0].icon}@2x.png" class="card-img-top" alt="...">
                      </span></p>
                      <p class="card-text">Humidity:${data[i].main.humidity}.</p>
                      <p class="card-text">Windspeed:${data[i].wind.speed}.</p>
                      <p class="card-text">Description:${data[i].weather[0].description}.</p>
                     
                    </div>
                  </div>`
            }
            document.getElementById("weatherapp").innerHTML = htmlCard
        })

}
