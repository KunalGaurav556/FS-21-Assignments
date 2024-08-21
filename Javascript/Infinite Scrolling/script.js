let key = "xR2R2sC6O_PPuLFjzR7U_3Ea7NAo7uUEAiC6dIfBjWM";
let box = document.querySelector(".box");
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=30`;
console.log(apiUrl)

function updataUI(data) {
    data.forEach(photo => {
        let img = document.createElement("img");
        img.src = photo.urls.small;
        img.style.height = "300px";
        img.style.width = "250px";

        box.appendChild(img);
        // console.log(box);
    });
}

async function fetchData() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    updataUI(data);
}
fetchData();

window.addEventListener("scroll", function () {
    if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        fetchData();
    }
});