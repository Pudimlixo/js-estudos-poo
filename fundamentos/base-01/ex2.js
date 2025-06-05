//Getters e setters em classes

//Métodos set: São métodos usados para quando se deseja atribuir valor a um atributo de um objeto

//Métodos get: Métodos usados para capturar dados de atributos de objetos

//Exercício: Criação de uma calculadora simples com esses conceitos

class Calculadora{
    constructor(x, y){
        this.x = x;
        this.y = y;
    };

    //Set usado para definir valores nos parâmetros que serão passados no instanciamento

    setValues(newX, newY){
        this.x = newX;
        this.y = newY;
    };

    //Get usado para pegar valores passados e colocar nas operações

    getValues(){
        return this.x, this.y;
    };

    getSoma(){
        return this.x+this.y
    };

    getSub(){
        return this.x-this.y
    };

    getMult(){
        return this.x*this.y
    };

    getDiv(){
        if(this.y === 0 || this.x === 0){
            window.alert(`Não é possível fazer essa divisão, resultado indeterminado ou indefinido`)
        }
        return this.x/this.y
    };

};

let calculo1 = new Calculadora(4,6);
console.log(`Cálculo de soma: ${calculo1.getSoma()}`);

//Cálculo setando os valores do objeto em função separada do constructor

calculo1.setValues(5,0)
console.log(`Cálculo da divisão: ${calculo1.getDiv()}`)




