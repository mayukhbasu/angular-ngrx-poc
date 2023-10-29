function addTodo() {
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');
  const todoValue = todoInput.value.trim();

  if (todoValue === "") {
      alert("Please enter a task.");
      return;
  }

  const listItem = document.createElement('li');
  listItem.innerHTML = `
      ${todoValue}
      <span onclick="removeTodo(this)">❌</span>
  `;
  todoList.appendChild(listItem);
  todoInput.value = '';
}

function removeTodo(element) {
  element.parentElement.remove();
}
