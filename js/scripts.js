

/*Add to Cart Buttons-----------------------------------------------------------------------------------------------------------------------*/
/* */
let cart = []

let buttons = document.querySelectorAll(".addtocartbtn");

function addtoCart(event){

    let clickedBtn = event.target;

    cart.push({name: clickedBtn.dataset.name, price: Number(clickedBtn.dataset.price)}); /* (HTML data-* global attribute) https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-* */
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


/*Reset Cart Button-----------------------------------------------------------------------------------------------------------------------------*/

let resetbutton = document.getElementById("resetbtn");


function resetCart() {
    cart = [];
    document.getElementById("cartcount").innerText = cart.length;
    document.getElementById("totalprice").innerText = 0;
    console.log(cart)
}

resetbutton.addEventListener("click", resetCart)



/*Check Out Button---------------------------------------------------------------------------------------------------------------------*/

let checkoutbutton = document.getElementById("checkoutbtn")
let information = document.getElementById("intro")

function checkOut(){
    if (cart.length === 0) {
    alert("Please add at least one item to your shopping cart before checking out.");
    return;
    }
    document.getElementById("shoppingsection").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("buyerinformation").classList.remove("hide");
    document.getElementById("navigation").style.display = "none";
    document.getElementById("footnav").style.display = "none";

}

checkoutbutton.addEventListener("click", checkOut)



/*Buyer/Shipping Form------------------------------------------------------------------------------------------------------------*/

    /*References that helped me create my code:
    validity:           https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/checkValidity
    submiting forms:    https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event
    prevent default:    https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault */


let form = document.getElementById("buyerform")

form.addEventListener("submit", submitBuyerForm)

function submitBuyerForm(event){
    event.preventDefault();
    let validity = form.checkValidity()

    if (!validity) {
        return
    }
    
    if (validatePhoneNumber() == false) {
        alert("Phone number must only include digits!");
        return
    }

    confirmationPage();
}




/*Function to check if the given phone number is valid)-------------------------------------------------------------------------------------------------------------------------*/    
    
    /*Reference in using (NaN()): https://uibakery.io/regex-library/numbers-only*/
    /*Reference for using trim(): https://stackoverflow.com/questions/10032024/how-can-i-remove-leading-and-trailing-rendered-as-white-spaces-from-a-given-html*/

function validatePhoneNumber(){
    let phone = document.getElementById("phoneNumber").value 
    phone = phone.trim();
    if (isNaN(phone)) {
        return false;
    }
    else {
        return true;
    }
}






/*Confirmation page-----------------------------------------------------------------------------------------------------------------*/

function confirmationPage(){
    document.getElementById("shoppingsection").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("buyerinformation").style.display = "none";
    document.getElementById("confirmationpage").classList.remove("hide");
    
    summaryCart();
}

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

    return Math.round(total * 100) / 100; /*Math.round(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round */
}

function calculateDiscount(){

    let subtotal = calculateSubtotal();
    let discount = 0;

    if (cart.length >= 3) {
        discount = 0.1 * subtotal;
    }
    return Math.round(discount * 100) / 100;;
}

function calculatetotalCost(){
    let subtotal = calculateSubtotal();
    let discount = calculateDiscount();
    let totalcost = subtotal - discount;
    return Math.round(totalcost * 100) / 100;
}





