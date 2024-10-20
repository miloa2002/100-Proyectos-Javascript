const form = document.querySelector(".form");
const container = document.querySelector(".container");
const contentTodos = document.querySelector(".content-todos");
const inputText = document.querySelector(".input-text");

form.addEventListener("submit", createTodo);

let todos = [];
let edit = false;

let todoObject = {
    todo: "",
    id: null,
}

function createTodo(e) {
    e.preventDefault();
    const todo = inputText.value;

    todoObject = {
        todo,
        id: edit ? todoObject.id : Date.now(),
    }
    
    if(todo === "") {
        alert("El campo no puede ir vacío", "error");
        return;
    }
    
    if(edit) {
        let i = todos.findIndex(item => item.id === todoObject.id);
        if (i !== -1) {
            todos[i] = { ...todoObject };
        }
        edit = false;
    }else {
        todos = [...todos, todoObject];
        console.log(todos);
        
    }

    form.reset();
    createHTML(todos);
}

function alert(msg, type) {
    const div = document.createElement("DIV");
    div.classList.add("alert");

    type === "error" ? div.style.backgroundColor = "red" : div.style.backgroundColor = "green";
    div.textContent = msg;

    setTimeout(() => {
        div.remove();
    }, 2000)

    container.appendChild(div);
};

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    createHTML(todos);
};

function updateTodo(id) {
    const searchTodo = todos.find(todo => todo.id === id);
    inputText.value = searchTodo.todo;
    edit = true;
    todoObject.id = id;
};

function createHTML(todos) {
    cleanHTML();

    todos.forEach(todo => {
        const div = document.createElement("DIV");
        div.innerHTML = `
            <div class="item">
                <span>${todo.todo}</span>
                <button class="edit-btn" onclick="updateTodo(${todo.id})">Editar</button>
                <button class="delete-btn" onclick="deleteTodo(${todo.id})">Eliminar</button>
            </div>
        `;
    
        contentTodos.appendChild(div);
    });

};

function cleanHTML() {
    while(contentTodos.firstChild) {
        contentTodos.removeChild(contentTodos.firstChild);
    };
};