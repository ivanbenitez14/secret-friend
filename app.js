
let amigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById("amigo").value;

    if( nombreDeAmigo == "") {
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(nombreDeAmigo);
        limpiarInput();
        mapeoDeAmigos();
    }

    return;
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let amigoElegido = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[amigoElegido];

        let mostrarAmigoSecreto = document.getElementById("resultado");
        mostrarAmigoSecreto.innerHTML = `El amigo secreto elegido es: ${amigoSecreto}`;

    } else {
        alert("Agregar un amigo antes de sortear");
    }
}

function mapeoDeAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.innerHTML = amigos[i];
        listaAmigos.appendChild(elemento);
    }
}

function limpiarInput() {
    document.getElementById("amigo").value = "";
    return;
}