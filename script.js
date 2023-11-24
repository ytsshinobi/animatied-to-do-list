function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") {
      alert("Please enter a task!");
      return;
    }
  
    var li = document.createElement("li");
    li.innerHTML = `
      <span>${taskInput.value}</span>
      <div>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="checkTask(this)">Checked</button>
        <button onclick="removeTask(this)">Remove</button>
      </div>
    `;
    taskList.appendChild(li);
  
    taskInput.value = "";
  }
  
  function removeTask(button) {
    var li = button.parentNode.parentNode;
    li.style.animation = "fadeOut 0.5s";
  
    setTimeout(function () {
      li.remove();
    }, 500);
  }
  
  function editTask(button) {
    var li = button.parentNode.parentNode;
    var span = li.querySelector('span');
    var newTask = prompt("Edit task:", span.innerText);
  
    if (newTask !== null) {
      span.innerText = newTask;
      li.classList.add('editing');
      li.style.animation = "slideInRight 0.5s";
  
      setTimeout(function () {
        li.classList.remove('editing');
      }, 500);
    }
  }
  
  function checkTask(button) {
    var li = button.parentNode.parentNode;
    li.classList.toggle('checked');
  }
  