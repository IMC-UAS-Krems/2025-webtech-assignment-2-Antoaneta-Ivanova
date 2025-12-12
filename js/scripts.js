/*Add to Cart Buttons*/

let cart = []

let buttons = document.querySelectorAll(".addtocartbtn");

function addtoCart(event){

    let clickedBtn = event.target;
    cart.push({name: clickedBtn.dataset.name, price: Number(clickedBtn.dataset.price)});
    document.getElementById("cartcount").innerText = cart.length;
    console.log(cart);

    let total = 0;
    for (let item of cart) {
    total += item.price;
    }
    document.getElementById("totalprice").innerText = total;
}

for (let button of buttons){
    button.addEventListener("click", addtoCart)
}


/*Reset Cart Button*/

let resetbutton = document.querySelector("#resetbtn")

function resetCart() {
    cart = [];
    document.getElementById("cartcount").innerText = cart.length;
    document.getElementById("totalprice").innerText = 0;
    console.log(cart)
}

resetbutton.addEventListener("click", resetCart)


/*Check Out Button */

let checkoutbutton = document.getElementById("checkoutbtn")
let information = document.getElementById("intro")

function checkOut(){
    document.getElementById("shoppingsection").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("buyerinformation").classList.remove("hide");

}

checkoutbutton.addEventListener("click", checkOut)