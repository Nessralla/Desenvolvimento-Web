/* UNIT 11 - Estruturas de Controle

 O método getElementById() é responsável por retornar o elemento que possui o atributo ID com o valor específicado
  var valorInput = getElementById("meu input").value

  ESTRUTURAS DE CONTROLE

  IF/ELSE

  if (condição) {
    bloco de código
  }
  else {
    bloco de código
  }



  SWITCH:

 switch(expressão) {

  case a:

    //bloco de código

    break;

  case b:

    //bloco de código

    break;

  default:

    //bloco de código

}

SWITCH : MESMO CÓDIGO PARA MULTIPLOS CASES

switch(expressão) {

  case a:
  case b:

    //bloco de código

    break;

  default:

    //bloco de código

}

REPETIÇÃO

for (expressao 1; expressao 2; expressao 3) {
  // bloco de código a ser executado
      expressao 1 = inicialiar a variavel contadora
      expressao 2 = condicao a ser verdadeira para execucao
      expressao 3 = alteracao da variavel
}

for (var i = 0 ; i < 5 ; i ++) {
  // Executa 5 vezes, i de 0 a 4
  
}

  while (condicao) {
    // bloco de código a ser executado
  }
Exemplo:
  var i = 0
  while (i < 5) {
    alert(i);
    i++;
  }

  do while
  Exemplo:
    var i = 0
    do {
      alert(i);
      i++;
    } while (i < 5);
*/