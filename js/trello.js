"use strict";
let lists = document.querySelectorAll(".list");
function addTask() {
  let btnAdd = document.querySelector(".btn-add");
  let btnConfirm = document.querySelector(".form__btn__btn-confirm");
  let btnCancel = document.querySelector(".form__btn__btn-cancel");
  let btnUser = document.querySelector(".form__btn__btn-user");
  let inputDesc = document.querySelector(".form__input-desc");
  let inputTitle = document.querySelector(".form__input-title");
  let form = document.querySelector(".form");
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
  });

  btnCancel.addEventListener("click", () => {
    inputDesc.value = "";
    inputTitle.value = "";
    form.style.display = "none";
    btnAdd.style.display = "flex";
  });

  btnConfirm.addEventListener("click", () => {
    let newList = document.createElement("div");
    newList.classList.add("list-item");
    newList.draggable = true;

    let newTitle = document.createElement("p");
    newList.append(newTitle);

    let newDesc = document.createElement("span");
    newList.append(newDesc);

    newTitle.innerText = valueTitle;
    newDesc.innerText = valueDesc;

    inputDesc.value = "";
    inputTitle.value = "";
    form.style.display = "none";
    btnAdd.style.display = "flex";

    lists[0].append(newList);
  });
}
addTask();
