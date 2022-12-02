let user = document.querySelector("#user");
let tel = document.querySelector("#tel");
let email = document.querySelector("#email");
let text = document.querySelector("#name");
let phone = document.querySelector("#phone");
let address = document.querySelector("#address");
let dough = document.querySelector("#dough");
let fun1 = document.querySelector("#fun1");
let fun2 = document.querySelector("#fun2");
let fun3 = document.querySelector("#fun3");
let total = document.querySelector("#total");
let on = document.querySelector("#on");
let add = document.querySelector("#add");
let size = document.querySelector("#size");
let select = document.querySelector("#select");
let turkey = document.querySelector("#turkey");
let mushroom = document.querySelector("#mushroom");
let olive = document.querySelector("#olive");
let horse = document.querySelector("#horse");
let pepper = document.querySelector("#pepper");
let sausage = document.querySelector("#sausage");

function pizza() {
  if (turkey.checked) {
    on.textContent += turkey.value
  }  else if  (mushroom.checked) {
    on.textContent +=+ mushroom.value
  } else if (olive.checked) {
    on.textContent += olive.value
  } else if (horse.checked) {
    on.textContent += horse.value
  }  else {
    true
  }
}
function pizza2 () {
   if (pepper.checked) {
    add.textContent += pepper.value
  } else if (sausage.checked) {
    add.textContent += sausage.value
  }
}

let som = 0;

function value() {
  if (user.value && tel.value && email.value) {
    text.textContent += user.value;
    phone.textContent += tel.value;
    address.textContent += email.value;
  } else {
    alert("Inputlarni toldring");
  }
};

function volm() {
  let volm = document.getElementById("select");
  dough.textContent += select.value 
};

function math() {
  som += select.value
  total.textContent = select.value
}

function pro() {
  if (fun1.value && fun2.value && fun3.value) {
    size.textContent += fun1.value;
    size.textContent += fun2.value;
    size.textContent += fun3.value;
  } else {
    return som
  }
}

fun1 = "25sm"
function myFun1() {
  if (som += fun1) {
    size.textContent += fun1
  }
}
fun2 = "30sm"
function myFun2() {
  som += fun2;
  size.textContent += fun2
}
fun3 = "35sm"
function myFun3() {
  som += fun3;
  size.textContent += fun3
}



btn.addEventListener("click", (e) => {
  e.preventDefault();
  pizza();
  pizza2();
  value();
  volm();
  pro();
  myFun1();
  myFun2();
  myFun3();
});

