/*Cart*/

let cart = []

let buttons = document.querySelectorAll(".addtocartbtn");

function addtoCart(event){

    let clickedBtn = event.target;

    cart.push({name: clickedBtn.dataset.name, price: Number(clickedBtn.dataset.price)});

    console.log(cart);
}

for (let button of buttons){
    button.addEventListener("click", addtoCart)
}
