var modal = document.getElementById("modal");
const modalmain = document.getElementById("modal-main");
var btn = document.getElementById("btn");
var span = document.getElementsByClassName("close")[0];
var email = document.getElementById("email");
var password = document.getElementById("senha");

btn.onclick = function() {
    if (email.value == "testecerto@email.com" && password.value == "123456"){
        modal.style.display = "block";
        modalmain.className = "modal-main-certo";
    }
    else if (email.value == "testeerror@email.com" && password.value == "654321"){
        modal.style.display = "block";
        modalmain.className = "modal-main-erro";
    }
    else{
        modal.style.display = "block";
        modalmain.className = "modal-main";
    }
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}