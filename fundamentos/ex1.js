//Construção de uma classe de pessoa

class Pessoa{
    //Adição de atributos
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }

    //Adição de um método para a classe
    criarApresentacao(){
        console.log(`Olá, me chamo ${this.nome} e tenho ${this.idade} anos!`)
    }

    //Adição de um método estático para a classe
    static criarPessoaAnonima(){
        return new Pessoa("Anônimo", 18)
    }
};

//Criação de instãncia a partir da classe Pessoa.

let pessoa1 = new Pessoa("Vinícius",16)
let pessoa2 = new Pessoa("Mirela",16)

//Chamada de método

console.log(pessoa1.criarApresentacao())
console.log(pessoa2.criarApresentacao())