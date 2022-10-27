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