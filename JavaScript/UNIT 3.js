// document.getElementsByClassName("className"); Retorna todos os elementos com a class className

// document.getElementsByClassName("exemplo teste"); Retorna todos os elementos com as classes exemplo e teste

// document.getElementsById("principal").getElementsByClassName("teste"); Retorna todos os elementos com a classe teste dentro do Id principal

// document.getElementsByTagName("h1"); Retorna todos os elementos com a tag h1

// document.getElementsByTagName("*"); retorna todos os elementos do documento

// var x = document.getElementsByTagName("h1").lenght; armazena na variável x a quantidade de elementos que tem a tag h1


// Criando uma array

// var listaCompras = ['leite', 'pao', 'queijo' , 'presunto' ] - melhor jeito
// indice                 0        1       2           3       


// var listaCompras = new Array('leite','pao','queijo','presunto')

// listaCompras[0] = 'leite'

// listaCompras.lenght = tamanho

// listaCompras.push("banana"); - adiciona Banana no final

// listaCompras.pop(); remove o ultimo item

// listaCompras.splice(2,0,banana); adiciona banana na posição 2 sem excluir nenhum elemento(parametro 0)

// listaCompras.splice(2,1); remove 1 elemento que esta no indice 2

// listaCompras.toString(); retorna uma string com os elementos

var listaCompras = ['picanha', 'cerveja', 'carvao']

function preencherSelect(){
    var htmlFinal = "";
    var tamanhoLista = listaCompras.length;

    for (var i = 0; i < tamanhoLista; i++){
        htmlFinal += "<option value= " +i + ">"+ listaCompras[i] + "</option>"
    }

    document.getElementById("meuSelect").innerHTML = htmlFinal;
}

function adicionarItem() {
    var valorInput = document.getElementById('inputItem').value;
    listaCompras.push(valorInput);
    preencherSelect();
}

function removeItem(){

    var valorSelect = document.getElementById("meuSelect").value;
    listaCompras.splice(valorSelect,1);
    preencherSelect();
}

function soma() {
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);

    document.getElementById("resultado").innerHTML = num1 + num2
}

function subtracao() {
    var num1 = parseInt(document.getElementById('number1').value);
    var num2 = parseInt(document.getElementById('number2').value);

    document.getElementById("resultado").innerHTML = num1 - num2
}

var num1;
var num2;

function pegaValoresInput() {
    num1 = parseInt(document.getElementById('number1').value);
    num2 = parseInt(document.getElementById('number2').value);
}

function multiplicacao() {
    pegaValoresInput;
    document.getElementById("resultado").innerHTML = num1 * num2
}

function divisao() {
    pegaValoresInput();
    document.getElementById("resultado").innerHTML = num1 / num2
}

// também podemos utilizar o comando return para retornar determinado valor

function criaInputs() {

    

    var numInputs = parseInt(document.getElementById("numeroInputs").value);

    var htmlFinal = "";

    for(var i = 0; i < numInputs; i++) {

        htmlFinal += "<input class='inputMedia'> <br><br>";
    
    }

    document.getElementById("divInputs").innerHTML = htmlFinal;
}

function calcularMedia() {

    var inputs = document.getElementsByClassName("inputMedia");
    var numeroInputs = inputs.length;
    var soma = 0;

    for(var i = 0; i < numeroInputs; i++) {

        soma += parseInt(inputs[i].value);

    }
    document.getElementById("mediaFinal").innerHTML = soma / numeroInputs;
}

function restoDiv() {
    pegaValoresInput();
    var Div = (num1/num2);
    var DivStr = Div.toString();
    for (var i = 0; i < DivStr.length; i++){
        console.log("Divisao = " + DivStr)
        var restoDiv = '0';
        if (DivStr[i] == '.'){
            var restoDiv = '';    
            for (var j = i;  j < DivStr.length; j++){
                restoDiv += DivStr[j];
                console.log(restoDiv)
            }
            restoDiv = parseFloat(restoDiv);
            console.log(restoDiv)
            break;
        }
    }
    document.getElementById('resultadoRestoDiv').innerHTML = restoDiv;
}

function potencia(){
    pegaValoresInput();
    var result = num1;
    console.log(result);
    for (var i = 0; i < num2-1; i++){
        result *= num1;
        console.log(result);
    }
    document.getElementById('resultadoPotencia').innerHTML = result;
}

function aleatorio(){
    pegaValoresInput();
    document.getElementById('resultadoAleatorio').innerHTML = Math.floor(Math.random() * (num1-num2)+num2)
}