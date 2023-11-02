const addBoardButton = document.getElementById("add-board");
const inputTextBoard = document.getElementById("board-input");
const container = document.getElementById("main-container")
 
if(addBoardButton){
    addBoardButton.addEventListener("click", () => {
        const value = inputTextBoard.value.trim();
        if (value) {
            const board = document.createElement("div");
            board.classList.add("board");
            board.innerHTML = `<h3  class="board-title">
            <div class="board-header"> 
                <input type="color" class="color-input" value="#00ff00"> 
              </div>
            <span class="board-title" contenteditable="true">${value}</span>
            <span class="count-label">0</span></h3>
            <ul class="board-items">
    		</ul>   
    		<div class="add-task-container">
                <textarea class="add-task-input" placeholder="Add a task"></textarea>
                <button class="add-card-btn btn">Add a task</button>
            </div>
            `;
            const addBoard = document.querySelector(".input-with-button")
            container.insertBefore(board,addBoard);

            addQuerySelectorToBoards()
            addListnerForEditable()
            updateBoardTaskCount();
            addTaskEventListener()
            querySelectorForColor()
            inputTextBoard.value = ""; 
            inputTextBoard.style.borderColor =`grey` 
            
    
        } else {
            inputTextBoard.style.borderColor =`red`  
        }
    });
} 
