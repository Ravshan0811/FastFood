// let total = document.querySelector("#total");
let text = document.querySelector("#name");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let dough = document.querySelector("#dough");
let size = document.querySelector("#size");
let on = document.querySelector("#on");
let add = document.querySelector("#add");

function myfun (event) {
  let user = document.querySelector("#user");
  let tel = document.querySelector("#tel");
  let email = document.querySelector("#email");
  let select = document.querySelector("#select");
  let fun0 = document.querySelector("#fun0");
  let pizzaUz = document.querySelector("#pizzaUz");
  let pizza = document.querySelector("#pizza");
  
  
  text.textContent += user.value
  phone.textContent += tel.value
  address.textContent += email.value
  dough.textContent += select.value
  if (fun0.children[0].children[0].checked) {
    size.textContent += "25 sm"
  }
  if (fun0.children[1].children[0].checked) {
    size.textContent += "30 sm"
  }
  if (fun0.children[2].children[0].checked) {
    size.textContent += "35 sm"
  }
  if (pizzaUz.children[0].children[0].checked) {
    on.textContent += "Turkey meat"
  }
  if (pizzaUz.children[1].children[0].checked) {
    on.textContent += "Mushroom"
  }
  if (pizzaUz.children[2].children[0].checked) {
    on.textContent += "Olive"
  }
  if (pizza.children[0].children[0].checked) {
    add.textContent += "Pepper"
  }
  if (pizza.children[1].children[0].checked) {
    add.textContent += "Sausage cucumber"
  }
}
