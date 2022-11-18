function changeName(evento) {
    console.log(evento.innerText=="Login");
    if (evento.innerText=="Login") {
        evento.innerText="Logout"
    }else{
        evento.innerText="Login"
    }
}

function eliminar(evento) {
    evento.remove()
}

var count = 319;
var countElement = document.querySelector("#count,#count2");

console.log(countElement);

function add1() {
    count++;
    countElement.innerText = "" + count;
    console.log(count);
}