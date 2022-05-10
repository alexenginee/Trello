import {
  lists,
  todoCounter,
  btnAdd,
  btnConfirm,
  btnCancel,
  selectUser,
  inputDesc,
  inputTitle,
  form,
  clock,
} from "./init.js";

export { todos, Todo, createTemplate, render, setLocal, getLocal, getDate };

let todos;

if (!localStorage.todos) {
  todos = [];
} else {
  todos = getLocal("todos");
}

function Todo(title, desc, user, image) {
  this.title = title;
  this.desc = desc;
  this.data = getDate();
  this.user = user;
  this.image = image;
  this.confirm = false;
}

const createTemplate = (todo, index) => {
  return `  <div id = 'todo_${index}' class="list__item ${
    todo.confirm ? "confirm" : ""
  }"  draggable="true"><div> 
      <p class="list__item__txtTitle">
         ${todo.title}
      </p>
      <div class="list__item__btn">
      <button class="btn__btnEdit" >
          Edit
      </button>
      <button class="btn__btnDelete">
          Delete
      </button>
      </div>
    </div>
    <div>
      <p class="list__item__txtDesc">
            ${todo.desc}
      </p>
      <button  class="list__item__btnConfirm ${todo.confirm ? "confirm" : ""}" >
           Confirm
      </button>
    </div>
    <div>
      <div class="list__item__user">
      <img src="${todo.image}" alt="" class="list__item__user__userImg">
      <p class="user__userName">
           ${todo.user}
      </p>
      </div>
      <p class="list__item__data">
           ${todo.data}
      </p>
    </div>
  </div>
          `;
};

let render = () => {
  lists.innerHTML = "";
  if (todos.length > 0) {
    todos.forEach((item, index) => {
      lists.innerHTML += createTemplate(item, index);
    });
  }
};

let setLocal = (key, value) => {
  let string = JSON.stringify(value);
  localStorage.setItem(key, string);
};

function getLocal(key) {
  let par = localStorage.getItem(key);
  return JSON.parse(par);
}

function getDate() {
  let date = new Date().toLocaleTimeString().slice(0, -3);
  return date;
}
