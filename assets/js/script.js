
// Aqui estou criando a variavel para que tudo funcione, dando a função de que quando eu aperte o botão cifra ele possa aparecer o incremento.
const select = document.querySelector('select')
select.addEventListener('change', () => {
  $('#mensagem').val('')
$('#saida').text('')
// Aqui é de cifra de Cesar onde clica e aparece o incremento que é o número de chaves
    if (select.options[select.selectedIndex].value == 'cifraCesar'){
    $('#sele').append('<input id="incremento" type="number" min="1" max="25"></input>')
$('#passos').text('Selecione sua chave:')
    }
    // Aqui caso o botão selecionado seja o base64 ele remove o incremento e a escrita que vai junto.
    else if(select.options[select.selectedIndex].value == 'base64'){
$('#incremento').remove()
$('#passos').text('')
    }

})


// Aqui foi criada com o Jquery uma arrowfunction para que quando clique em alguns dos radios mude também o que está no botão.

$("#codificar").change(() => {     
    $("#butCodDec").text("Codificar");   });

$("#decodificar").change(() => {     
    $("#butCodDec").text("Decodificar");   
    });

let codificarBtn = document.getElementById("codificar");

// Aqui estou atribuindo ao meu id do botão a função de que quando clicado ele faça algo, que foi decidido no código mais abaixo.
$('#butCodDec').on('click', function() {

// Aqui estou criando variaveis para utiliza-lás para codificar e decodificar tanto base64 quanto Cifra de César. Utilizando novamente Jquery.
let incremento = Number($('#incremento').val())
let entrada = $('#mensagem').val()
let saida = $('#saida')
let tipoOp = $('input[name=tipoOP]:checked').val()
let selectCripto = $('#metodo option:selected').val()


// Esse bloco está sendo utilizado para codificar e decoficar a partir de que se o botão selecionado for 
// o de valor cifraCesar por exemplo, ele vai mostrar o incremento, o usuário vai escolher o número de chaves e codificar ou decodificar 
// a mensagem, o código será executado pois ele entende que uma opção foi checada.

if(tipoOp === 'Codificar'){
  console.log('codifica')
  if(selectCripto === 'cifraCesar'){
    console.log('cifra')
    saida.text(encodeCifra(entrada,incremento))
  }else{
    console.log('base')
    saida.text(encodeBase64(entrada))
  }

  }else{
    if(selectCripto === 'cifraCesar'){
      saida.text(decodeCifra(entrada,incremento))
    }else{
      saida.text(decodeBase64(entrada))
    }
}


});

//Aqui é a função de codificar a base64 através do btoa() e  decodificar através do atob().
const encodeBase64 = (texto) => btoa(texto)

const decodeBase64 = (texto) => atob(texto)

// $('#saida').text(decodeBase64(mensagem))

// Aqui é a função para cifrar e decifrar Cifra de César.

// Ela primeiro pega o texto digitado na mensagem e o transforma em cifra utilizando a tabela ASCII.
const encodeCifra = (texto, chave) => {
    let textoCifrado = "";
    for (let i = 0; i < texto.length; i++) {
      let ascii = texto.charCodeAt(i)
      ascii += chave
      textoCifrado += String.fromCharCode(ascii)
    }
    return textoCifrado;
  }

  // Depois a decodifica a transformando na mensagem digitada anteriormente.
const decodeCifra = (texto, chave) => {
    let textoDecifrado = "";
    for (let i = 0; i < texto.length; i++) {
    let ascii = texto.charCodeAt(i)
    ascii -= chave
    textoDecifrado += String.fromCharCode(ascii)        
    }
    return textoDecifrado;
}