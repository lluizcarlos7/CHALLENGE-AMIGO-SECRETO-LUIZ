let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();
    
    if (nome === "") {
        alert("Por favor, digite um nome válido!");
        return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
}

function atualizarLista(sorteado = null) {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach((nome, index) => {
        let novoItem = document.createElement("li");
        if (nome === sorteado) {
            novoItem.innerHTML = `<strong>${nome} ⬅️</strong>`;
            novoItem.style.color = "#d9534f";
        } else {
            novoItem.textContent = nome;
        }
        let botaoRemover = document.createElement("button");
        botaoRemover.textContent = "x";
        botaoRemover.classList.add("botao-excluir");
        botaoRemover.onclick = () => removerAmigo(index);
        novoItem.appendChild(botaoRemover);
        lista.appendChild(novoItem);
    });
}


function removerAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Seu amigo secreto é: <strong>${amigoSorteado}</strong> 🎁</li>`;
    atualizarLista(amigoSorteado);
    document.getElementById("botaoReiniciar").style.display = "block";
}

function reiniciarSorteio() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botaoReiniciar").style.display = "block";
}
