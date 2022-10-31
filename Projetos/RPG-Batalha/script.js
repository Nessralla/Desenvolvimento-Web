// Valores iniciais e referências para evoluções

var vidaGuerreiro = 50;
var danoGuerreiro = 10;
var vidaArqueiro = 30;
var danoArqueiro = 20;
var vidaMago = 20;
var danoMago = 30;

// armazenando nas imagens em variáveis

var imagemGuerreiro = "pWarrior.png";
var imagemArqueiro = "pArqueiro.png";
var imagemMago = "pMago.png";

// função que irá permitir a criação dos personagens

function Personagem(classe, vida, dano, imagem) {
    this.classe = classe;
    this.vida = vida;
    this.dano = dano;
    this.imagem = imagem;
}

var personagemGuerreiro;
var personagemArqueiro;
var personagemMago;
var personagens;

// função para criar personagem

function criarPersonagens() {

    personagemGuerreiro = new Personagem("Guerreiro", vidaGuerreiro, danoGuerreiro, imagemGuerreiro);
    personagemArqueiro = new Personagem("Arqueiro", vidaArqueiro, danoArqueiro, imagemArqueiro);
    personagemMago = new Personagem("Mago", vidaMago, danoMago, imagemMago);
    personagens = [personagemGuerreiro, personagemArqueiro, personagemMago]; 
}

criarPersonagens();

// SISTEMA DE EVOLUÇÃO

// variáveis para definir como evolui
var pontosParaEvolucao = 1;
var pontosAoEvoluir = 5;

// Após a batalha devemos atualizar os pontos para evolução no html e permitir upar o personagem

function atualizarPontosEvolucao() {
    $("#pontosEvolucaoid").html(pontosParaEvolucao);
    atualizarButtonDisabled();
}

// ao atualizar o valor de pontos para evolucao vamos chamar a função que irá desabilitar ou habilitar o botão de upar
function atualizarButtonDisabled() {
    if(pontosParaEvolucao <= 0) {
        $(".botaoUpdate").attr("disabled", true);
    }
    else {
        $(".botaoUpdate").attr("disabled", false);
    }
}


// Função que irá aumentar o dano do personagem escolhido, gastando um ponto de evolução

function evoluirDano(classe) {

    pontosParaEvolucao -= 1;
    switch(classe) {
      case "guerreiro":
        danoGuerreiro += pontosAoEvoluir;
        $("#GuerreiroDanoId").html(danoGuerreiro);
        break;
      case "arqueiro":
        danoArqueiro += pontosAoEvoluir;
        $("#ArqueiroDanoId").html(danoArqueiro);
        break;
      case "mago":
        danoMago += pontosAoEvoluir;
        $("#MagoDanoId").html(danoMago);
        break;
    }
    atualizarPontosEvolucao();
  }
  
  // Função que irá aumentar a vida do personagem escolhido, gastando um ponto de evolução


  function evoluirVida(classe) {
  
    pontosParaEvolucao -= 1;
    switch(classe) {
      case "guerreiro":
        vidaGuerreiro += pontosAoEvoluir;
        $("#GuerreiroVidaId").html(vidaGuerreiro);
        break;
      case "arqueiro":
        vidaArqueiro += pontosAoEvoluir;
        $("#ArqueiroVidaId").html(vidaArqueiro);
        break;
      case "mago":
        vidaMago += pontosAoEvoluir;
        $("#MagoVidaId").html(vidaMago);
        break;
    }
  atualizarPontosEvolucao();
}

// INIMIGOS

// função construtura de inimigos

function Inimigo(nome, vida, dano, imagem) {
    this.nome = nome;
    this.vida = vida;
    this.dano = dano;
    this.imagem = imagem;
  }

// vetor que irá armazenar os inimigos
var inimigos = [];

// função que cria cada tipo de inimigo, armazena na sua classe e depois armazena todos no vetor inimigos

function criarInimigos() {
    var orc = new Inimigo("Orc", 20, 10, "orc1.png");
    var orcShaman = new Inimigo("Orc Shaman", 20, 30, "orc2.png");
    var orcChefe = new Inimigo("Orc Chefe", 50, 10, "orc3.png");

    var orcs = [orc, orcShaman, orcChefe];
  
    var esqueleto = new Inimigo("Esqueleto", 10, 20, "esq1.png");
    var zumbi = new Inimigo("Zumbi", 20, 30, "esc2.png");
    var zumbiChefe = new Inimigo("Zumbi Chefe", 30, 50, "esc3.png");
  
    var mortosvivos = [esqueleto, zumbi, zumbiChefe];
  
    var imp = new Inimigo("Imp", 20, 20, "dem1.png");
    var demonio = new Inimigo("Demônio", 30, 30, "dem2.png");
    var demonioChefe = new Inimigo("Demônio Chefe", 50, 40, "dem3.png");
  
    var demonios = [imp, demonio, demonioChefe];
 
    inimigos = [orcs, mortosvivos, demonios];
}

// SISTEMA DE BATALHA

// criamos três variáveis, o indexPersonagem para saber qual personagem esta lutando, o de grupoInimigos e do InimigoAlvo

var indexPersonagem = 1;
var indexGrupoInimigos;
var indexInimigoAlvo;

