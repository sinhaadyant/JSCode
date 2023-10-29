const addButton = document.getElementById("add-task");
const inputText = document.getElementById("task-input");
const todoBoard = document.getElementById("todo-board")
const validationMessage = document.getElementById("validation-message");

addButton.addEventListener("click", () => {
    const value = inputText.value.trim();
    if (value) {
        const task = document.createElement("p");
        task.innerText = value;
        task.classList.add("task");
        task.setAttribute("draggable", true);
        task.setAttribute("contenteditable", true);
        todoBoard.appendChild(task);
        inputText.value = "";
        validationMessage.style.display = "none";
        inputText.style.borderColor =`grey` 
        addQuerySelectorToTasks()
        updateBoardTaskCount();


    } else {
        inputText.style.borderColor =`red` 
        validationMessage.innerText = "Please enter a task.";
        validationMessage.style.display = "block";
    }
});