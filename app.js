
const todoValue = document.querySelector('#todoValue');
const container = document.querySelector('.todo-list');
const btn = document.querySelector('#btn');
const allList = document.querySelectorAll('.todo-list li');


let todoArray = [];

const getTodoFromLS = () => {
     return JSON.parse(localStorage.getItem('todoItems')) || [];
}

const addTodotoLocalS = (todo) => {
     return localStorage.setItem('todoItems',JSON.stringify(todo))
}

const showTodoList = () => {
     todoArray = getTodoFromLS();
     todoArray.forEach((currentTodo) => {
          const liElement = document.createElement('li');
          liElement.innerHTML = currentTodo;
          container.append(liElement)
          todoValue.value = ''
     })
}

const removeTodoItem = (e) => {
     let currentTodo = e.target;
     updateTodoList = todoArray.filter((curTodoValue) => curTodoValue !== currentTodo.textContent)
     currentTodo.remove()
     addTodotoLocalS(updateTodoList)
     setTimeout(() => {
          alert('Task Deleted')
          window.location.reload()
     }, 100);
}

const addTodoList = (event) => {
     event.preventDefault()

     todoArray = getTodoFromLS();
     let newTodo = todoValue.value.trim();

     if(newTodo.length !== 0 && !todoArray.includes(newTodo)){
          todoArray.push(newTodo)
          addTodotoLocalS(todoArray)
          const liElement = document.createElement('li');
          liElement.innerHTML = newTodo;
          container.append(liElement)
          todoValue.value = ''
     }
}

showTodoList();

btn.addEventListener('click',(e) => {
     addTodoList(e)
})

document.addEventListener('keyup',(userKey) => {
     if(userKey.key === 'Enter'){
          btn.click()
     }
})

container.addEventListener('click',(e) => removeTodoItem(e))




