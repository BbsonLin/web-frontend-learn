// IIFE; Prevent other places using our variables
;(function() {
  var todoAddButton = document.querySelector('#todo-add');
  var todoList = document.querySelector('#todo-list');

  todoAddButton.addEventListener('click', function (evt) {
    var todoInput = document.querySelector('#todo-input');
    var todoInputValue = todoInput.value;
    todoInput.value = "";

    if (todoInputValue !== "") {
      var todoItem = document.createElement('li');
      todoItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center', 'w-75');
      todoItem.innerHTML = '<span>' + todoInputValue + '</span><button class="btn btn-sm btn-outline-danger todo-delete">x</button>';
      todoItem.querySelector('.todo-delete').addEventListener('click', function (evt) {
        todoList.removeChild(todoItem);
      });

      todoList.appendChild(todoItem);
    }
  });
})();