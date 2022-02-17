// Function for the Inputs, convert the input value string to float
function inputs(inputId) {
    const input = document.getElementById(inputId);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.value = "";
    return inputAmount;
}

// Function fot the present amounts, convert the present amount text string to float
function presentAmounts(presentId) {
    const presentValue = document.getElementById(presentId);
    const presentValueText = presentValue.innerText;
    const presentAmount = parseFloat(presentValueText);
    return presentAmount;
}

// Function for the update the value of current display amount
function displayValues(displayId, displayValue) {
    const displayAmount = document.getElementById(displayId);
    displayAmount.innerText = displayValue;
}
// Make the submit button Dynamic 
document.getElementById("submit-button").addEventListener("click", function(){
    const principalExpense = inputs("principal-expense");
    const essentialExpense = inputs("essential-expense");
    const otherExpense = inputs("other-expense");
    const presentExpense = presentAmounts("total-expense");
    const salary = inputs("income-input");
    const expenses = principalExpense + essentialExpense + otherExpense;
    const totalExpenses = presentExpense + expenses;
    
    if (totalExpenses <= salary) {
        displayValues("total-expense", totalExpenses);
    }
    const remainingBalance = salary - totalExpenses;
    if (remainingBalance > 0) {
        displayValues("remaining-balance", remainingBalance);
    }

    // Make the Save Button Dynamic
    document.getElementById("save-button").addEventListener("click", function(){
        const savingsInputAmount = inputs("savings-input");
        const presentSavingAmount = presentAmounts("present-saving");
        const presentRemaining = presentAmounts("remaining-after-saving");
        const SavingAmount = salary / 100 * savingsInputAmount;
        const totalSavingsAmount = presentSavingAmount + SavingAmount;
        if (savingsInputAmount > 0) {
            displayValues("present-saving", totalSavingsAmount);
        }
        const remainingAfterSaving = remainingBalance - totalSavingsAmount;
        const remainingTotalBalance = presentRemaining + remainingAfterSaving;
        displayValues("remaining-after-saving", remainingTotalBalance);

        
    });
});
