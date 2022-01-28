// Chamada de tags

const cripto = document.querySelector("#btn-cripto");
const descripto = document.querySelector("#btn-descripto");
const copia = document.querySelector("#btn-copia")

let resposta = document.querySelector("#resposta");
let mensagem = document.querySelector("#mensagem");

// Definição de eventos

cripto.addEventListener('click', criptoAcao);
descripto.addEventListener('click', descriptoAcao);
copia.addEventListener('click', copiaAcao);

mensagem.addEventListener('keypress', function (e) {

    const keyCode = (e.keyCode ? e.keyCode : e.wich);

    if (keyCode > 47 && keyCode < 58) {
        e.preventDefault();
    }

});

//Função para criptografar o texto em input

function criptografia(mensagem) {

    let texto = mensagem
        .replaceAll(/e/gi, 'enter')
        .replaceAll(/i/gi, 'imes')
        .replaceAll(/a/gi, 'ai')
        .replaceAll(/o/gi, 'ober')
        .replaceAll(/u/gi, 'ufat')

    return texto;
}

//Função para descriptografar o texto em input

function descriptografar(mensagem) {

    let textoDescript = mensagem
        .replaceAll(/enter/gi, 'e')
        .replaceAll(/imes/gi, 'i')
        .replaceAll(/ai/gi, 'a')
        .replaceAll(/ober/gi, 'o')
        .replaceAll(/ufat/gi, 'u')

    return textoDescript;
}

//      function trataMensagem(mensagem) {
//    if (!regex.texto) {
//          alert("Caracter inválido!");
//      } else {
//          return mensagem;
//      }
//  }

//Funções para a funcionalidade dos botões

function descriptoAcao() {

    const saveInput = mensagem.value;
    resposta.value = descriptografar(saveInput);
    mensagem.value = '';
}

function criptoAcao() {

    const saveInput = mensagem.value;
    resposta.value = criptografia(saveInput);
    mensagem.value = '';
}

function copiaAcao() {

    resposta.select();
    resposta.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resposta.value);
}