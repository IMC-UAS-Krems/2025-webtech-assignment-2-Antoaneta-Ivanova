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



/*Buyer/Shipping Form*/
    /*References:
    validity:           https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity
    submiting forms:    https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    prevent default:    https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */


let form = document.getElementById("buyerform")
form.addEventListener("submit", submitBuyerForm)

function submitBuyerForm(event){
    let validity = form.checkValidity()

    if (!validity) {
        return
    }
    
    event.preventDefault();
    confirmationPage();
}

function confirmationPage(){
    document.getElementById("shoppingsection").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("buyerinformation").style.display = "none";
    document.getElementById("confirmationpage").classList.remove("hide");
    
    summaryCart();
}





/*Confirmation page*/


let listsummary = document.getElementById("summary");

function summaryCart(){
    console.log(cart);
    console.log(cart.length);

    listsummary.innerHTML = "";

    for (let item of cart){
        let point = document.createElement("li");
        point.innerText = `${item.name}: €${item.price}`;
        listsummary.appendChild(point)
    }
    document.getElementById("subtotal").innerText = calculateSubtotal()
    document.getElementById("discount").innerText = calculateDiscount()
    document.getElementById("totalcost").innerText = calculatetotalCost()
}

function calculateSubtotal(){
    let total = 0;
    for (let item of cart) {
    total += item.price;
    }
    return total
}

function calculateDiscount(){

    let subtotal = calculateSubtotal();
    let discount = 0;

    if (cart.length >= 3) {
        discount = 0.1 * subtotal;
    }
    return discount;
}

function calculatetotalCost(){
    let subtotal = calculateSubtotal();
    let discount = calculateDiscount();
    let totalcost = subtotal - discount;
    return totalcost
}





