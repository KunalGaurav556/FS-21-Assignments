let key = "hou5apMau9Ai4Go9TDuVjc-n_kyOtuK9_a5_gn1t7Fg"; 
let box = document.querySelector(".box");
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=30`;
console.log(apiUrl)

function updataUI(data){
   data.forEach(photo => {
    let img = document.createElement("img");
    img.src = photo.urls.small;
    img.style.height = "300px"
    img.style.width = "250px"
    
    box.appendChild(img);
    // console.log(img);

   });

}
//    updataUI();

async function fetchData() {
    let response = await fetch(apiUrl);
    let data = await response.json();
    console.log(data);
    // return data;
    updataUI(data);
    
}
fetchData();

window.addEventListener("scroll" , function(){
    if(this.window.scrollY+this.window.innerHeight >=this.document.body.offsetHeight){
        fetchData();
        // updataUI()
    }
})