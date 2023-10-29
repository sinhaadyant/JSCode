function searchTasks() {
    const searchInput = document.getElementById('search-input');
    const searchTerm = searchInput.value; 
    const taskItems = document.querySelectorAll('.task');
 
    taskItems.forEach((taskItem) => {
        const taskText = taskItem.textContent.toLowerCase();
        if (taskText.includes(searchTerm)) {
            taskItem.style.display = 'block';  
        } else {
            taskItem.style.display = 'none'; 
        }
    });
} 
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('keyup', searchTasks);
