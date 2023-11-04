function addTaskEventListener() {
  const addTaskButtons = document.querySelectorAll(".add-card-btn");
  const taskInputs = document.querySelectorAll(".add-task-input");

  addTaskButtons.forEach((addTaskButton, index) => {
    addTaskButton.addEventListener("click", () => {
      const taskText = taskInputs[index].value.trim();
      if (taskText !== "") {
        const newTaskItem = document.createElement("li");
        newTaskItem.classList.add("task");
        newTaskItem.draggable = true;
        newTaskItem.innerHTML = ` 
            <span class="task-text" 
              >${taskText}</span
            >
            <button class="edit-button">📝</button>
            <button class="lock-button">🔐</button>
          `;

        const board = addTaskButton.closest(".board");
        const boardItems = board.querySelector(".board-items");

        const colorInputs = board.querySelector(".color-input");
        if (colorInputs.hasAttribute("data-color")) {
          newTaskItem.style.borderRight = `4px solid ${colorInputs.getAttribute(
            "data-color"
          )}`;
        }
        boardItems.appendChild(newTaskItem);
        addQuerySelectorToTasks();
        searchTasks();
        eventListnersforLock();
        addListnerForEditable();
        taskInputs[index].value = "";
      }
    });
  });
}
addTaskEventListener();
