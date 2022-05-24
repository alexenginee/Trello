"use strict";
import {
  lists,
  todoConfirmList,
  todoDeleteList,
  todoEditList,
  todoCounter,
  processCounter,
  doneCounter,
  btnAdd,
  btnConfirm,
  btnCancel,
  selectUser,
  inputDesc,
  inputTitle,
  form,
} from "./init.js";
import { todos, processes, dones, Todo, renderList, setLocal } from "./list.js";
import { users, urlUsers, fetchUsers, renderUsers, option } from "./users.js";
import { getclock } from "./clock.js";

getclock();
setInterval(getclock, 1000);
renderList();
fetchUsers(urlUsers);

todoCounter.innerHTML = todos.length;

let valueDesc;
let valueTitle;

btnAdd.addEventListener("click", () => {
  form.style.display = "flex";
  btnAdd.style.display = "none";
  btnConfirm.style.display = "none";
  inputDesc.addEventListener("input", (e) => {
    valueDesc = e.target.value;
    if (valueDesc) {
      btnConfirm.style.display = "block";
    } else {
      btnConfirm.style.display = "none";
    }
  });
  inputTitle.addEventListener("input", (e) => {
    valueTitle = e.target.value;
  });
});

btnCancel.addEventListener("click", () => {
  inputDesc.value = "";
  inputTitle.value = "";
  form.style.display = "none";
  btnAdd.style.display = "flex";
});

btnConfirm.addEventListener("click", () => {
  todos.push(
    new Todo(
      inputTitle.value,
      inputDesc.value,
      selectUser.value,
      function dataImage(){
        selectUser.forEach((el)=>)
      }
      option.dataset.image
    )
  );

  setLocal("todos", todos);
  setLocal("processes", processes);
  setLocal("dones", dones);
  setLocal("users", users);
  renderList();
  todoCounter.innerHTML = todos.length;
  selectUser.value = "";
  inputDesc.value = "";
  inputTitle.value = "";
  form.style.display = "none";
  btnAdd.style.display = "flex";
});

let list = document.querySelectorAll(".list__item");
lists.addEventListener("click", ({ target }) => {
  let id = target.closest(".list__item").getAttribute("data-id");
  let el = todos.find((el) => el.id == id);
  console.log(todos.indexof(el));
  todos.splice(todos.indexof(el), 1);
  renderList();
});
