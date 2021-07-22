// Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo)

// Functions
function addTodo(event){
    
    // Prevent form from submitting
    event.preventDefault()
    
    // todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    
    // create li
    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item')

    // add the li to the div
    todoDiv.appendChild(newTodo);

    // checkmark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add('complete-btn')
    todoDiv.appendChild(completedBtn);

    // trash button
    const TrashBtn = document.createElement('button');
    TrashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    TrashBtn.classList.add('trash-btn')
    todoDiv.appendChild(TrashBtn);

    // append to list
    todoList.appendChild(todoDiv);

    // clear input value
    todoInput.value = '';
}

function deleteCheck(e){

    const item = e.target;

    // delete todo 
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;

        //amimation
        todo.classList.add('fall')

        // to actually remove the element after transition
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    // check mark to mark as completed
    if(item.classList[0] === 'complete-btn')
    {
        const todo = item.parentElement;
        todo.classList.add('completed');
    }
}

function filterTodo(e){

    const todos = todoList.childNodes;
    todos.forEach(function(todo){

        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
                break;
            case "completed":
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }
                break;
            case "incomplete":
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else
                {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}


// add function to save the todos in the local storage 
