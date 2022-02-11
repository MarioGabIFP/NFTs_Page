let loginSec = document.getElementById("loginSec")
let registerSec = document.getElementById("registerSec")

/*
 * Efecto click en los propios NFT's
 */
let blocks = document.getElementsByClassName("block");

for (let x = 0; x < blocks.length; x++) {
    blockPrep(blocks[x]);
}
/**
 * 
 * @param {*} arrBl 
 */
function blockPrep(arrBl) {
    let arts = arrBl.getElementsByClassName("art");

    for (let x = 0; x < arts.length; x++) {
        blockClick(arts[x]);
    }
}

function blockClick(arrts) {
    arrts.onmousedown = function() {
        arrts.classList = "art_2";
    }

    arrts.onmouseup = function() {
        arrts.classList = "art";
    }

    arrts.onmouseleave = function() {
        arrts.classList = "art";
    }
}

/*
 * Efecto click en elementos del menú
 */
let lis = document.getElementById("nav").getElementsByTagName("a");

for (let x = 0; x < lis.length; x++) {
    navClick(lis[x]);
}

function navClick(lisarr) {
    lisarr.onmousedown = function() {
        lisarr.getElementsByTagName("li")[0].style.backgroundColor = "#8677d5eb";
    }

    lisarr.onmouseup = function() {
        lisarr.getElementsByTagName("li")[0].style.backgroundColor = "";
    }

    lisarr.onmouseleave = function() {
        lisarr.getElementsByTagName("li")[0].style.backgroundColor = "";
    }
}

/*
 * Efecto Aparecer formulario login cuando el usuario clicka en la opcion
 */
document.getElementById("login").addEventListener("click", setLogin);

function setLogin(){
    loginSec.classList = "";
    if (blocks.length > 0){
        for (let x = 0; x < blocks.length + 1; x++) {
            blocks[0].classList = "unset";
        }
    } else {
        registerSec.classList = "unset";
    }
}

/*
 * Efecto Aparecer formulario de Registro cuando el usuario clicka en la opcion
 */
document.getElementById("register").addEventListener("click", setReg);

function setReg(){
    registerSec.classList = "";
    if (blocks.length > 0){
        for (let x = 0; x < blocks.length + 1; x++) {
            blocks[0].classList = "unset";
        }
    } else {
        loginSec.classList = "unset";
    }
}

/*
 * Validacion de login
 */
document.getElementById("SubmitIn").addEventListener("click", validateLogin);

function validateLogin(){
    let user = document.getElementById("user")
    let pass = document.getElementById("pass")
    if (user.value == "" || pass.value == ""){
        user.style.borderColor = "red"
        pass.style.borderColor = "red"

        alert("debes rellenar todos los campos");
    }
}

/*
 * Validacion de registro
 */
document.getElementById("SubmitReg").addEventListener("click", validateReg);

function validateReg(){
    let name = document.getElementById("name")
    let apel = document.getElementById("apel")
    let email = document.getElementById("email")
    let npass = document.getElementById("npass")
    let user = document.getElementById("uuser")
    let pass = document.getElementById("upass")

    if (user.value == "" || pass.value == ""){
        name.style.borderColor = "red";
        apel.style.borderColor = "red";
        email.style.borderColor = "red";
        npass.style.borderColor = "red";
        user.style.borderColor = "red";
        pass.style.borderColor = "red";

        alert("debes rellenar todos los campos");
    } else if (npass.value != pass.value){
        name.style.borderColor = "";
        apel.style.borderColor = "";
        user.style.borderColor = "";
        email.style.borderColor = "";
        npass.style.borderColor = "red";
        pass.style.borderColor = "red";

        alert("las contraseñas no coinciden");
    }
}