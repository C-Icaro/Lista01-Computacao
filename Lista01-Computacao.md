# Instruções
- Faça uma cópia deste arquivo .md para um repositório próprio
- Resolva as 8 questões objetivas assinalando a alternativa correta e **justificando sua resposta.**
- Resolva as 2 questões dissertativas escrevendo no próprio arquivo .md
- Lembre-se de utilizar as estruturas de código como ``esta aqui com ` `` ou
```javascript
//esta aqui com ```
let a = "olá"
let b = 10
print(a)
```
- Resolva as questões com uso do Visual Studio Code ou ambiente similar.
- Teste seus códigos antes de trazer a resposta para cá.
- Cuidado com o uso de ChatGPT (e similares), pois entregar algo só para ganhar nota não fará você aprender. Não seja dependente da máquina!
- Ao final, publique seu arquivo lista_01.md com as respostas em seu repositório, e envie o link pela Adalove. 

# Questões objetivas
**1) Considerando a execução do código abaixo, indique a alternativa correta e justifique sua resposta.**
```javascript
console.log(x);
var x = 5;
console.log(y);
let y = 10;
```

**a) A saída será undefined seguido de erro**

R: Os valores de atribuição das variáveis estão após o seu chamamento, a saída será undefined para X por conta da variável global não estar definida, no entanto, será um erro para Y por conta de ser um variável local que só existe depois da sua inicialização (diferentemente da variável global).

b) A saída será 5 seguido de 10

c) A saída será undefined seguido de undefined

d) A saída será erro em ambas as linhas que utilizam console.log


**2) O seguinte código JavaScript tem um erro que impede sua execução correta. Analise e indique a opção que melhor corrige o problema. Justifique sua resposta.**

```javascript
function soma(a, b) {
    if (a || b === 0) {
        return "Erro: número inválido";
    }
    return a + b;
}
console.log(soma(2, 0));
```

**a) Substituir if (a || b === 0) por if (a === 0 || b === 0)**

R: O item a) é o mais correto, apesar do item d) também solucionar o problema, por conta de sua construção, entende-se que a função não aceita soma com zero, portanto, substituir a verificação do if por "a === 0 || b === 0" torna o código funcional e permite sua execução correta.

b) Substituir if (a || b === 0) por if (a === 0 && b === 0)

c) Substituir if (a || b === 0) por if (a && b === 0)

d) Remover completamente a verificação if (a || b === 0)

______
**3) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
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
```

a) O código imprime 1000.

**b) O código imprime 200.**

R: Por conta da falta de um "break;" no case "eletrônico" o algoritmo segue seu fluxo e a variável preço é redefinida no case "vestuário;", fazendo com que o código imprima 200 e não 1000 como esperado.

c) O código imprime 50.

d) O código gera um erro.

______
**4) Ao executar esse código, qual será a saída no console? Indique a alternativa correta e justifique sua resposta.**
```javascript
let numeros = [1, 2, 3, 4, 5];

let resultado = numeros.map(x => x * 2).filter(x => x > 5).reduce((a, b) => a + b, 0);

console.log(resultado);
```
a) 0

b) 6

c) 18

**d) 24**

R: Explicação dos métodos:
.map percorre todo o array ou lista e aplica uma função, no caso, multiplica todos os valores por 2;
.filter filtra o lista de acordo com o parâmetro informado e cria um novo array ou lista com os valores verdadeiros, no caso numerosFiltrados = [6, 8, 10];
.reduce reduz os itens de um vetor em um vetor único, aplicando o parâmetro de redução temos: Redução01 [14, 10], e redução02 [24].
Portanto, o resultado final no console.log após a aplicação de todos os métodos é o número 24.
______
**5) Qual será o conteúdo do array lista após a execução do código? Indique a alternativa correta e justifique sua resposta.**

```javascript
let lista = ["banana", "maçã", "uva", "laranja"];
lista.splice(1, 2, "abacaxi", "manga");
console.log(lista);
```

a) ["banana", "maçã", "uva", "abacaxi", "manga", "laranja"]

b) ["banana", "abacaxi", "manga"]

**c) ["banana", "abacaxi", "manga", "laranja"]**

R: O método .splice permite alterar o conteúdo de uma posição específica de um array, removendo ou substituindo elementos. No código, é informado para o método 2 posições (1 e 2) e os respectivos elementos a serem implementados nessas posições, portanto, "abacaxi" substituiu "maçã" na primeira posição e "manga" substituiu "uva" no segundo elemento.

