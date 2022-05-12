export {
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
  clock,
};

let lists = document.querySelector(".lists");
let todoEditList = document.querySelectorAll(".list__item__btn__btnEdit");
let todoDeleteList = document.querySelectorAll(".list__item__btn__btnDelete");
let todoConfirmList = document.querySelectorAll(".list__item__btnConfirm");

let todoCounter = document.querySelector(".todo-counter__counter");
let processCounter = document.querySelector(".counter-process");
let doneCounter = document.querySelector(".counter-done");
let btnAdd = document.querySelector(".btn-add");
let btnConfirm = document.querySelector(".form__btn__btnOnOff__btn-confirm");
let btnCancel = document.querySelector(".form__btn__btnOnOff__btn-cancel");
let selectUser = document.querySelector("#selectUser");
let imageUser = document.querySelector("#imageUser");

let inputDesc = document.querySelector(".form__input-desc");
let inputTitle = document.querySelector(".form__input-title");
let form = document.querySelector(".form");

let clock = document.querySelector("#clock");
