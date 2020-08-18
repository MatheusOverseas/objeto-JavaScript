// usando a notação literal
const obj1 = {

}

//Object em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// função construtoras
function Produto(nome, preco, desc) {
  this.nome = nome
  this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2999.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto());

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalaraio() {
      return (salarioBase / 30) * (30 - faltas)
    }
  }
}
const f1 = criarFuncionario('joão', 7980, 4)
const f2 = criarFuncionario('Maria', 11480, 1)
console.log(f1.getSalaraio(), f2.getSalaraio());

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha);

