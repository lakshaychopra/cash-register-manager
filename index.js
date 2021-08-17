const billAmt = document.querySelector("#bill-amt");
const nxtbtn = document.querySelector("#next");
const errorMessage = document.querySelector("#error");
const cashGivenDiv = document.querySelector(".cashgiven");
const cashGiven = document.querySelector("#cash-given")
const checkbtn = document.querySelector("#check")
const noOfNotes = document.querySelectorAll(".no-of-notes");
const changeTable = document.querySelector(".change-table")

console.log(nxtbtn)
console.log(cashGivenDiv)

const denomination = [2000, 500, 100, 20, 10, 5, 1];

nxtbtn.addEventListener("click", function checkAmoutValidity() {
    if (Number(billAmt.value) < 0) {
        nxtbtn.style.display = "none";
        errorMessage.innerText = "Enter a valid bill amount"
    }
    else {
        nxtbtn.style.display = "none";
        cashGivenDiv.style.display = "inline";
    }
})

checkbtn.addEventListener("click", function returnChange() {
    if (Number(cashGiven.value) >= Number(billAmt.value)) {
        const amountToBeReturned = Number(cashGiven.value) - Number(billAmt.value);
        calculateChange(amountToBeReturned);
        changeTable.style.display = "block";
        
    } else {
        errorMessage.innerText = "Cash Cannot be less than Bill amount";
    }
})

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < denomination.length; i++) {
        const numberOfNotes = Math.floor(amountToBeReturned / denomination[i]);
        amountToBeReturned = amountToBeReturned % denomination[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}