/*Cart*/

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
