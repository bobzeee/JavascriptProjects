// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);
// Functions
function addTodo(event) {
  event.preventDefault();

  if (todoInput.value.length > 0) {
    // Todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create Li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class ="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Add to Todo-list
    todoList.appendChild(todoDiv);

    // clear todo input
    todoInput.value = "";
  }
}

function deleteTodo(e) {
  const item = e.target;
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //     todo.classList.add("animateEnd");
  //     todo.addEventListener("transitionend", function () {
  //       todo.remove();
  //     });
  //   }
}
