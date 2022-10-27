// vamos esconder os ids abaixo

$("#inputDivId").hide();
$("#labelDivId").hide();

// Criando a variável meuCookie que irá receber o nome

var meuCookie = {};


// quando o DOM carregar o elemento com id vemVindoId ele vai executar a funcao validarCookieNome

$("#bemVindoId").ready(validarCookieNome); 

// a função abaixo irá validar o cookie. Se tiver algum nome na variável meuCookie, ele executa o código 1, se não, else


function validarCookieNome() {

    preencherCookie();

    if(meuCookie.nome != undefined) {
        $("#labelDivId").show();
        $("#labelId").text(meuCookie.nome );
        $("#inputDivId").hide();
        console.log('o cookie tem valor');
    }

    else {
        $("#inputDivId").show();
        console.log('o cookie é undefined');
    }
}

// Função para preencher o cookie

function preencherCookie() {

    
    // Separamos as declarações do cookie 
    var camposValor = document.cookie.split("; ");


    console.log('o valor após o primeiro split é: '+ camposValor);

    // Depois iremos percorrer cada declaração separando a chave do valor
    for(var i=0; i < camposValor.length; i++) {

        var campoValorVetor = camposValor[i].split("=");

        console.log(campoValorVetor);

        meuCookie[campoValorVetor[0]] = campoValorVetor[1];

    }
    console.log(meuCookie);
}
// Quando o usuário clicar no botão, vamos chamar a função click
$("#buttonEntrarId").click(entrar);

// A função entrar irá buscar o nome digitado pelo usuário, jogar na função criarCookie passando também a quantidade de
// Dias para expirar o cookie e depois chama a função que irá validar e exibir

function entrar() {  
    var nome = $("#inputNomeId").val();
    criarCookie("nome", nome, 2);
    console.log('o nome do usuario é: '+nome);
    validarCookieNome();
}


// Funcao para criar o cookie. 

function criarCookie(campo, valor, dias) {
  
    // Jogamos a data atual na variavel dataExpiracao
    var dataExpiracao = new Date();


    // Dizemos que a dataExpiração será ela mesma somada do parametro dias *horas*minutos*segundos*milesimos
    dataExpiracao.setTime(dataExpiracao.getTime() + (dias * 24 * 60 * 60 * 1000));

    
    // depois convertemos a data num padrão chave valor em string
    var campoExpires = "expires=" + dataExpiracao.toUTCString();

    
    // depois criamos o cookie com o valores informados no parametro mais a data de expiração

    document.cookie = campo + "=" + valor + "; " + campoExpires;
    console.log('O cookie é: '+ document.cookie);
}

// Selecionamos o select e chamamos uma função quando o valor dele mudar
$("#selectCoresId").change(selecionarCor);


// função que seleciona a cor
function selecionarCor() {
  
    // Mostramos a cor  selecionada
    console.log($("#selectCoresId").val());

    // Armazenamos o valor selecionado na variável cor
    var cor = $("#selectCoresId").val();

    // Alteramos a propriedade css do labelId com a cor escolhida
    $("#labelId").css("color", cor);
       
    // Inseremos no nosso cookie a cor 
    criarCookie("cor", cor, 2);
}

// Quando o elemento bemVindoId for carregado, chama a função validarCookieCor
$("#bemVindoId").ready(validarCookieCor);

function validarCookieCor() {
  
    // Verificamos se a cor do cookie meuCookie não é indefinida
    if(meuCookie.cor != undefined) {
        
        // Se não for indefinida, atualizamos a propriedade css do labelId com a cor do cookie 
        $("#labelId").css("color", meuCookie.cor);

    }
}

// Desafios

// Mudar a cor de fundo da página

// Selecionamos o select e chamamos uma função quando o valor dele mudar
$("#redB").change(seleCordFundo);
$("#blueB").change(seleCordFundo);
$("#greenB").change(seleCordFundo);

// função que seleciona a cor de fundo
function seleCordFundo() {
  
    // Mostramos a cor  selecionada
    console.log($("#redB").val(), $("#blueB").val(), $("#greenB").val());

    // Armazenamos o valor selecionado nas variáveis de cor de fundo
    var fundoR = $("#redB").val();
    var fundoG = $("#greenB").val();
    var fundoB = $("#blueB").val();

    // Alteramos a propriedade css do labelId com a cor escolhida
    $("body").css('background-color', 'rgb(' + fundoR + ',' + fundoG + ',' + fundoB + ')');
    var novoFundo = 'rgb(' + fundoR + ',' + fundoG + ',' + fundoB + ')';
       
    // Inseremos no nosso cookie a cor 
    criarCookie("bgColor", novoFundo, 2);
}

// Quando iniciar a página
$("#bemVindoId").ready(validarCookieFundo);

function validarCookieFundo() {
  
    // Verificamos se a cor do cookie meuCookie não é indefinida
    if(meuCookie.bgcolor != undefined) {
        
        // Se não for indefinida, atualizamos a propriedade css do labelId com a cor do cookie 
        $("#labelId").css('background-color', meuCookie.bgColor);

    }
}

// Como estou me sentindo
$('#guardarSentimento').click(atualizarSentimento);

// Função para mostrar o sentimento

function atualizarSentimento(){
    var sentimento = $('#inputSentimentoId').val();
    criarCookie('sentimento',sentimento,2);
    $('#sentimento').html(sentimento);
    validarSentimento();
}

// Verificar o sentimento
function validarSentimento() {
  
    // Verificamos se a cor do cookie meuCookie não é indefinida
    if(meuCookie.sentimento != undefined) {
        
        // Se não for indefinida, atualizamos a propriedade css do labelId com a cor do cookie 
        $('#sentimento').html(meuCookie.sentimento);;

    }
}
