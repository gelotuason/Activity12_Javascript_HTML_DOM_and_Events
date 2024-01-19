const inputTask = document.querySelector("#todoInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
let task;
let removeTask;

addTask.addEventListener("click", function(){
    addingTask();
});

inputTask.addEventListener("keypress", function(event){
    if (event.key == "Enter") {
        event.preventDefault();      
        addingTask();    
    }
});

function addingTask(){
    if (inputTask.value !== ""){
        // Adding task
        task = document.createElement("li");
        task.appendChild(document.createTextNode(inputTask.value));

        removeTask = document.createElement("button");
        removeTask.textContent = "X"; 

        taskList.appendChild(task).appendChild(removeTask);

        // Clearing text input
        inputTask.value = null;

        // Focusing text input after adding task
        inputTask.focus();        
        
        // Mark as done
        task.addEventListener("click", function(text){
            text.target.classList.toggle("done");
        });

        // Deletes task
        removeTask.addEventListener("click", function(deleteButton){
            deleteButton.target.parentElement.remove();
        });    
        
    } else {
        alert("Input something first!");
    }
}

