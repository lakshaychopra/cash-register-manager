const billAmt = document.querySelector("#bill-amt");
const cashGiven = document.querySelector("#cash-given");
const cashGivenDiv = document.querySelector("#cash-given-container");
const nextButton = document.querySelector("#next-button");
const checkButton = document.querySelector("#check");
const errorMessage = document.querySelector("#error-message");
const numberOfNotes = document.querySelectorAll(".no-of-notes");

const denominations = [2000, 500, 100, 20, 10, 1];

nextButton.addEventListener("click", function validateBillAmount(){
    if (billAmt.value > 0) {
        cashGivenDiv.style.display = "block";
    }
    else {
        showErrorMessage("The bill amount should be greater than 0");
    }
});

checkButton.addEventListener("click", function validateAmount() {

    errorMessage.style.display = "none";
    if (billAmt.value > 0) {
        console.log(cashGiven.value)
        if (cashGiven.value >= billAmt.value) {
            const amountToBeReturned = cashGiven.value - billAmt.value;
            calculateChange(amountToBeReturned);
        }
        else {
            showErrorMessage("The cash given should atleast be equal to bill amount")
        }
    }
    else {
        showErrorMessage("The bill amount should be greater than 0");
    }
});


function calculateChange(amountToBeReturned) {
    for (var i = 0; i < denominations.length; i++) {
        const reamainder = Math.trunc(
            amountToBeReturned / denominations[i]
        );
        amountToBeReturned %= denominations[i]
        numberOfNotes[i].innerText = reamainder;
    }
};


function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
};
