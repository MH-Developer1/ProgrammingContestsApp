import {ImagesArray} from "./assets/ImagesArray.json"
let url = 'https://kontests.net/api/v1/all'
let FetchAPI = fetch(url) 

FetchAPI.then((response) => {
    return response.json()
}).then((contests) => {
    console.log(contests);
    ihtml = ''


    const keys = Object.keys(contests);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i !== keys.length) {
            console.log(contests[key]);

            let date = new Date(contests[key].start_time);
            let stime = date.toString()

            let date2 = new Date(contests[key].end_time);
            let etime = date2.toString()

            function secondsToDhm(seconds) {
                seconds = Number(seconds);
                var d = Math.floor(seconds / (3600 * 24));
                var h = Math.floor(seconds % (3600 * 24) / 3600);
                var m = Math.floor(seconds % 3600 / 60);
                var s = Math.floor(seconds % 60);

                var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " days, ") : "";
                var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
                var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes ") : "";
                return dDisplay + hDisplay + mDisplay;
            }


            ihtml += `<div id="cardbox" class="card bg-dark border border-light border-opacity-25 p-2 mt-5 m-1" style="width: 20rem;">
        <img src=".." class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-light fw-bold">${contests[key].name}</h5>
          <p class="card-text text-light"> <span class="fw-semibold"> Site: </span> ${contests[key].site}</p>
          <p class="card-text text-light"><span class="fw-semibold"> Start Time:</span> </span>${stime}</p>
          <p class="card-text text-light"><span class="fw-semibold"> End Time:</span> ${etime}</p>
          <p class="card-text text-light"><span class="fw-semibold"> In 24 Hours?:</span> ${contests[key].in_24_hours}</p>
          <p class="card-text text-light"><span class="fw-semibold"> Duration:</span> ${secondsToDhm(contests[key].duration)}</p>
          <p class="card-text text-light"> <span class="fw-semibold"> Status: </span> ${contests[key].status}</p>
          <a href="${contests[key].url}" target="_blank" class="btn btn-light">Visit Contest</a>
        </div>
      </div>
        `

            var randomIndex = Math.floor(Math.random() * ImagesArray.length);
        }


        let CardContainer = document.getElementById('cardContainer');
        CardContainer.innerHTML = ihtml;
        let CardBox = CardContainer.querySelectorAll('.card');

        CardBox.forEach(function (card) {

            var randomIndex = Math.floor(Math.random() * ImagesArray.length);
            card.querySelector('img').src = ImagesArray[randomIndex]
        })


    }
})


document.getElementById('searchButton').addEventListener('click', function (event) {
    event.preventDefault();
    let searchTermi = document.getElementById('searchInput').value.trim();
    let searchTerm = searchTermi.toLowerCase() // Get the search term and remove leading/trailing whitespace
    if (searchTerm !== '') {
        let elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p'); // Select the elements you want to search within
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let text = element.innerText || element.textContent; // Get the text content of the element

            if (text.toLowerCase().includes(searchTerm)) {
                element.classList.add('bg-warning'); // Add a CSS class to highlight the matching element
            element.classList.add('text-dark'); // Add a CSS class to highlight the matching element

            } else {
                element.classList.remove('bg-warning'); // Remove the CSS class from non-matching 
    element.classList.remove('text-dark'); // Remove the CSS class from non-matching 
            }
        }
        for (let i = 0; i < elements.length; i++) {
            let element = elements[i];
            let text = element.innerText || element.textContent; // Get the text content of the element

            if (text.toLowerCase().includes(searchTerm)) {
                element.scrollIntoView({
            behavior: 'auto',
            block: 'center',
            inline: 'center'
        } )
                break;
            }
        }
    }
});


