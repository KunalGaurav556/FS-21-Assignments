let main = document.getElementById("main");
let btn = document.getElementById("btn");

for (let i = 0; i < 100; i++) {
    // let div = document.createElement("div");
    let div = `<div class="color_container"></div>`
    // main.appendChild(div);
    main.innerHTML += div;
}

// console.log(main);

function randomColor() {
    let number = "1234567890abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        let randColr = Math.floor(Math.random() * number.length);
        color = color + number[randColr];     
    }
    return color
    // console.log(color)
}

function generateColor() {
    let colorConatainer = document.querySelectorAll(".color_container");
    console.log(colorConatainer);

    colorConatainer.forEach((ele)=>{
        let newColor = randomColor();
        ele.style.background = newColor;
        ele.innerHTML = newColor;
        ele.style.width = "200px";
        ele.style.height = "150px";
        ele.style.borderRadius = "20px"
        // ele.stye.display = "flex";
    })
   
}


window.addEventListener("load", generateColor);
btn.addEventListener("click",generateColor)

 