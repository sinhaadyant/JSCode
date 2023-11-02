function eventListnersforLock() {
  const lockButtons = document.querySelectorAll(".lock-button");

  lockButtons.forEach((lockButton) => {
    lockButton.addEventListener("click", () => {
      const task = lockButton.parentElement.closest(".task");
      if (task) {
        if (task.getAttribute("draggable") == "true") {
          lockButton.innerHTML = `🔓`;
          task.setAttribute("draggable", false);
        } else {
          lockButton.innerHTML = `🔐`;
          task.setAttribute("draggable", true);
        }
      }
    });
  });
}
eventListnersforLock();
