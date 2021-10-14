// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

function hello(name) {
  let greeting = "Hello, " + name + "!";
  console.log(greeting);
  alert(greeting);
}

document.addEventListener('turbolinks:load', () => {
  const clickButton = document.getElementById("greet-user-button");
  clickButton.addEventListener('click', (event) => {
      hello('JavaScript')
  });
});

Rails.start()
Turbolinks.start()
ActiveStorage.start()
