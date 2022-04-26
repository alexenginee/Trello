"use strict";
import {
  lists,
  todoCounter,
  btnAdd,
  btnConfirm,
  btnCancel,
  btnUser,
  inputDesc,
  inputTitle,
  form,
} from "./init.js";
import {
  todos,
  Todo,
  createTemplate,
  fillHtmlList,
  setLocal,
  getLocal,
  btnListConfirm,
} from "./list.js";

fillHtmlList();
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
});

btnCancel.addEventListener("click", () => {
  inputDesc.value = "";
  inputTitle.value = "";
  form.style.display = "none";
  btnAdd.style.display = "flex";
});

btnConfirm.addEventListener("click", () => {
  todos.push(new Todo(inputTitle.value, inputDesc.value));

  setLocal("todos", todos);
  fillHtmlList();
  todoCounter.innerHTML = todos.length;

  inputDesc.value = "";
  inputTitle.value = "";
  form.style.display = "none";
  btnAdd.style.display = "flex";
});

btnListConfirm.addEventListener("ckick", () => {
  todos.forEach((e) => {
    console.log(e);
  });
});
