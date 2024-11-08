const taskInput = document.querySelector(".input-box");
const addTaskBtn = document.querySelector("#add-task");
const listContainer = document.querySelector("#list-container")


addTaskBtn.addEventListener("click", () => {
    if (taskInput.value === ""){
        alert("Enter something")
    }
    else{ 
        let todoDiv = document.createElement("div")
        todoDiv.classList.add("todo")
        let todoItem = document.createElement("li")
        todoItem.innerText = taskInput.value;
        todoDiv.appendChild(todoItem)
        listContainer.appendChild(todoDiv);

        const deleteBtn = document.createElement("Button");
        deleteBtn.innerText = "Delete"
        deleteBtn.classList.add("dltBtn") 
        todoDiv.appendChild(deleteBtn);
    }
    taskInput.value = "";
    saveData()
})

listContainer.addEventListener("click", function(e){
    if (e.target.tagName == "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
})

function saveData (){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
