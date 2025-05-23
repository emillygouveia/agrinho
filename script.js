// Array para armazenar os itens do carrinho
let carrinho = [];

// Função para adicionar o produto ao carrinho
function adicionarCarrinho(nome, preco) {
  // Adiciona o produto ao carrinho
  carrinho.push({ nome, preco });
  
  // Atualiza o contador de itens no carrinho
  atualizarCarrinho();
  alert(nome + " foi adicionado ao seu carrinho!");
}

// Função para atualizar o contador de itens no carrinho
function atualizarCarrinho() {
  const contadorCarrinho = document.getElementById('contador-carrinho');
  contadorCarrinho.innerText = carrinho.length;
}

// Função para mostrar o conteúdo do carrinho
function mostrarCarrinho() {
  if (carrinho.length > 0) {
    let mensagemCarrinho = "Itens no seu carrinho:\n";
    carrinho.forEach(item => {
      mensagemCarrinho += `${item.nome} - R$ ${item.preco.toFixed(2)}\n`;
    });
    alert(mensagemCarrinho);
  } else {
    alert("Seu carrinho está vazio!");
  }
}