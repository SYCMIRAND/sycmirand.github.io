const produtos = [
    {nome: 'coxinha', preco: 4.0},
    {nome: 'pastel', preco: 3.0},
    {nome: 'suco', preco: 2.0}
];

let exibirProduto = (p,i) => {
    console.log(i + '. ' +p.nome + ' - R$ ' + p.preco.toFixed(2));
};

console.log('todos os produtos');
produtos.forEach(exibirProduto);

console.log('\nprodutos de menos de R$ 3,00');
produtos.filter(p => p.preco <= 3).forEach(exibirProduto);

console.log('\naumento de 20% em todos os produtos');
produtos.map(p => {
    return {
        nome: p.nome,
        preco: p.preco *= 1.2
    }
}).forEach(exibirProduto);