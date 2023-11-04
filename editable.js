const boardTitles = document.querySelectorAll(".board-title");

function addListnerForEditable() {
  const editButtons = document.querySelectorAll(".edit-button");
  editButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const task =
        button.parentElement.parentElement.querySelector(".task-text");
      if (task) {
        if (task.hasAttribute("contenteditable")) {
          if (task.getAttribute("contenteditable") == "true") {
            button.innerHTML = `📝`;
            task.setAttribute("contenteditable", false);
          } else {
            button.innerHTML = `🛑`;
            task.setAttribute("contenteditable", true);
          }
        } else {
          button.innerHTML = `🛑`;
          task.setAttribute("contenteditable", true);
        }
      }
    });
  });
}
addListnerForEditable();
