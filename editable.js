
container.addEventListener("click", (event) => {
    const task = event.target;

    if (task.classList.contains("task")) {
        task.contentEditable = true; 
        task.focus();
        task.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
                e.preventDefault();
                task.blur(); 
            }
        });
        task.addEventListener("blur", () => {
            task.contentEditable = false; 
         });
    }
});
