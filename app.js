const addTodoform = document.querySelector("#addTodoForm");
const addTodoinput = document.querySelector("#addTodoInputfield");
const todoList = document.querySelector("#todoList");

//Set focus on text input
addTodoinput.focus();

//add event listener for submitting form.
addTodoform.addEventListener("submit", (event) => {
  event.preventDefault();
  addTodo(addTodoinput.value);
});

//add todo list
function addTodo(todoText) {
  todoList.insertAdjacentHTML(
    "beforeend",
    `<li>${todoText}<button onclick="deleteTodo(this)">delete</button></li>`
  );
  addTodoForm.reset();
  addTodoinput.focus();
}
function deleteTodo(element) {
  element.parentElement.remove();
  addTodoInput.focus();
}
