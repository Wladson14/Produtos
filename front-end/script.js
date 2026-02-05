const API = "http://localhost:3000/produtos";

const form = document.getElementById("formProduto")
const lista = document.getElementById("listaProdutos")

const nome = document.getElementById("nome");
const valor = document.getElementById("valor");
const estoque = document.getElementById("estoque");

form.addEventListener("submit", cadastrar)
document.addEventListener("DOMContentLoaded", carregarProdutos)

async function carregarProdutos() {
    const res = await fetch(API);
    const produtos = await res.json();


lista.innerHTML = ""

produtos.forEach(p => {
    lista.innerHTML += `
         <tr>
        <td>${p.nome}</td>
        <td>${p.valor}</td>
        <td>${p.estoque}</td>
        <td>
          <button onclick="excluir(${p.id})" class="delete">Excluir</button>
        </td>
      </tr>
    `;
});
}

async function cadastrar(e) {
    e.preventDefault();

    const produto = {
        nome: nome.value,
        valor: parseFloat(valor.value.replace(",",".")),
        estoque: parseInt(estoque.value)
    }

    await fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(produto)
    });

    form.reset();
    carregarProdutos()
}

async function excluir(id) {
    await fetch(`${API}/${id}`, {
        method:"DELETE"
    });

    carregarProdutos();
   

}
 window.excluir = excluir;
