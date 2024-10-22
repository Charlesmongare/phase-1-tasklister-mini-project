document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  taskForm.addEventListener("submit", function(event) {
      event.preventDefault();

      const taskDescription = document.getElementById("new-task-description").value;

      // Create a new list item
      const taskItem = document.createElement("li");
      taskItem.textContent = taskDescription;

      // Create a delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.classList.add("delete-button");

      // Append the delete button to the task item
      taskItem.appendChild(deleteButton);

      // Append the new task to the task list
      taskList.appendChild(taskItem);

      // Clear the input field
      taskForm.reset();

      // Add an event listener to the delete button
      deleteButton.addEventListener("click", function() {
          taskList.removeChild(taskItem);
      });
  });
});
