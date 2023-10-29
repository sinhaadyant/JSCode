const addBoardButton = document.getElementById("add-board");
const inputTextBoard = document.getElementById("board-input");
const container = document.getElementById("main-container")
const validationMessageBoard = document.getElementById("validation-message-board");

addBoardButton.addEventListener("click", () => {
    const value = inputTextBoard.value.trim();
    if (value) {
        //   <div class="board" id="todo-board">
        const board = document.createElement("div");
        board.innerHTML = `<h3>${value} <span class="count-label">0</span></h3>`;
        board.classList.add("board");
        container.appendChild(board);
        inputTextBoard.value = "";
        validationMessageBoard.style.display = "none";
        inputTextBoard.style.borderColor =`grey` 
        addQuerySelectorToBoards()
        updateBoardTaskCount();

    } else {
        inputTextBoard.style.borderColor =`red` 
        validationMessageBoard.innerText = "Please enter board name.";
        validationMessageBoard.style.display = "block";
    }
});