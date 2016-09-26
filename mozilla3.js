
window.onload = (function() {
  var form = document.getElementById('add-todo');
  var todos = document.getElementById('todos');
  var id = 2;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var description = document.getElementById('add-todo-description').value;
    addTodo(description);
  })

  todos.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
      e.preventDefault();
      var id = e.target.dataset.id;
      var todos = document.getElementById(e.currentTarget.id);
      removeTodo(id, todos.children)
    }
  })

  function removeTodo(id, children) {
    for (var i = 0; i < children.length; i++) {
      if (children[i].dataset.id === id) {
        console.log(children[i]);
        children[i].remove();
      } else if (children[i].children.length) {
      removeTodo(id, children[i].children)
      }
    }
  }

  function addTodo(description) {
    id++
    var todos = document.getElementById('todos');
    var todo = new Todo(description, id);
    var el = todo.assembleTodo();
    todos.appendChild(el);
  }

  var Todo = function(todo, id) {
    this.todo = todo;
    this.id = id;
  }

  Todo.prototype.createCheckbox = function createCheckbox() {
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    this.checkbox = checkbox;
  }

  Todo.prototype.createDescription = function createDescription() {
    var description = document.createElement('span');
    description.innerText = this.todo;

    this.description = description;
  }

  Todo.prototype.createDeleteButton = function createDeleteButton() {
    var deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerText = 'Delete';
    deleteButton.dataset.id = this.id;
    this.deleteButton = deleteButton;
  }

  Todo.prototype.assembleTodo = function assembleTodo() {
    this.createCheckbox();
    this.createDescription();
    this.createDeleteButton();

    var el = document.createElement('li');
    el.dataset.id = this.id;
    el.appendChild(this.checkbox);
    el.appendChild(this.description);
    el.appendChild(this.deleteButton);

    return el;
  }

})();