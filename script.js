let url = 'https://kontests.net/api/v1/all'
let FetchAPI = fetch(url)

let ImagesArray = [
    'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmclMjBjb2RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1489389944381-3471b5b30f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZ3JhbW1pbmclMjBjb2RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1556792189-55769c8dfbac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZ3JhbW1pbmclMjBjb2RlfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60', 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 'https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80', 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1542762933-ab3502717ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1516116412344-6663387e8590?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1587620931276-d97f425f62b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAxfHxwcm9ncmFtbWluZyUyMGNvZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60', 'https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHByb2dyYW1taW5nJTIwY29kZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60', 'https://images.pexels.com/photos/6424584/pexels-photo-6424584.jpeg?auto=compress&cs=tinysrgb&w=300', 'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=600', 'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=300', 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=300', 'https://images.pexels.com/photos/360591/pexels-photo-360591.jpeg?auto=compress&cs=tinysrgb&w=300', 'https://images.pexels.com/photos/256502/pexels-photo-256502.jpeg?auto=compress&cs=tinysrgb&w=300', 'https://cdn.pixabay.com/photo/2018/05/08/08/44/artificial-intelligence-3382507_1280.jpg', 'https://cdn.pixabay.com/photo/2017/12/28/08/39/binary-3044663_1280.jpg', 'https://cdn.pixabay.com/photo/2018/12/10/02/14/manhattan-3866140_1280.jpg'
]

FetchAPI.then((response) => {
    return response.json()
}).then((contests) => {
    console.log(contests);
    ihtml = ''


    const keys = Object.keys(contests);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (i !== keys.length - 1) {
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
    let searchTerm = document.getElementById('searchInput').value.trim(); // Get the search term and remove leading/trailing whitespace
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


