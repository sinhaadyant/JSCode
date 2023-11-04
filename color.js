function querySelectorForColor() {
  const colorInputs = document.querySelectorAll(".color-input");
  colorInputs.forEach((input) => {
    input.addEventListener("change", () => {
      const selectedColor = input.value;

      // Update the input element's value
      input.setAttribute("data-color", selectedColor);
      const tasksList = input.closest(".board-title").nextElementSibling;
      const tasks = tasksList.querySelectorAll(".task");
      tasks.forEach((task) => {
        task.style.borderRight = `4px solid ${selectedColor}`;
      });
    });
  });
}

querySelectorForColor();
