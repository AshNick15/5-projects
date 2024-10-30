document.getElementById("addTaskBtn").onclick = function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText) {
    const li = document.createElement("li");
    li.innerHTML = (
      <>
        <span>${taskText}</span>
        <button class="delete-btn">Delete</button>
      </>
    );
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    li.querySelector("span").onclick = function () {
      li.classList.toggle("completed");
    };

    li.querySelector(".delete-btn").onclick = function () {
      li.remove();
    };
  }
};
