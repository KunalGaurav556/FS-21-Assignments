function randomNumber() {
    let randomN = "0123456789";
    let ran = ""
    for (let i = 0; i < 3; i++) {
        let Rnumbers = Math.floor(Math.random() * randomN.length);
        ran = ran + randomN[Rnumbers];
    }
    return ran;
    console.log(ran);

}


let burger = document.getElementById("Burger");
let Fries = document.getElementById("Fries");
let Drink = document.getElementById("Drink");
let cart = document.getElementById("cart");
let left = document.getElementById("left");
let order = document.getElementById("Order");
let orderS = document.getElementById("orderS");
let orderss = document.getElementById("orderss")


let div = document.createElement("div");
let brg = document.createElement("p");
let brgImgP = document.createElement("p");
let brgImg = document.createElement("img");
let brgPrice = document.createElement("p");


let count = 0;
let burgerPrice = 30;

function burgerF() {
    count++;
    let totalPrice = count * 30;

    brgImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreDW9RdU2GTU-Ki1tcVXnE_9QABA-As3AIw&s"
    brg.innerHTML = `Burger Added in cart:  ${count}`;
    brgImg.style.height = "180px";
    brgImg.style.width = "250px";
    brgPrice.innerHTML = `Total Price of Burger =  ${totalPrice}`


    brgImgP.appendChild(brgImg);
    div.appendChild(brgImgP);

    div.appendChild(brg);
    div.appendChild(brgPrice);
    left.appendChild(div);

    div.style.borderBottom = "2px solid green";
}



let div2 = document.createElement("div");
let friesNumber = document.createElement("p");
let friesPrice = document.createElement("p");
let friesImg = document.createElement("img");

function FriesF() {
    let totalPrice = count * 40;

    friesImg.src = "https://www.inspiredtaste.net/wp-content/uploads/2023/09/Baked-French-Fries-Video.jpg"

    friesImg.style.height = "180px";
    friesImg.style.width = "250px";



    friesNumber.innerHTML = `Fries Added in cart: ${count++}`;
    friesPrice.innerHTML = `Total Price od Plates : ${totalPrice}`;

    div2.appendChild(friesImg);
    div2.appendChild(friesNumber);
    div2.appendChild(friesPrice);
    left.appendChild(div2);

    div2.style.borderBottom = "2px solid red";
}


let div3 = document.createElement("div");
let drinkImg = document.createElement("img");
let drinkNumber = document.createElement("p");
let drinkPrice = document.createElement("p");

function DrinkF() {
    totalPrice = count * 50;

    drinkImg.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DGx_XiPUdQFdGxNNmhNMKMwhoLviyI7Jlg&s"
    drinkNumber.innerHTML = `Drinks Added In cart : ${count++}`;
    drinkPrice.innerHTML = `Total Price of Drinks : ${totalPrice}`;

    div3.appendChild(drinkImg);
    div3.appendChild(drinkNumber);
    div3.appendChild(drinkPrice);

    // console.log(div3);
    div3.style.borderBottom = "2px solid blue"
    drinkImg.style.height = "180px";
    drinkImg.style.width = "250px"
    left.appendChild(div3);
}


burger.addEventListener("click", burgerF);
Fries.addEventListener("click", FriesF);
Drink.addEventListener("click", DrinkF);

order.addEventListener("click", function () {
    // console.log("fgfh")
    
    setTimeout(() => {


        if (left.children.length === 0) {
            alert("Your Cart is Empty.....Please Order Your Food");
            // console.log("rfthf")
        }
        else {

            let pending = document.createElement("p");
            pending.innerHTML = "Order is Pending...";
            orderss.appendChild(pending);
            pending.style.fontSize = "25px";

           setTimeout(() => {

            burger.style.display = "none";
            Fries.style.display = "none";
            Drink.style.display = "none";


            let orderID = document.createElement("p");
            orderID.innerHTML = `Your Order id is : ${randomNumber()}`;
            orderS.appendChild(orderID);
            orderss.appendChild(div);
            orderss.appendChild(div2);
            orderss.appendChild(div3);

            orderss.style.fontSize = "20px"
            orderss.style.color = "Black";
            orderID.style.color = "Blue";
            orderID.style.fontSize = "22px";

            pending.style.display= "none";
            

           }, 3000);

          

        }
        

    }, 30);

})
