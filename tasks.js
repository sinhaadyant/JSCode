 function addTaskEventListener() {
    const addTaskButtons = document.querySelectorAll(".add-card-btn");
    const taskInputs = document.querySelectorAll(".add-task-input");

    addTaskButtons.forEach((addTaskButton, index) => {
        addTaskButton.addEventListener("click", () => {
            console.log("Add clicked");
            const taskText = taskInputs[index].value.trim();
            if (taskText !== "") {
                const newTaskItem = document.createElement("li");
                newTaskItem.textContent = taskText;
                newTaskItem.classList.add("task");
                newTaskItem.draggable = true;
                const board = addTaskButton.closest(".board");
                const boardItems = board.querySelector(".board-items");

                boardItems.appendChild(newTaskItem);
                addQuerySelectorToTasks()
                taskInputs[index].value = "";
            }
        });
    });
}
addTaskEventListener()