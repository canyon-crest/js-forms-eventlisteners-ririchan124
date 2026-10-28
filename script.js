// ============================================
//  Unit 8.7 – Forms & Event Listeners
// ============================================
//  Complete each section below by following
//  the STEP comments.
//
//  IMPORTANT: Use addEventListener() to wire your
//  buttons — do NOT add onclick in the HTML.
// ============================================


// ============================================
//  WARM-UP: Shout It!
// ============================================
// When the user types text and clicks "Shout",
// display the text in ALL CAPS with "!" at the end.

// STEP 1: Get the "Shout" button by its ID ("btnShout")
//         using document.getElementById()
const btnShout = document.getElementById("btnShout");

// STEP 2: Add a click event listener to the button.
btnShout.addEventListener("click", function () {
    // a) Get the text from the input with ID "shoutInput" using .value
    const shoutInputText = document.getElementById("shoutInput").value;

    // b) Convert the text to uppercase using .toUpperCase()
    // c) Add "!" to the end
    const shoutResult = shoutInputText.toUpperCase() + "!";

    // d) Display the result in the element with ID "outShout" using .innerHTML
    document.getElementById("outShout").innerHTML = shoutResult;
});


// ============================================
//  MAIN: Pizza Builder
// ============================================
// Calculate the total price of a pizza based on:
//   - Size (radio buttons): Small $7.50, Medium $10.00,
//     Large $12.50, XL $15.00
//   - Toppings (checkboxes): $0.50 each
//   - Service (dropdown): Dine In $0, Take Out $1.50,
//     Delivery $3.00

// STEP 3: Get the "Calculate Total" button by ID ("btnCalc")
const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener("click", function () {
    // a) Get the selected size price
    const sizeRadios = document.getElementsByName("rg");
    let sizePrice = 0;

    for (let i = 0; i < sizeRadios.length; i++) {
        if (sizeRadios[i].checked) {
            sizePrice = parseFloat(sizeRadios[i].value);
            break;
        }
    }

    // b) Count checked toppings ($0.50 each)
    const toppingCheckboxes = document.getElementsByName("cb");
    let checkedToppingsCount = 0;

    for (let i = 0; i < toppingCheckboxes.length; i++) {
        if (toppingCheckboxes[i].checked) {
            checkedToppingsCount++;
        }
    }
    const toppingsTotal = checkedToppingsCount * 0.50;

    // c) Get the service fee based on dropdown selection
    const serviceValue = document.getElementById("serviceSelect").value;
    let serviceFee = 0;

    if (serviceValue === "takeout") {
        serviceFee = 1.50;
    } else if (serviceValue === "delivery") {
        serviceFee = 3.00;
    } else {
        // "dinein" or default
        serviceFee = 0;
    }

    // d) Calculate total: size + toppings + service fee
    const total = sizePrice + toppingsTotal + serviceFee;

    // e) Get the customer name from input with ID "myInput"
    let customerName = document.getElementById("myInput").value.trim();

    // If name is empty, use "Customer" as the default
    if (customerName === "") {
        customerName = "Customer";
    }

    // f) Display the result in the element with ID "myPara"
    document.getElementById("myPara").innerHTML = `${customerName}, your total is $${total.toFixed(2)}`;
});


// STEP 4: Get the "Clear" button by ID ("clearBtn")
const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function () {
    // a) Set the name input value to ""
    document.getElementById("myInput").value = "";

    // b) Set the Large radio (id "r3") to checked = true
    document.getElementById("r3").checked = true;

    // c) Uncheck ALL topping checkboxes (loop through them)
    const toppingCheckboxes = document.getElementsByName("cb");
    for (let i = 0; i < toppingCheckboxes.length; i++) {
        toppingCheckboxes[i].checked = false;
    }

    // d) Set the service dropdown value to "dinein"
    document.getElementById("serviceSelect").value = "dinein";

    // e) Set the output paragraph innerHTML to ""
    document.getElementById("myPara").innerHTML = "";
});