d) ["banana", "maçã", "uva", "abacaxi", "manga"]
______
**6) Abaixo há duas afirmações sobre herança em JavaScript. Indique a alternativa correta e justifique sua resposta**

I. A herança é utilizada para compartilhar métodos e propriedades entre classes em JavaScript, permitindo que uma classe herde os métodos de outra sem a necessidade de repetir código.  
II. Em JavaScript, a herança é implementada através da palavra-chave `extends`.


**a) As duas afirmações são verdadeiras, e a segunda justifica a primeira.**

R: A primeira afirmação é o conceito de herança, a segunda afirmação explica a forma (mecanismo) de implementação herança, justificando assim a primeira.

b) As duas afirmações são verdadeiras, mas a segunda não justifica a primeira.

c) A primeira afirmação é verdadeira, e a segunda é falsa.

d) A primeira afirmação é falsa, e a segunda é verdadeira.
______
**7) Dado o seguinte código. Indique a alternativa correta e justifique sua resposta.**

```javascript
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
```


I) A classe Funcionario herda de Pessoa e pode acessar os atributos nome e idade diretamente. --> Correta 
II) O método `apresentar()` da classe Funcionario sobrepõe o método `apresentar()` da classe Pessoa, mas chama o método da classe pai usando `super`.  --> Correto
III) O código não funciona corretamente, pois Funcionario não pode herdar de Pessoa como uma classe, já que o JavaScript não suporta herança de classes. --> Incorreto

Quais das seguintes afirmações são verdadeiras sobre o código acima?

**a) I e II são verdadeiras.**

R: As duas primeiras afirmativas estão corretas, isso se justifica com a adição de uma instância/objeto no código (informação de nome, idade e salário) e chamamento do método apresentar. Desse modo verificamos a saida:
"
Olá, meu nome é Carlos e tenho 30 anos.
Meu salário é R$ 5000.
"
Sabendo que nome e idade são definidos na classe Pessoa e que as informações estão sendo apresentadas pela classe Funcionario, temos certeza de que a herança está corretamente implementada.

b) I, II e III são verdadeiras.

c) Apenas II é verdadeira.

d) Apenas I é verdadeira.

______

**8) Analise as afirmações a seguir. Indique a alternativa correta e justifique sua resposta.**

**Asserção:** O conceito de polimorfismo em Programação Orientada a Objetos permite que objetos de diferentes tipos respondam à mesma mensagem de maneiras diferentes.  
**Razão:** Em JavaScript, o polimorfismo pode ser implementado utilizando o método de sobrecarga de métodos em uma classe.

a) A asserção é falsa e a razão é verdadeira.

**b) A asserção é verdadeira e a razão é falsa.**

R: O conceito de polimorfismo permite que um mesmo método possa realizar ações diferentes, permitindo que ela tenha comportamentos específicos. A razão é falsa pois os métodos em JS não podem ter sobrecarga, ou seja, vários comportamentos ao mesmo tempo (só pode ter um comportamento por vez). No caso, o polimorfismo é possivel por conta de sobrescrita de métodos, ou seja, reescrita do comportamento do método.

c) A asserção é verdadeira e a razão é verdadeira, mas a razão não explica a asserção.

d) A asserção é verdadeira e a razão é verdadeira, e a razão explica a asserção.

______

# Questões dissertativas
9) O seguinte código deve retornar a soma do dobro dos números de um array, mas contém erros. Identifique os problema e corrija o código para que funcione corretamente. Adicione comentários ao código explicado sua solução para cada problema.

```javascript
function somaArray(numeros) {

    for (i = 0; i < numeros.size; i++) {
        soma = 2*numeros[i];
    }
    return soma;
}
console.log(somaArray([1, 2, 3, 4]));
```

R:
```javascript
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
```
______
10) Crie um exemplo prático no qual você tenha duas classes:

- Uma classe `Produto` com atributos `nome` e `preco`, e um método `calcularDesconto()` que aplica um desconto fixo de 10% no preço do produto.
- Uma classe `Livro` que herda de `Produto` e modifica o método `calcularDesconto()`, aplicando um desconto de 20% no preço dos livros.

Explique como funciona a herança nesse contexto e como você implementaria a modificação do método na classe `Livro`.

R:
```javascript
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
```
