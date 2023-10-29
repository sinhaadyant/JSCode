const boardTitles = document.querySelectorAll('.board-title');

function addListnerForEditable(){
    container.addEventListener("click", (event) => {
        const task = event.target;
    
        if (task.classList.contains("task") || task.classList.contains("board-title")) {
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
}
addListnerForEditable()
