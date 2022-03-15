function calculadora(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos}
    anos de idade.`;
}

const pessoa1 = {
    nome: "Maria",
    idade: 40,
}
const pessoa2 = {
    nome: "Gabi",
    idade: 26,
}
const pessoa3 = {
    nome: "Mikael",
    idade: 27,
}
const pessoa4 = {
    nome: "Naonao",
    idade: 1,
};

console.log(calculadora.call(pessoa2, 30));