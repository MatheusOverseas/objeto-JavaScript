const pessoa = {
  nome: 'Rebeca',
  idade: 4,
  peso: 15
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
  console.log(`${e[0]}: ${e[1]}`)
});