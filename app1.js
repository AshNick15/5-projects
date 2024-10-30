document.getElementById("addTaskButton").addEventListener("click", addTask);
document
  .getElementById("taskInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  // Mark task as completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Remove task
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove");
  removeButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(removeButton);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
