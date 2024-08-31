const todos = {
  backlog: ["Task 1", "Task 2"],
  todo: ["Task 3"],
  ongoing: ["Task 4", "Task 5"],
  done: ["Task 6", "Task 7"],
};

const statusOrder = ["backlog", "todo", "ongoing", "done"];

function renderTodos() {
  statusOrder.forEach((status) => {
    const listElement = document.getElementById(`${status}List`);
    listElement.innerHTML = "";

    todos[status].forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo;

      const leftBtn = document.createElement("button");
      leftBtn.innerHTML = "&larr;";
      leftBtn.className = "move-left";
      leftBtn.addEventListener("click", () => moveTaskLeft(status, index));

      const rightBtn = document.createElement("button");
      rightBtn.innerHTML = "&rarr;";
      rightBtn.className = "move-right";
      rightBtn.addEventListener("click", () => moveTaskRight(status, index));

      const btnContainer = document.createElement("div");
      btnContainer.appendChild(leftBtn);
      btnContainer.appendChild(rightBtn);

      li.appendChild(btnContainer);
      listElement.appendChild(li);
    });
  });
}

function moveTaskLeft(status, index) {
  const currentStatusIndex = statusOrder.indexOf(status);
  if (currentStatusIndex > 0) {
    const newStatus = statusOrder[currentStatusIndex - 1];
    const task = todos[status].splice(index, 1)[0];
    todos[newStatus].push(task);
    renderTodos();
  }
}

function moveTaskRight(status, index) {
  const currentStatusIndex = statusOrder.indexOf(status);
  if (currentStatusIndex < statusOrder.length - 1) {
    const newStatus = statusOrder[currentStatusIndex + 1];
    const task = todos[status].splice(index, 1)[0];
    todos[newStatus].push(task);
    renderTodos();
  }
}

document.getElementById("addTaskBtn").addEventListener("click", () => {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    todos.backlog.push(taskText);
    taskInput.value = "";
    renderTodos();
  }
});

renderTodos();
