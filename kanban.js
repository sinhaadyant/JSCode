function addQuerySelectorToTasks(){  
    const tasks = document.querySelectorAll(".task")
    
    tasks.forEach((task)=>{
        task.addEventListener("dragstart",(e)=>{ 
            task.classList.add("dragging");
        })
    
        task.addEventListener("dragend",(e)=>{ 
            task.classList.remove("dragging");
        })
    })
}
function addQuerySelectorToBoards(){
    const boards = document.querySelectorAll(".board")
    
    boards.forEach((board)=>{
        board.addEventListener("dragover",()=>{
            const task = document.querySelector(".dragging");
            board.appendChild(task)
            updateBoardTaskCount();

        })
        
    })
}

function updateBoardTaskCount() {
    const boards = document.querySelectorAll(".board");
    boards.forEach((board) => {
        const countLabel = board.querySelector(".count-label");
        const tasks = board.querySelectorAll(".task");
        countLabel.innerText = tasks.length;
    });
}
addQuerySelectorToTasks()
addQuerySelectorToBoards()
updateBoardTaskCount();
