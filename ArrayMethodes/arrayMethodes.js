const output = document.getElementById("output");

const expenses = [
    { name: "Coffee", amount: 5 },
    { name: "Lunch", amount: 12 },
    { name: "Book", amount: 25 },
    { name: "Bus Ticket", amount: 3 }
];
const buttons = document.querySelectorAll(".buttons");
buttons.forEach(button => {
    button.addEventListener("click", function () {
        const isCurrentlyPressed = this.getAttribute("aria-pressed") === "true";
        this.setAttribute('aria-pressed', String(!isCurrentlyPressed));
        switch (this.id) {
            case ("show-all"):
                showAll();
                break;
            case ("expensive"):
                expensive();
                break;
            case ("total-btn"):
                totalBtn();
                break;
            case ("sort-btn"):
                sortBtn();
                break;
            case ("find-btn"):
                findBtn();
                break;
            default:
                break;
        }


    })
})


function showAll() {
    clearOutput();
    expenses.map(expense => {

        let name = document.createElement("div");
        name.textContent = expense.name;
        let amount = document.createElement("div");
        amount.textContent = expense.amount
        let expenseOutput = document.createElement("div");
        expenseOutput.appendChild(name);
        expenseOutput.appendChild(amount);
        output.appendChild(expenseOutput);


    })
}
function expensive() {
    clearOutput();
    expenses.filter(expense => expense.amount > 10).forEach(expense => {
        let name = document.createElement("div");
        name.textContent = expense.name;
        let amount = document.createElement("div");
        amount.textContent = expense.amount
        let expenseOutput = document.createElement("div");
        expenseOutput.appendChild(name);
        expenseOutput.appendChild(amount);
        output.appendChild(expenseOutput);
    })
}
function totalBtn() {
    clearOutput();
    const totalCost = expenses.reduce((total, expense) => {
        return total + expense.amount;
    }, 0)
    let totalAmount = document.createElement("div");
    totalAmount.textContent = `total expense is $${totalCost}`;
    output.appendChild(totalAmount);

}
function sortBtn() {
    sortByAmount();
    showAll();

}
function findBtn() {
    clearOutput();

    let name = document.createElement("div");
    let amount = document.createElement("div");
    const expense = expenses.find(expense => expense.name === "Coffee")
    if (expense === undefined) {
        name.textContent = "Sorry, we couldn't find that expense.";
        amount.textContent = "";
    } else {
        name.textContent = expense.name;
        amount.textContent = expense.amount;
    }
    let expenseOutput = document.createElement("div");
    expenseOutput.appendChild(name);
    expenseOutput.appendChild(amount);
    output.appendChild(expenseOutput);

}
function clearOutput() {
    output.innerHTML = "";
    total = 0;
}
function sortByAmount() {
    expenses.sort(
        (a, b) => a.amount - b.amount
    )

}