// função que irá buscar qual inimigo selecionamos e exibir no menu de inimigos

function selecionarInimigos() {
    indexGrupoInimigos = $("#selecaoInimigosId").val();

    var htmlOptions = "";
 
    for(var i=0; i<3;i++) {
  
       htmlOptions += "<option value=" + i + ">" + inimigos[indexGrupoInimigos][i].nome + "</option>";
  
    }
  
    $("#inimigosEscolhidosId").html(htmlOptions);
    atualizarDadosAlvo();
}

// com o inimigo escolhido, atualizamos o html para mostrar o inimigo que iremos combater

function atualizarDadosAlvo() {

    indexInimigoAlvo = parseInt($("#inimigosEscolhidosId").val());
  
    $("#vidaInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida);
    $("#danoInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].dano);
    $("#imagemInimigoId").attr("src", inimigos[indexGrupoInimigos][indexInimigoAlvo].imagem); 
}


// INICIANDO A BATALHA

// Ao iniciar a batalha, devemos criar os personagens e os inimigos, atualizar os dados e o inimigo no html

function iniciarBatalha() {

    criarPersonagens();
    criarInimigos();
    atualizarDadosPersonagem();
    selecionarInimigos();
}

// Esta funçao irá atualizar o html com as imagens do personagem
function atualizarDadosPersonagem() {

    $("#vidaPersonagemId").html(personagens[indexPersonagem].vida);
    $("#danoPersonagemId").html(personagens[indexPersonagem].dano);
    $("#imagemPersonagemId").attr("src", personagens[indexPersonagem].imagem);
}

// ao mudar o personagem, deve chamar novamente a função e atualizar o personagem

function selecionarPersonagem() {
    indexPersonagem = parseInt($("#personagemEscolhidoId").val());
    atualizarDadosPersonagem();
  }


// ATAQUE

// porcentagem inimigo de acerto
var porcentagemInimigo = 50;

// função de ataque

function Atacar() {

    var htmlFinal = "";
 
    // Personagem escolhido esta morto?
  
    if(personagens[indexPersonagem].vida <= 0) {
      htmlFinal = personagens[indexPersonagem].classe + " está morto, ataque com outro personagem";
    }
  
    // Inimigo escolhido esta morto?
  
    else if(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
      htmlFinal = inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + " já esta morto, ataque outro inimigo";
    }
  
    // Posso atacar normalmente
  
    else {
 
      // Ataque do personagem, 100% acerto
  
      inimigos[indexGrupoInimigos][indexInimigoAlvo].vida -= personagens[indexPersonagem].dano;
  
  
      // Montagem do dano do personagem no inimigo
  
      htmlFinal = inimigos[indexGrupoInimigos][indexInimigoAlvo].nome + 
  
                             " recebeu " +
  
                             personagens[indexPersonagem].dano + 
  
                             " de dano. ";
      
  
      // Verifica inimigo morreu, se sim já cria uma mensagem
  
      if(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida <= 0) {
        htmlFinal += inimigos[indexGrupoInimigos][indexInimigoAlvo].nome +
          " morreu. "
        inimigos[indexGrupoInimigos][indexInimigoAlvo].vida = 0;
  
      }
  
        // Ataque do inimigo, 50% de chance de acertar
  
      if(Math.floor(Math.random() * 100) < porcentagemInimigo) {
  
        // Se acertar diminuiu vida do personagem
  
        personagens[indexPersonagem].vida -= inimigos[indexGrupoInimigos][indexInimigoAlvo].dano;
  
        // Cria mensagem
  
        htmlFinal += personagens[indexPersonagem].classe + 
          " recebeu " + inimigos[indexGrupoInimigos][indexInimigoAlvo].dano +
          " de dano. ";
  
        // Verifica se personagem morreu, se sim cria mensagem
  
        if(personagens[indexPersonagem].vida <= 0) {
          personagens[indexPersonagem].vida = 0;
          htmlFinal += personagens[indexPersonagem].classe + " morreu. "
  
        }
  
      }
 
      // Verifica se todos inimigos estão mortos?
  
      var todosInimigosEstaoMortos = verificaTodosInimigosMortos();
  
      if(todosInimigosEstaoMortos) {
  
        htmlFinal += "Todos inimigos mortos, pode saquear os pontos de evolução.";

        // Se morreu, habilita botão se saquear
  
        $("#botaoSaquearId").attr("disabled", false);

      }
  
    }

    atualizarDadosPersonagem();
    atualizarDadosAlvo();
  
    // Mostra mensagem final
  
    $("#resultadoId").html(htmlFinal);
 
  }

// FINALIZAÇÃO DA BATALHA
// testetetetetete
// verificamos se todos os inimigos forma derrotados

function verificaTodosInimigosMortos() {
    for(var i = 0; i < inimigos[indexGrupoInimigos].length; i++) {
      if(inimigos[indexGrupoInimigos][i].vida > 0) {
        return false;
      }
    }
    return true;
}

// agora permitimos saquear a sala
function Saquear() {
    pontosParaEvolucao += 1;
    atualizarPontosEvolucao();
    $("#botaoSaquearId").attr("disabled", true);
  
}