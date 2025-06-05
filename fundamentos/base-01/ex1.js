//Criação de métodos para classes


//É possível criar quantos métodos forem necessários para se usar em um programa

class Carro{
    constructor(cor){
        this.cor = cor;
    };

    info(){
        console.log(`A cor do meu carro é ${this.cor}`)
    }

};

let c1 = new Carro("Amarelo");

c1.cor = "vermelho"

c1.info();


export class Conta{
    constructor(nome, saldo, numero, CPF, juros){
        this.nome = nome;
        this.saldo = saldo;
        this.numero = numero;
        this.CPF = CPF;
        this.juros = juros;
    };

    calcJuros(){
        this.juros = (this.saldo/100) * 10
    };

    infosConta(){
        console.log(`Nome da conta: ${this.nome}, Saldo da conta: ${this.saldo}, Número da conta: ${this.numero}, CPF do dono da conta: ${this.CPF}, Dívida da conta: ${this.juros}`)
    };
};

let conta1 = new Conta("Marcos", 3000, 124738, 43292937-29, 0);

conta1.calcJuros();

conta1.infosConta();
