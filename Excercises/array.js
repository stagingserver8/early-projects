// Create an array of three elements. Add a new element at the start. Add new element in the end. Modity second and third element.


// MDN TEST YOUR KNOWLEDGE NR 1

const WineRegions = document.querySelector('.wineregions')

let Array = ['Puglia', 'Venezia', 'Toscana', "Lombardia", "Lazio"];

Array.splice(2,2)

WineRegions.innerHTML = " ";

let paral = document.createElement('p');
paral.textContent = `Best Places: ${Array}`;
WineRegions.appendChild(paral);

console.log(paral)

console.log(Array.toString())