let prato;
let bebida;
let sobremesa;

function selecionarPrato(clicado) {
  const borda = document.querySelector("#prato .border");
  const icon = document.querySelector("#prato .escondido")
  
  if (borda !== null) {
    borda.classList.remove("border");
    icon.classList.add('escondido')
  }
  
  icon.classList.add("escondido")
  clicado.classList.add("border");
  

  prato = clicado;
  
  apareceIcon()
  liberaBotao();

}

function apareceIcon(){
  const icon = document.querySelector("#prato .escondido");
if(icon !==null){
  icon.classList.remove('escondido')
}

icon.classList.add("escondido")
}

function selecionarBebida(clicado) {
  const borda = document.querySelector("#bebida .border");
  
  if (borda !== null) {
    borda.classList.remove("border");
  }
  
  clicado.classList.add("border");
  
  bebida = clicado;

//console.log (prato,bebida,sobremesa)


liberaBotao();
}

function selecionarSobremesa(clicado) {
  const borda = document.querySelector("#sobremesa .border");

  if (borda !== null) {
    borda.classList.remove("border");
  }

  clicado.classList.add("border");
  sobremesa = clicado;

  liberaBotao();

//console.log (prato,bebida,sobremesa)

}

function liberaBotao() {
  if (prato !== undefined && bebida !== undefined && sobremesa !== undefined) {
    const botaoLiberar = (document.querySelector("#botao").disabled = false);
    const button=document.querySelector("section #botao")
    button.classList.remove('button-desativado');
    button.classList.add('button-ativado')
    button.innerHTML='Fechar pedido'
    
  }  
}


function finalizarPedido(clicou) {
  let pratoSelecionado = document.querySelector(
    "#prato .border .itemSelecionado"
  ).innerHTML;
  console.log(pratoSelecionado.innerHTML);

  let pratoPreco = document.querySelector("#prato .border .preco");
  let pratoPreco1 = Number(
    pratoPreco.innerHTML.replace("R$ ", "").replace(",", ".")
  );

  let bebidaSelecionado = document.querySelector(
    "#bebida .border .itemSelecionado"
  ).innerHTML;
  console.log(bebidaSelecionado.innerHTML);

  let bebidaPreco = document.querySelector("#bebida .border .preco");
  let bebidaPreco1 = Number(
    bebidaPreco.innerHTML.replace("R$ ", "").replace(",", ".")
  );

  let sobremesaSelecionado = document.querySelector(
    "#sobremesa .border .itemSelecionado"
  ).innerHTML;
  console.log(sobremesaSelecionado.innerHTML);

  let sobremesaPreco = document.querySelector("#sobremesa .border .preco");
  let sobremesaPreco1 = Number(
    sobremesaPreco.innerHTML.replace("R$ ", "").replace(",", ".")
  );
  const somaDosPedidos = pratoPreco1 + bebidaPreco1 + sobremesaPreco1;
  const valorTotal = somaDosPedidos.toFixed(2);
  console.log(valorTotal);

  let cliente =prompt('Estamos quase lá, escreva seu nome')
  let endereçoDeEntrega = prompt('Agora só escrever onde quer receber essas gostosuras')


  let mensagem =`Olá, gostaria de fazer o pedido:

  - Prato: ${pratoSelecionado}

  - Bebida: ${bebidaSelecionado}

  - Sobremesa: ${sobremesaSelecionado}

  Total: ${valorTotal}

  Nome:${cliente}
  Rua: ${endereçoDeEntrega}`



  window.open( `https://wa.me/5511976135505?text=${mensagem}`);
}

