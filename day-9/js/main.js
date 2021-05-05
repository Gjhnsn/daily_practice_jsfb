import { actionLogin, actionRegister } from "./actions.js";
import { appTitle } from "./data.js";
import { registerHTML, loginHTML } from "./html.js";
import { actionRegister, actionLogin } from "./actions";

console.log(appTitle);

function onSubmit(event) {
  event.preventDefault();
  console.log(event);
}

function createForm(name, callback) {
  const wrapper = document.createElement("div");

  wrapper.innerHTML = `
  <style>
    input {display: block}
  </style>
    <h2>${name.toUpperCase()}</h2>
    <form name="${name}">
    <input type="text" name="username" placeholder="username" />
    <input type="text" name="password" placeholder="password" />
    <input type="submit" />
  </form>    
    `;

  document.body.appendChild(wrapper);
  const form = wrapper.querySelector("form");
  console.log("form", form);

  form.addEventListener("submit", callback);
}

createForm("register", actionRegister, registerHTML);

createForm("log in", actionLogin, loginHTML);
