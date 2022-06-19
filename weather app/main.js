
//Calling APIs
const api = {
    key: "b661c5026be971b11f96620a4327b676",
    base: "https://api.openweathermap.org/data/2.5/"
}


// Linking Searchbox on page to saerchbox 
const searchbox = document.querySelector('.search-box');


//If key is pressed on search box, it is asking to execute function h12
searchbox.addEventListener('keypress', h12);

//Function h12 says that, if the key pressed is 13 (key enter), then run getResults function
function h12(evt) {
    if(evt.keyCode == 13) {
        getResults(searchbox.value);
        document.body.style.backgroundImage = "url('globe.jpg')";
                   }
}

//getResults function takes city name and gives us WEATHER, which then can be broken down further into weather.max, weather.min etc as per API instructions.

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }) .then(displayResults);
}



// using Math.round to round it to nearest digit

function displayResults(weather) {
    console.log(weather);
    document.querySelector('.location .city').textContent = `${weather.name}, ${weather.sys.country}`;
    document.querySelector('.current .temp').textContent = `${Math.round(weather.main.temp)}°C`;
    document.querySelector('.current .hi-low').textContent = `${Math.round(weather.main.temp_max)}°C / ${Math.round(weather.main.temp_min)}°C`;
    document.querySelector('.current .weather').textContent= `${weather.weather[0].main}`;
           }


//This is what is the landing page, without any buttons being pressed

getResults('Moscow');

// This is all to display month/date properly
var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dateObj = new Date()
var weekdayNumber = dateObj.getDay();
var weekdayName = arrayOfWeekdays[weekdayNumber];

var arrayOfMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
var dateObj = new Date()
var MonthNumber = dateObj.getMonth();
var MonthName = arrayOfMonths[MonthNumber];

var today= new Date();
var date = weekdayName +', ' + today.getDate() + ' ' + MonthName + ' '+ today.getFullYear();

console.log(date)
document.querySelector('.date').textContent= date;

//Defines all buttons
const buttMoscow = document.querySelector('.Moscow');
const buttWarsaw = document.querySelector('.Warsaw');
const buttDoha = document.querySelector('.Doha');
const buttPyatigorsk = document.querySelector('.Pyatigorsk');
const buttKrakow = document.querySelector('.Krakow');
const buttWroclaw = document.querySelector('.Wroclaw');
const buttSzczecin = document.querySelector('.Szczecin');
const buttMje = document.querySelector('.Miedzyzdroje');
const buttlis= document.querySelector('.Lisbon');

//Tells each button what to do. Can be refactored 
buttMoscow.addEventListener("click", function(){;
document.body.style.backgroundImage = "url('moscow.jpg')";
getResults('Moscow');
})

buttWarsaw.addEventListener("click", function(){;
    console.log("hello")
document.body.style.backgroundImage = "url('warsaw.jpg')";
getResults('Warsaw');
    })


buttlis.addEventListener("click", function(){;
document.body.style.backgroundImage = "url('lisbon.jpg')";
getResults('Lisbon');
 })    
    

buttDoha.addEventListener("click", function(){;
document.body.style.backgroundImage = "url('doha.jpg')";
getResults('Doha');
})


buttPyatigorsk.addEventListener("click", function(){;
                document.body.style.backgroundImage = "url('pyat.jpg')";
                getResults('Pyatigorsk');
                    })

buttKrakow.addEventListener("click", function(){;
document.body.style.backgroundImage = "url('krakow.jpg')";
getResults('Krakow');
                            })

                            buttWroclaw.addEventListener("click", function(){;
                                document.body.style.backgroundImage = "url('wroclaw.jpg')";
                                getResults('Wroclaw');
                                                            })
                                                            buttSzczecin.addEventListener("click", function(){;
                                                                document.body.style.backgroundImage = "url('szczecin.jpg')";
                                                                getResults('Szczecin');})

                                                
                                                            buttMje.addEventListener("click", function(){;
                                                                document.body.style.backgroundImage = "url('mje2.jpg')";
                                                                getResults('Miedzyzdroje');
                                                            })