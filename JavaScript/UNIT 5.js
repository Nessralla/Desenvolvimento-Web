$("#botaoBuscarPersonagemAleatorio").click(buscarPersonagemAleatorio);
$("#buscaFilmeId").click(buscarFilmePorPersonagem);

function buscarPersonagemAleatorio(){
    $.get("https://swapi.dev/api/people/" + Math.floor(Math.random(1,87)*10), preencherLabelPersonagemAleatorio);
}

function preencherLabelPersonagemAleatorio(data){
    console.log(data);
    $("#personagemAleatorioId").text(data.name);
}

function buscarFilmePorPersonagem(){
    var nome = $("#buscaFilmePorNomePersonagemId").val();
    $.get("https://swapi.dev/api/people/?search=" + nome,popularTabela);
}

function popularTabela(responseText){
    console.log(responseText.results[0]);
    $("#labelFilmeDeId").text(responseText.results[0].name);

    $("#tabelaFilmesId").find("tr:gt(0)").remove(0);
    for (let i = 0; i< responseText.results[0].films.length; i++){
        $.get(responseText.results[0].films[i], criaLinha);
    }
}

function criaLinha(responseText){
    let htmlFinal = 
        "<tr><td>" + responseText.title + "</td>" +
        "<td>" + responseText.episode_id + "</td>" +
        "<td>" + responseText.director + "</td></tr>"
    $('#tabelaFilmesId').append(htmlFinal);
}