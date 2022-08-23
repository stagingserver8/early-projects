document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    //Create an XHR Object. Instantiating any other object. It has properties and methods associated with it.
    const xhr = new XMLHttpRequest();

    // OPEN 

    xhr.open('GET', "data.txt", true)
    xhr.onload = function () {
        if(this.status === 200) {
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }

    }

    xhr.onerror = function() {
        console.log('Error....')
    }
    xhr.send();
}



//HTTP Statuses
//200: OK
//403: "FORBIDDEN"
//404: "NOT FOUND"