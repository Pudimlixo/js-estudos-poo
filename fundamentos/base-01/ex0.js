//Criação e conceito de classes com método constructor e instanciamento de objetos

//Criação de novo objeto
class Carro{
    constructor(){
        console.log("Teste de classe");
    }
}

//Criação de nova instância a partir da classe Carro

let c1 = new Carro();

//Criação de atributos para uma classe e formas de adicionar eles

//1° Diretamente pela classe

class Pessoa{
    nome = "Vinícius";
    idade = 16;
};

//2° Adição de atributos pelo método construtor da classe

class Pessoa2{
    constructor(){
        this.nome = "Vinícius";
        this.idade = 16;
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    };
};

let p1 = new Pessoa2()

//Valores diferentes na instânciação

class Pessoa3{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    };
};

let p2 = new Pessoa3("Mirela", 16);
let p4 = new Pessoa3("Rodrigo", 17);