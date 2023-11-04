function eventListnersforLock() {
  const lockButtons = document.querySelectorAll(".lock-button");

  lockButtons.forEach((lockButton) => {
    lockButton.addEventListener("click", () => {
      const task =
        lockButton.parentElement.parentElement.querySelector(".task-text");

      if (task) {
        if (task.hasAttribute("draggable")) {
          if (task.getAttribute("draggable") == "true") {
            lockButton.innerHTML = `🔓`;
            task.setAttribute("draggable", false);
          } else {
            lockButton.innerHTML = `🔐`;
            task.setAttribute("draggable", true);
          }
        } else {
          lockButton.innerHTML = `🔐`;
          task.setAttribute("draggable", true);
        }

        // if (task.getAttribute("draggable") == "true") {
        //   console.log(
        //     "test ==> true",
        //     task.getAttribute("contenteditable"),
        //     typeof task.getAttribute("contenteditable")
        //   );

        //   lockButton.innerHTML = `🔓`;
        //   task.setAttribute("draggable", false);
        // } else {
        //   console.log(
        //     "test ==> false",
        //     task.getAttribute("contenteditable"),
        //     typeof task.getAttribute("contenteditable")
        //   );
        //   lockButton.innerHTML = `🔐`;
        //   task.setAttribute("draggable", true);
        // }
      }
    });
  });
}
eventListnersforLock();
