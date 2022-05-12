import { clock } from "./init.js";
export { getclock, getDate };

function getclock() {
  var date = new Date(),
    hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours(),
    minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  clock.innerHTML = hours + ":" + minutes;
}
function getDate() {
  let date = new Date().toLocaleTimeString().slice(0, -3);
  return date;
}
