// Initial to-do lists
const todos = {
  backlog: ["Task 1", "Task 2"],
  todo: ["Task 3"],
  ongoing: ["Task 4", "Task 5"],
  done: ["Task 6", "Task 7"],
};

// The order in which the statuses appear
const statusOrder = ["backlog", "todo", "ongoing", "done"];

// Function to render the to-do lists on the page
function renderTodos() {
  statusOrder.forEach((status) => {
    // Get the list element for the current status
    const listElement = document.getElementById(`${status}List`);
    // Clear the current list items
    listElement.innerHTML = "";

    // Add each to-do item to the list
    todos[status].forEach((todo, index) => {
      const li = document.createElement("li");
      li.textContent = todo;

      // Create a left button for moving tasks to the previous status
      const leftBtn = document.createElement("button");
      leftBtn.innerHTML = "&larr;";
      leftBtn.className = "move-left";
      leftBtn.addEventListener("click", () => moveTaskLeft(status, index));

      // Create a right button for moving tasks to the next status
      const rightBtn = document.createElement("button");
      rightBtn.innerHTML = "&rarr;";
      rightBtn.className = "move-right";
      rightBtn.addEventListener("click", () => moveTaskRight(status, index));

      // Container to hold the buttons
      const btnContainer = document.createElement("div");
      btnContainer.appendChild(leftBtn);
      btnContainer.appendChild(rightBtn);

      // Append the buttons to the list item
      li.appendChild(btnContainer);
      // Append the list item to the list
      listElement.appendChild(li);
    });
  });
}

// Function to move a task to the previous status (left)
function moveTaskLeft(status, index) {
  const currentStatusIndex = statusOrder.indexOf(status);
  // Check if there's a previous status to move to
  if (currentStatusIndex > 0) {
    // Get the new status
    const newStatus = statusOrder[currentStatusIndex - 1];
    // Remove the task from the current status and add it to the new status
    const task = todos[status].splice(index, 1)[0];
    todos[newStatus].push(task);
    // Re-render the to-do lists to reflect the changes
    renderTodos();
  }
}

// Function to move a task to the next status (right)
function moveTaskRight(status, index) {
  // Find the current status index
  const currentStatusIndex = statusOrder.indexOf(status);
  // Check if there's a next status to move to
  if (currentStatusIndex < statusOrder.length - 1) {
    // Get the new status
    const newStatus = statusOrder[currentStatusIndex + 1];
    // Remove the task from the current status and add it to the new status
    const task = todos[status].splice(index, 1)[0];
    todos[newStatus].push(task);
    // Re-render the to-do lists to reflect the changes
    renderTodos();
  }
}

// Add event listener for adding new tasks
document.getElementById("addTaskBtn").addEventListener("click", () => {
  // Get the input field and its value
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  // If the input is not empty, add the task to the backlog
  if (taskText !== "") {
    todos.backlog.push(taskText);
    // Clear the input field
    taskInput.value = "";
    // Re-render the to-do lists to include the new task
    renderTodos();
  }
});

// Initial rendering of the to-do lists
renderTodos();
