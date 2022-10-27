/*

Jquery


$(seletor).ação();
Sinal $ é utilizado para acessar o JQUERY
Seletor serve para consultar/localizar elementos HTML
A ação é a tarefa a ser executada no elemento consultado

Seletor pode ser ID: $("#id")
Seletor de class: $(".minhaclasse")
Seletor de tag: $("p")
("*") = todos os elementos

É possível combinar tipos de seletores
$("#minhaTabela tr") = document.getElementById("minhaTabela").getElementsByTagName("tr"); que busca todas as linhas com id minhaTabela


POO 
OBJECT

var pessoa = {
    nome: "Zezinho", 
    sobrenome: "Silva", 
    idade: 12,
    andar: function(){
        alert("Andando")
    }
    nomeCompleto: function() {
        return this.nome + " " + this.sobrenome
    }
};

pessoa.nome "é a mesma coisa que" pessoa["nome"]

Objetos podem ter métodos também, veja acima no método andar!

A palavra-chave THIS:
    usada para referenciar o próprio objeto, veja com o método nomeCompleto.

O Construtor!

function Pessoa(_nome, _sobrenome, _idade) {
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.idade = _idade;
}

var novaPessoa = new Pessoa ("Zezinho", "Silva", 12);


*/

function Item(nome, quantidade, preco){
    this.nome = nome;
    this.quantidade = quantidade;
    this.preco = preco;
}


var itens = [];


function adicionarItem() {

    var nomeItemNovo = $("#nome").val();
    var quantidadeNovo = $("#quantidade").val();
    var precoNovo = $("#preco").val();
    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo);
    itens.push(novoItem);
    atualizaTabela(novoItem);
    console.log(itens);
}

function atualizaTabela(item){
    
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nome + "</td>";
    htmlFinal += "<td>" + item.quantidade + "</td>";
    htmlFinal += "<td>" + item.preco + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensId").append(htmlFinal);  

  
}

function fecharCompra(){
    var htmlFinal = 'Você Comprou: ';

    let soma = 0;
    for (var i = 0; i <itens.length; i++){
        htmlFinal += itens[i].quantidade + ' ' + itens[i].nome + ' - ';
        soma += itens[i].quantidade*itens[i].preco;
    }
    htmlFinal += "Total: R$" + soma;
    $("#fechamentoLabelId").text(htmlFinal);
}

atores = [];
sets = [];

function Ator(nome,sobrenome,cache){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cache = cache;
}

function set(local,custo,horas){
    this.local = local;
    this.custo = custo;
    this.horas = horas;
}

function inserirAtor(){
    let novoNome = $("#nomeAtor").val();
    let novoSobrenome = $("#sobrenomeAtor").val();
    let novoCache = parseInt($("#cacheAtor").val());
    var novoAtor = new Ator(novoNome,novoSobrenome,novoCache);
    atores.push(novoAtor);
    atualizaTabelaAtores(novoAtor);
    console.log(atores);
}

function inserirSet(){
    let novoLocal = $("#localSet").val();
    let novoCusto = parseInt($("#custoLocSet").val());
    let novoHoras = parseInt($("#horasUtiSet").val());
    var novoSet = new set(novoLocal,novoCusto,novoHoras);
    sets.push(novoSet);
    atualizaTabelaSets(novoSet);
    console.log(sets);
}

function atualizaTabelaAtores(item){
    
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.nome + "</td>";
    htmlFinal += "<td>" + item.sobrenome + "</td>";
    htmlFinal += "<td>" + item.cache + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensAtores").append(htmlFinal);  
  
}

function atualizaTabelaSets(item){
    
    var htmlFinal = "<tr>";
    htmlFinal += "<td>" + item.local + "</td>";
    htmlFinal += "<td>" + item.custo + "</td>";
    htmlFinal += "<td>" + item.horas + "</td>";
    htmlFinal += "</tr>";
    $("#tabelaItensSets").append(htmlFinal);  
  
}

function calculaCustos(){
    htmlCaches = 0;
    htmlLocacoes = 0;
    htmlHoras = 0;

    for (i of atores){
        htmlCaches += i.cache;
    }

    for (i of sets){
        htmlLocacoes += i.custo;
        htmlHoras += i.horas;
    }

    htmlCustos = "O filme custará R$: " + (htmlCaches+htmlLocacoes) + " e durará " + htmlHoras + " horas";
    $("#resultado").text(htmlCustos);
}