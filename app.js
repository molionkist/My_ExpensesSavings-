// function for getting input values and updating totals
function getInputAndUpdateTotal() {
    // getting input values
    const incomeAmount = document.getElementById('income-input').value;
    const foodAmount = document.getElementById('food-input').value;
    const rentAmount = document.getElementById('rent-input').value;
    const clothesAmount = document.getElementById('clothes-input').value;
    // getting total amount fields
    const expensesTotal = document.getElementById('expenses-total');
    const balanceTotal = document.getElementById('balance-total');
    // handling errors
    if (!isNaN(incomeAmount) && !isNaN(foodAmount) && !isNaN(rentAmount) && !isNaN(clothesAmount)) {
        if (incomeAmount > 0 && foodAmount > 0 && rentAmount > 0 && clothesAmount > 0) {
            const expensesTotalAmount = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount);
            if (expensesTotalAmount < incomeAmount) {
                // updating totals
                expensesTotal.innerText = expensesTotalAmount;
                balanceTotal.innerText = parseFloat(incomeAmount) - parseFloat(expensesTotalAmount);
            }
            // giving an error message to users
            else {
                alert('You are expending more money than your Balance');
            }
        }
        else {
            alert('Please,Enter Positive Number');
        }
    }
    else {
        alert('Please, Enter a Valid Input');
    }
}
// function for getting parcentage , updating saving amount and remaining balance
function getParcentageAndUpdateSavings() {
    const savings = document.getElementById('save-input').value;
    const balanceTotal = document.getElementById('balance-total');
    const savingAmountTotal = balanceTotal.innerText * (savings / 100);
    // handling errors
    if (savingAmountTotal > 0) {
        if (savingAmountTotal < balanceTotal.innerText) {
            const savingAmount = document.getElementById('saving-amount');
            savingAmount.innerText = parseFloat(savingAmountTotal.toFixed(2));
            document.getElementById('remaining-balance').innerText = parseFloat(balanceTotal.innerText) - parseFloat(savingAmount.innerText);
        }
        // giving error message to users 
        else {
            alert('You do not have enough money to save');
        }
    }
    else {
        alert('Please, Enter a Valid Parcentage');
    }
}
// event handler for calculate balance and expenses 
document.getElementById('calculate-btn').addEventListener('click', function () {
    getInputAndUpdateTotal();
})
// event handler for savings 
document.getElementById('save-btn').addEventListener('click', function () {
    getParcentageAndUpdateSavings();
})