let listItem = createElement("div", "list__item");

listItem.draggable = "true";

let listItemTitle = createElement("p", "list__item__txtTitle", todo.title);
listItem.append(listItemTitle);
let listItemBtn = createElement("div", "list__item__btn");
listItem.append(listItemBtn);
let listItemBtnEdit = createElement("button", "btn__btnEdit", "Edit");
listItemBtn.append(listItemBtnEdit);
let listItemBtnDelete = createElement("button", "btn__btnDelete", "Delete");
listItemBtn.append(listItemBtnDelete);

let listItemDesc = createElement("div");
listItem.append(listItemDesc);
let listItemTxtDesc = createElement("p", "list__item__txtDesc", todo.desc);
listItemDesc.append(listItemTxtDesc);
let listItemBtnConfirm = createElement(
  "button",
  "list__item__btnConfirm",
  "Confirm"
);

listItemDesc.append(listItemBtnConfirm);

let listItemEnd = createElement("div");
listItem.append(listItemEnd);
let listItemUser = createElement("div", "list__item__user");
listItemEnd.append(listItemUser);
let listItemUserImg = createElement("img", "user__userImg");
listItemUser.append(listItemUserImg);
let listItemUserTxt = createElement("p", "user__userName", "User");
listItemUser.append(listItemUserTxt);
let listItemData = createElement("p", "list__item__data", todo.data);
listItemEnd.append(listItemData);
