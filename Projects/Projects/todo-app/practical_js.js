function todoItem(text, completed) {
    this.todoText = text;
    this.completed = completed;
}

var todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.splice(0, 0, new todoItem(todoText, false));
    },
    toggleCompleted: function (position) {
        var todo = this.todos[position];
        todo.completed = !todo.completed;
    },
    toggleAll: function () {
        var allCompleted = this.todos.every(function (todo) {
            return todo.completed;
        });
        this.todos.forEach(function (todo) {
            todo.completed = !allCompleted;
        });
    },
    deleteTodo: function (position) {
        this.todos.splice(position, 1);
    },
    changeTodoText: function (position, newTodoText) {
        this.todos[position].todoText = newTodoText;
    }
};

var handlers = { // methods in this object are handling different events
    toggleAll: function () {
        todoList.toggleAll();
        view.displayTodos();
    },
    toggleTodo: function (id) {
        todoList.toggleCompleted(id);
        view.displayTodos();
    },
    deleteTodo: function (id) {
        todoList.deleteTodo(id);
        view.displayTodos();
    },
    addTodo: function () {
        var text_elem = document.getElementById('addTodoTextInput');
        var text = text_elem.value;
        if (text === '') return;
        text_elem.value = ''; // clear input form
        todoList.addTodo(text);
        view.displayTodos();
    }
};


var view = { // methods in this object are responsible for what user sees, object itself does not contain logic
    displayTodos: function () {
        var todosUl = document.getElementById('todoList');
        todosUl.innerHTML = ''; // clears list before adding all list items

        todoList.todos.forEach(function (todo, position) {
            let todoLi = document.createElement('li');
            let textParagraph = document.createElement('p');

            textParagraph.textContent = todo.todoText;
            todoLi.id = position;
            todoLi.appendChild(this.createToggleButton(todo.completed));
            todoLi.appendChild(this.createDeleteButton());
            todoLi.appendChild(textParagraph);

            todosUl.appendChild(todoLi);
        }, this);
    },
    createDeleteButton: function () {
        var icon = document.createElement('i');
        icon.className = "far fa-trash-alt deleteButton";
        return icon;
    },
    createToggleButton: function (toggled) {
        var icon = document.createElement('i');
        var sign = toggled === true ? "check-circle" : "circle";
        icon.className = "far fa-" + sign + " toggleButton";
        return icon;
    },
    setupButtonClickEventListener: function () {
        var todosUl = document.getElementById('todoList');
        todosUl.addEventListener('click', function (event) {
            var elementClicked = event.target; // the real element that was clicked on
            var todoID = parseInt(elementClicked.parentNode.id)
            //check if element clicked is a proper button
            if (elementClicked.className.includes('deleteButton')) {
                handlers.deleteTodo(todoID);
            }
            if (elementClicked.className.includes('toggleButton')) {
                handlers.toggleTodo(todoID);
            }
        });
    },
    setupInputEventListener: function () {
        var input = document.getElementById('addTodoTextInput');
        input.addEventListener('keyup', function (event) {
            if (event.keyCode === 13) {
                handlers.addTodo();
            }
        });
    },
    setupAutofocus: function () {
        var input = document.getElementById('addTodoTextInput');
        input.autofocus = true;
    }
};

view.setupButtonClickEventListener();
view.setupInputEventListener();
view.setupAutofocus();