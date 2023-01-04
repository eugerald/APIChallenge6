var APIKey = "92820eef69fda2fba3415f46ffdad057"
var weatherFormEle = document.getElementById("Weather")
weatherFormEle.addEventListener("submit", buttonClick)
console.log("Javascript File")

function buttonClick(e) {
    e.preventDefault();
    var searchtext = document.getElementById("city").value
    console.log("text",searchtext)
    forecast(searchtext)
}


function forecast(city) {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=imperial`)
        .then(response => response.json())
        .then(apidata => {
            var data = apidata.list
            console.log(apidata,data)
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
