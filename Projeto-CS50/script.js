$("#check").click(buscarPokemon);
$("#proximo").click(irParaProximo);
$("#anterior").click(irParaAnterior);

var atual = 1
const pokemons = 905
var anterior = 905
var proximo = 2

$.get("https://pokeapi.co/api/v2/pokemon/1",exibirResultado);



function buscarPokemon(){
    var nome = $("#inputPokemon").val();
    $.get("https://pokeapi.co/api/v2/pokemon/"+nome,exibirResultado);
}

function exibirResultado(resposta){

    console.log(resposta);
    $('#tipo').text('Tipos: ')

    // Iniciando com o nome
    let nome = resposta.name;
    nome = nome[0].toUpperCase() + nome.substring(1);

    $("#nome").text('Nome: ' + nome);

    // Buscando os tipos 
    let tiposArray = resposta.types;
    let tamanhoTipos = tiposArray.length;
    let tipos = [];
    for (let i = 0 ; i < tamanhoTipos; i++){
        let tipo = resposta.types[i].type.name;
        tipo = tipo[0].toUpperCase() + tipo.substring(1);
        tipos.push(tipo);
        $('#tipo').append(tipos[i] + " ")
    }
    

    // Imagem padrão
    let image = resposta.sprites.front_default;
    $('#imagem').html("<img src=" + '"' + image + '"' + ">");

    // Altura
    $("#altura").text('Altura: '+resposta.height/10 + ' m');

    // Peso
    $("#peso").text('Peso: '+resposta.weight/10 + ' Kg');

    // Ataque, defesa, hp, speed, sp-attack e sp-defense
    $("#hp").text('HP: '+resposta.stats[0].base_stat);
    $("#attack").text('Attack: '+resposta.stats[1].base_stat);
    $("#defense").text('Defense: '+resposta.stats[2].base_stat);
    $("#speed").text('Speed: '+resposta.stats[5].base_stat);
    $("#sp-attack").text('Special Attack: '+resposta.stats[3].base_stat);
    $("#sp-defense").text('Special Defense: '+resposta.stats[4].base_stat);

    // Atualizando anterior e atual
    atual = resposta.id;
    proximo = atual + 1;
    anterior = atual - 1;
    if (proximo > pokemons){
        proximo = 1;
    }
    if (anterior < 1){
        anterior = pokemons;
    }
    console.log("atual: "+atual)
}

function irParaAnterior(){
    console.log("anterior: " + anterior);
    $.get("https://pokeapi.co/api/v2/pokemon/"+anterior,exibirResultado);
}

function irParaProximo(){
    console.log("proximo: " + proximo);
    $.get("https://pokeapi.co/api/v2/pokemon/"+proximo,exibirResultado);
}