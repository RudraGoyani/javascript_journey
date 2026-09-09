let expenses = [];
try {
    const savedExpense = JSON.parse(localStorage.getItem("expenses"));
    expenses = Array.isArray(savedExpense) ? savedExpense : [];
} catch (error) {
    console.log(error);
}
renderExpense()
function renderExpense() {
    let total = 0;
    let expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = "";
    expenses.forEach(function (expense, index) {
        creatChildList(expense, index);
        total += Number(expense.amount);
    })
    document.getElementById("total").textContent = `$${total.toFixed(2)}`;
}
function creatChildList(expense, index) {
    const expenseCard = document.createElement("div");
    const deleteBtn = document.createElement("button");
    const cardText = document.createElement("p");

    expenseCard.className = "expense";
    deleteBtn.textContent = "Remove";

    deleteBtn.addEventListener("click",
        function () {
            expenses.splice(index, 1);
            saveExpense();
            renderExpense();
        }
    );
    cardText.textContent = `${expense.description}  ${expense.amount}`;
    expenseCard.appendChild(cardText);
    expenseCard.appendChild(deleteBtn);

    document.getElementById("expense-list").appendChild(expenseCard);
}

document.getElementById("add-btn").addEventListener("click", function () {

    let description = document.getElementById("description");
    let amount = document.getElementById("amount");

    let expense = {
        description, amount
    };
    if (description.value.trim() !== "" && amount.value.trim()) {
        expense.description = description.value;
        expense.amount = amount.value;
        expenses.push(expense);
        saveExpense();
        renderExpense();
    }
    description.value = "";
    amount.value = "";
})
function saveExpense() {
    localStorage.setItem("expense", JSON.stringify(expenses));
}