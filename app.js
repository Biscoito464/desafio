let texto = document.querySelector("h1");
texto.innerHTML = ("Hora do desafio")

function ConsoleA(){
    console.log("O botão foi clicado")
}

function AlertaA() {
    alert("Eu amo")
}

function PromptA() {
    let nomeDaCidade = prompt("De onde você é?")
    alert("Ja estive em " + nomeDaCidade)
}

function SomaA() {
let numero1 = parseInt(prompt("Digite o primeiro numero"));
let numero2 = parseInt(prompt("Digite o segundo numero"));
let resultado = numero1 + numero2;
alert(`${numero1} + ${numero2} = ${resultado}`)

}