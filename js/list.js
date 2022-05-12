import { lists } from "./init.js";
import { getDate } from "./clock.js";
export {
  todos,
  processes,
  dones,
  Todo,
  createTemplate,
  renderList,
  setLocal,
  getLocal,
  getDate,
};

let todos;

if (!localStorage.todos) {
  todos = [];
} else {
  todos = getLocal("todos");
}
let processes;

if (!localStorage.processes) {
  processes = [];
} else {
  processes = getLocal("process");
}
let dones;

if (!localStorage.dones) {
  dones = [];
} else {
  dones = getLocal("dones");
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
  return `<li id="todo_${index}" class="list__item" draggable="true">
  <div>
    <p class="list__item__txtTitle">${todo.title}</p>
    <div class="list__item__btn">
      <button class="list__item__btn__btnEdit">Edit</button>
      <button class="list__item__btn__btnDelete">Delete</button>
    </div>
  </div>
  <div>
    <p class="list__item__txtDesc">${todo.desc}</p>
    <button class="list__item__btnConfirm">Confirm</button>
  </div>
  <div>
    <div class="list__item__user">
      <img src="${todo.image}" alt="" class="list__item__user__userImg" />
      <p class="user__userName">${todo.user}</p>
    </div>
    <p class="list__item__data">${todo.data}</p>
  </div>
</li>
`;
};

let renderList = () => {
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
