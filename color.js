function querySelectorForColor(){
    const colorInputs = document.querySelectorAll(".color-input")
colorInputs.forEach((input)=>{
    input.addEventListener("change",()=>{
        console.log(input.value);
        const tasksList = input.parentElement.closest(".board-title").nextElementSibling;
        const tasks = tasksList.querySelectorAll(".task")
        tasks.forEach((task)=>{
            task.style.borderRight = `4px solid ${input.value}`
        }) 
         
    })
})
}
querySelectorForColor()