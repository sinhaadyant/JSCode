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
        board.addEventListener("dragover",(e)=>{
            const task = document.querySelector(".dragging");
            const closestEle = getClosestElement(board,e.clientY);
            if(closestEle){
                board.insertBefore(task,closestEle);
            }else{
                board.appendChild(task)
            }
            updateBoardTaskCount();

        })
        
    })
}
function getClosestElement(board,yAxis){
    let closestEle = null;
    let closestDistance = Number.NEGATIVE_INFINITY;
    console.log("dragging",yAxis)
    const tasksInBoard = board.querySelectorAll(".task:not(.dragging)")  
    tasksInBoard.forEach((task)=>{
        const {top} = task.getBoundingClientRect();
        const distance = yAxis-top;
        if(distance<0 && distance> closestDistance){
            closestDistance = distance
            closestEle = task;
        }
    })  
    return closestEle;
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
