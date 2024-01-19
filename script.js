const inputTask = document.querySelector("#todoInput");
const addTask = document.querySelector("#addTask");
const taskList = document.querySelector("#taskList");
let task;
let removeTask;

addTask.addEventListener("click", function(){
    if (inputTask.value == ""){
        alert("Input something first!");
    } else {
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
            text.currentTarget.classList.toggle("done");
        });

        // Deletes task
        removeTask.addEventListener("click", function(deleteButton){
            deleteButton.currentTarget.parentElement.remove();
        });
    }
});

