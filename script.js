function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task.");
    return;
  }

  const taskList = document.getElementById('taskList');
  
  const li = document.createElement('li');
  li.textContent = taskValue;

  const removeBtn = document.createElement('span');
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = function() {
    taskList.removeChild(li);
  };

  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // clear the input
}
