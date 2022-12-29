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
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`)
        .then(response => response.json())
        .then(apidata => {
            console.log(apidata)
        })

}