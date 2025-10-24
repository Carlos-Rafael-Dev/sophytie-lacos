// lista de produtos (6 itens)
const produtos = [
  { nome: "Laço Giulia luxo", preco: 24.90, imagem: "../assets/Catalogo/1.png" },
  { nome: "Laço Lorena", preco: 17.90, imagem: "../assets/Catalogo/2.png" },
  { nome: "Laço Brenda", preco: 19.90, imagem: "../assets/Catalogo/3.png" },
  { nome: "Laço Duda", preco: 19.90, imagem: "../assets/Catalogo/4.png" },
  { nome: "Laço Floral Luxo", preco: 24.90, imagem: "../assets/Catalogo/5.png" },
  { nome: "Laço Sofia", preco: 22.00, imagem: "../assets/Catalogo/6.png" }
];

// pegar os elementos do DOM que vamos usar
const catalogo = document.getElementById("catalogo");
const mensagem = document.getElementById("mensagem");

// criar os cartões com forEach
produtos.forEach((produto) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h2>${produto.nome}</h2>
    <p>R$ ${produto.preco.toFixed(2)}</p>
    <button>Comprar</button>
  `;

  // adicionar evento de clique ao botão
  const botao = card.querySelector("button");
  botao.addEventListener("click", () => {
    mostrarMensagem(`Você comprou ${produto.nome}!`);
  });

  // inserir cartão no catálogo
  catalogo.appendChild(card);
});

// função que mostra a mensagem temporária no canto
function mostrarMensagem(texto) {
  mensagem.textContent = texto;
  mensagem.style.display = "block";

  setTimeout(() => {
    mensagem.style.display = "none";
  }, 3000);
}