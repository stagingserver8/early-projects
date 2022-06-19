
'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');


form.addEventListener('submit', this._newWorkout.bind(this));    
inputType.addEventListener('change', this._toggleElevationField);    
containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));  

let map, mapEvent;

//if (navigator.geolocation)
navigator.geolocation.getCurrentPosition(
   
    //Taking data from the browser... geolocation
    function(position) {
        console.log(position)
        const {latitude} = position.coords;
        const {longitude} = position.coords
        console.log(latitude, longitude)


    //Passing Goolocation data to Leaflet which then passes it to map
    const coords = [latitude, longitude];

    //There is map item on html
    //L 
    map = L.map('map').setView(coords, 10);

    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

  

    map.on('click', function(mapE) {
        mapEvent=mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
        
        
        //console.log(mapEvent)
        //Translating Lat / Long from Browser to Leaflet
        
    
    });
},

function() {
    alert('Could not get positon')
})






form.addEventListener('submit', function(e){
    e.preventDefault();
    
    //Clear input fields
    inputDistance.value = inputDuration.value = inputCadence.value = inputElevation.value = '';
    

    
    //Display the marker when clicked.

        //console.log(mapEvent)
        //Translating Lat / Long from Browser to Leaflet
        
        
        const {lat, lng} = mapEvent.latlng;
        L.marker([lat, lng]).addTo(map).bindPopup(
            L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick:false,
                className: 'running-popup',

        

        }
        
        
        )



        
        )

       
        .setPopupContent("hello")
        .openPopup()


        class Workout {
            constructor(distance, duration) {
                this.distance = distance;
                this.duration = duration;

        

            }

            click() {
                this.clicks++;
            }
        
        }

         //Get data from Form

         const type = inputType.value;
         const distance = +inputDistance.value;
         const duration = +inputDuration.value;
         console.log(distance);
         let workout;
         workout = new workout(type, distance, duration);
         console.log(workout);
       


    
        
    
})

