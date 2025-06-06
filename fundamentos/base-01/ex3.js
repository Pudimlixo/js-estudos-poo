//Método static em classes

//Método dinâmico: Função dentro de classes que só são chamadas quando se têm objetos criados, porquê a lógica da função depende do objeto individualmente.

//Método estático: Função que não depende do instanciamento de um objeto para ser chamada, ela pode ser usada para todos os objetos e não tem acesso aos atributos da classe

class Cliente{
    constructor(nome, cpf, tel, status, saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.tel = tel;
        this.status = status;
        this.saldo = saldo;
    };

    info(){
        console.log(`
            Nome: ${this.nome}
            CPF: ${this.cpf}
            Telefone: ${this.tel}
            Status: ${this.status}
            Saldo: ${this.saldo}`)

            if(this.status == "Ruim"){
            console.log(`Sem promoção`)
        }
    };

};

class Produto{
    static promocao = true
    constructor(nome, preco, categoria){
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    };

    setPromocao(x){
        if(x == "Bom"){
            Produto.promocao = true;
        } else if(x == "Ruim"){
            Produto.promocao = false;
        };
    };

    getPromocao(){
        return Produto.promocao;
    };

    info(x){
        console.log(`
            Nome: ${this.nome}
            Preço: ${this.preco}
            Categoria: ${this.categoria}
            Promoção: ${Produto.promocao ? (x/100)*50: "Nenhuma promoção"}`)
    };

};

let produto1 = new Produto("Máquina de lavar", 3200, "Lavanderia")

let cliente1 = new Cliente("Will", "1234567-89", "(11)4567-0934", "Bom", 3450);
cliente1.info();
produto1.setPromocao(cliente1.status);
produto1.info(cliente1.saldo);

let cliente2 = new Cliente("Mendel", "9876543-21", "(11)9987-9827", "Ruim", 3450);
cliente2.info();
produto1.setPromocao(cliente2.status);
produto1.info(cliente2.saldo);


