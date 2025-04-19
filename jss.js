
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => displayTask(task));
};

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();
  if (taskText === "") return;

  displayTask(taskText);
  saveTask(taskText);
  input.value = "";
}


function displayTask(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "حذف";
  deleteBtn.style.marginRight = "10px";
  deleteBtn.onclick = function () {
    li.remove();
    deleteTask(taskText);
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
}


function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}


function deleteTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}