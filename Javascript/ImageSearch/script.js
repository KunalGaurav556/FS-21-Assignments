let search = document.querySelector("#search");
let searchBtn = document.querySelector("#search-btn");
let imgContainer = document.querySelector(".img-container");

function updateUI(data) {
    imgContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        let img = document.createElement("img");
        img.src = data.results[i].urls.small;
        img.style.height = "300px"
        img.style.width = "400px"
        imgContainer.appendChild(img);
    }

}


async function fetchdata() {
    let search_value = search.value;
    console.log(search_value);

    if (search_value === '') {
        alert('please enter something');
    } else {
        let key = 'iRbNUDd1ib-EeWD6LmiIyuTpeZFp31ftCEe6VS1BsHs';
        let url = `https://api.unsplash.com/search/photos?page=10&query=${search_value}&client_id=${key}`;

        try {
            let response = await fetch(url); // Fetch the data once
            let data = await response.json(); // Convert the response to JSON
            console.log(data, "data");
            updateUI(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

searchBtn.addEventListener("click",fetchdata)    