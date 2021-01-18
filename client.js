$(document).ready(readyNow)

const budget = 25000;
let purchases = [];

function addPurchase() {
    console.log('in addPurchase');
    // get user input create a new object
    let newPurchase = {
        name: $('#itemNameIn').val(),
        price: $('#itemPriceIn').val()
    }
    // push the new purchase into the array
    purchases.push(newPurchase);
    // empty inputs
    $('#itemNameIn').val('')
    $('#itemPriceIn').val('')
    // calculate remainingBudget
    calculateRemainingBudget();
    // update DOM
    displayPurchase();
}

function calculateRemainingBudget() {
    // loop through purchases array
    let totalPrices = 0;
    for(let i = 0; i < purchases.length; i++) {
        // for each purchase, add up total of all prices
        totalPrices += Number(purchases[i].price);
    }
    console.log('totalPrices:', totalPrices);
    // subtract totalPrices from the budget for remainingBudget
    const remainingBudget = budget - totalPrices;
    // display remainingBudget
    let el = $('#remainingBudgetOut');
    el.empty();
    el.append(remainingBudget);
}

function displayPurchase() {
    console.log('in displayPurchase');
    // target output by id
    let el = $('#purchasesOut');
    // empty
    el.empty();
    // loop through purchases array
    for( purchase of purchases) {
        // for each purchase, create a list item
        // append to ul
        el.append(`<li>` + purchase.name + `: $` + purchase.price + `</li>`)
    }
    // for each purchase, create a list item
}

function readyNow() {
    // display budget
    // target budgetOut by id
    let el = $('#budgetOut');
    el.empty();
    el.append(budget);
    // handle click event
    $('#addPurchaseButton').on('click', addPurchase);
    // init display
    calculateRemainingBudget();
}