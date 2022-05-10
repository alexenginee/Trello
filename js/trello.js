"use strict";
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
import { users, urlUsers, fetchUsers, renderUsers, option } from "./users.js";

render();
let valueTitle;
let valueDesc;

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
  fetchUsers(urlUsers);
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
      option.dataset.image
    )
  );

  setLocal("todos", todos);
  setLocal("users", users);
  render();
  todoCounter.innerHTML = todos.length;
  selectUser.value = "";
  inputDesc.value = "";
  inputTitle.value = "";
  form.style.display = "none";
  btnAdd.style.display = "flex";
});

clock.innerText = getDate();

// lists.addEventListener("click", function (event) {
//   if (event.target.closest(".btn__btnDelete")) {
//     todos.forEach((e, i) => {
//       let pane = event.target.closest(`#todo_${i}`);
//       e == pane;

//       todos.splice(i, 1);
//       setLocal("todos", todos);
//       pane.remove();
//     });
//   }
// });
