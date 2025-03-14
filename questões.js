
//1ºQuestão:
console.log(x);
var x = 5;
console.log(y);
var y = 10;

//2ºQuestão
function soma(a, b) {
    if (a === 0 || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));

//3ºQuestão
function calcularPreco(tipo) {
    let preco;

    switch(tipo) {
        case "eletrônico":
            preco = 1000;
        case "vestuário":
            preco = 200;
            break;
        case "alimento":
            preco = 50;
            break;
        default:
            preco = 0;
    }

    return preco;
}

console.log(calcularPreco("eletrônico"));

//4ºQuestão
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);

//5ºQuestão
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);

//6ºQuestão

//Sem código

//7ºQuestão
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    apresentar() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  class Funcionario extends Pessoa {
    constructor(nome, idade, salario) {
      super(nome, idade);
      this.salario = salario;
    }
  
    apresentar() {
      super.apresentar();
      console.log(`Meu salário é R$ ${this.salario}.`);
    }
  }

const funcionario = new Funcionario("Carlos", 30, 5000);
funcionario.apresentar();

//8ºQuestão

//Sem código

//9ºQuestão
function somaArray(numeros) {
    let soma = 0;//Adição e definição da variável local 
    console.log("Tamanho do array numeros:", numeros.length);//Adição de um console log para melhor visualização do código

    for (i = 0; i < numeros.length; i++) {//Mudança de "numeros.size" para "numeros.length", dessa forma o comprimento do array é lido corretamente. 
    // Anteriormente não funcionada por conta de "numeros.size" fazer o chamamento de uma função/método enquanto "numeros.length" faz o chamamento de uma propriedade
        soma = soma + 2*numeros[i];//Substituição de "soma = 2*numeros[i]" por "soma = soma + 2*numeros[i]"
    }
    return soma;//Retorno da função
}
console.log("Valor da soma do dobro do array:", somaArray([1, 2, 3, 4]));//Console log para exibir o retorno da função 

//10ºQuestão
class Produto{//Classe pai 
    constructor(nome, preço){//Constructor pai
        this.nome = nome;//Definição de propriedades/atributos
        this.preço = preço;
    }

    calcularDesconto(){//Método calcular desconto pai
        this.preço = this.preço * 0.9;//Linha para calcular e aplicar o desconto
        console.log(`Preço do livro com 10% de desconto R$ ${this.preço}.`);//Console log de visualização e controle
    }
}

class Livro extends Produto{//Classe filha
    constructor(nome, preço){//Constructor filho
        super(nome, preço);
    }

    calcularDesconto(){//Método calcular desconto filho
        this.preço = this.preço * 0.8;//Linha para calcular e aplicar o desconto
        console.log(`Preço do livro com 20% de desconto R$ ${this.preço}.`);//Console log de visualização e controle
    }
}

const L1984 = new Livro("1984", 100);//Criação de um objeto na classe filha
L1984.calcularDesconto();//Chamamento do método calcular desconto filho

/*
Explicação:
A classe Produto é criada e cria as propriedades nome e preço, além do método calcularDesconto(). A classe Livro extende a classe Produto e herda seus atributos e métodos. 
A palavra chave super no classe Livro chama o constructor da classe pai e solicita acesso aos atributos elencados (herança).
A modificação do método ocorre por sobrescrita de método, ou seja, estamos criando um método igual mas com comportamento diferente, estamos aplicando o polimorfismo.
Podemos ter certeza que a sobrescrita é responsável pela modificação do método quando retiramos essa modificação da classe Livro. Sem nenhuma sobrescrita é chamado o método pai
presente na classe Produto, tendo como retorno no console log o valor R$90 (referente à 10% do valor do produto).
*/
