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
import {
  todos,
  Todo,
  createTemplate,
  render,
  setLocal,
  getLocal,
  getDate,
} from "./list.js";
export { users, urlUsers, fetchUsers, renderUsers, option };

const urlUsers = "https://api.sampleapis.com/futurama/characters";
let users;

if (!localStorage.todos) {
  users = [];
} else {
  users = getLocal("users");
}

function fetchUsers(url) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      users = data;
      console.log(data);
      renderUsers(data);
    });
}
let option;
function renderUsers(array) {
  array.forEach((el) => {
    option = document.createElement("option");

    option.dataset.image = `${el.images.main}`;
    option.innerText = `${el.name.first} ${el.name.last}`;
    selectUser.append(option);
  });
}
