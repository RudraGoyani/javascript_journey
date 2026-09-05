document.getElementById("add-btn").addEventListener("click", addItem);
addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addItem();
    }
});

function addItem() {
    let input = document.getElementById("task-input");
    if (input.value === "") { return; }
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    let li = document.createElement("li");
    li.textContent = input.value;
    li.appendChild(removeBtn);
    input.value = "";

    removeBtn.addEventListener("click", function () {
        li.remove();
    });

    li.addEventListener("click", function () {
        li.style.textDecoration =
            li.style.textDecoration === "line-through"
                ? "none"
                : "line-through";
    });
    document.getElementById("task-list").appendChild(li);
}