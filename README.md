# Clean Code

Um código ruim pode funcionar, mas se ele não for limpo, pode acabar com um projeto de software ou até mesmo uma empresa.

# Roteiro

1. [O que é Clean Code?](#o-que-é-clean-code)
2. [O custo de ter um código ruim](#o-custo-de-ter-um-código-ruim)
3. [Nomes significativos](#nomes-significativos)
4. [Use nomes que revelem seu propósito](#use-nomes-que-revelem-seu-propósito)
5. [Faça distinções significativas](#faça-distinções-significativas)
6. [Use nomes pronunciáveis](#faça-distinções-significativas)
7. [Use nomes passíveis de busca](#use-nomes-passíveis-de-busca)
8. [Evite Mapeamento Mental](#evite-mapeamento-mental)
9. [Não adicione contextos desnecessários](#não-adicione-contextos-desnecessários)
10. [Nomes de classes](#nomes-de-classes)

# O que é Clean Code?

Segundo Bjarne Stroustrup, criador do C++ e autor do livro A linguagem de programação C++, código limpo é: "Gosto do meu código elegante e eficiente. A lógica deve ser direta para dificultar
o encobrimento de bugs, as dependências minimas para facilitar a manutençaõ, o tratamento de erro completo de acordo com uma estratégia clara e o desempenho próximo do mais eficiente de modo a não incitar as pessoas a tornarem o código confuso com otimizações sorrateiras. O código limpo faz bem apenas uma coisa."

Segundo Grady Booch, autor do livro Object Oriented Analysis and Design with Applications, código limpo é: "Um código limpo é simples e direto. Ele é tão bem legível quanto uma prosa bem escrita. Ele jamais torna confuso o objetivo do desenvolvedor, em vez disso, ele está repleto de abstrações claras e linhas de controle objetivas."

# O custo de ter um código ruim

Se você é programador(a) há mais de dois anos, provavelmente o código confuso de outra pessoa já fez com que você trabalhasse mais lentamente e provavelmente seu prórpio código já lhe trouxe problemas.

- Alteração no código, causa falhas em outras partes do mesmo código.
- Conforme a confusão do código aumenta, a produtividade da equipe diminui.
- Aumenta o custo para manter um projeto com código ruim. (Conforme o código fica difícil,
mas pessoas são contratadas para ajudar, porém nem sempre resolve)

Escrever um código limpo, não é apenas em termos de reduzir custos, mas também sobrevivência profissional

# Nomes significativos

Há nomes por todo os lados em um software. Nomeamos nossas variáveis, funções, parâmetros, classes e pacotes, assim como os arquivos-fonte e os diretórios que os possui. A seguir estão algumas regras simples para a criação de bons nomes.

# **Use nomes que revelem seu propósito**

O nome de uma variável, classe ou função, deve responder as questões mais importantes, 
como:

- Por que existe?
- O que faz?
- E como é usado?

Se o nome de uma variável requer um comentário, então ele não revela o seu propósito.


## Exemplos em Javascript

Mau exemplo:

~~~javascript
// Tempo decorrido em dias.
const d = 0;
~~~

Bom exemplo:

~~~javascript
const tempoDecorridoEmDias = 0;
const elapseTimeInDays = 0;

const diasDesdeACriacao = 0;
const daysSinceCreation = 0;

const diasDesdeAModification = 0;
const daysSinceModification = 0;

const idadeDoArquivoEmDias = 0;
const fileAgeInDays = 0;
~~~

Mau exemplo:

Variável duração que recebe o valor de 25. Mas as seguintes questões não são respondidas:

- Duração de que?
- Qual é a métrica? é em minutos? segundos?

~~~javascript
const duration = 25;
~~~

Bom exemplo:

~~~javascript
const durationInMinutes = 25;
~~~

# **Faça distinções significativas**

Se os nomes precisam ser diferentes, então também devem ter significados distintos. Utilize sempre nomes nos quais quem estiver lendo seu código possa diferenciar seu significado de outros possíveis nomes.

## Exemplos em Javascript

Mau exemplo:

~~~javascript

function copy(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}
~~~

Bom exemplo:

~~~javascript
function copyChars(source, destination) {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
}
~~~

Mau exemplo:

~~~javascript

function getData1() {
  /** ... */
}

function getData2() {
  /** ... */
}

function obterDados1() { 
  /** ... */
}

function obterDados2() {
  /** ... */
}
~~~

Bom exemplo:

~~~javascript
function getCustomers() {
  /** ... */
}

function getProviders() {
  /** ... */
}

function obterClientes() {
  /** ...*/
}

function obterFornecedores() {
  /** ... */
}
~~~

Mau exemplo:

~~~javascript
const d = 5.04;
const salario1 = 15122.10;
const salario2 = salario1 / d;
~~~

Bom exemplo:

~~~javascript
const valorDoDolarEmReal = 5.04;
const salarioEmReais = 15122.10;
const salarioEmDolar = salarioEmReais  / valorDoDolarEmReal;
~~~

# **Use nomes pronunciáveis**

Os seres humanos são bons com as palavras. Uma parte considerável do cérebro é respon´savel pelo conceito das palavras. As palavras precisam ser pronunciáveis.

## Exemplos em Javascript

Mau exemplo:

~~~javascript
class DtaRcrd102 {
  constructor() {
    this.gentymdhms = Date.now();;
    this.modymdhms = Date.now();;
    this.pkint = "102";
  }
  /** ... */
}
~~~

Bom exemplo:

~~~javascript
class Customer {
  constructor() {
    this.generationTimestamp = Date.now();
    this.modificationTimestamp = Date.now();
    this.recordId = "102";
  }
  /** ... */
}
~~~

# **Use nomes passíveis de busca**

Utilize nomes fáceis de localizar. Nós iremos ler mais código que escrever. É importante que o código que escrevemos seja legível e pesquisável. Não dando nomes em variáveis que sejam significativos para entender nosso programa, machucamos nossos leitores. Torne seus nomes pesquisáveis. Ferramentas como buddy.js e ESLint podem ajudar a identificar constantes sem nome.

Mau exemplo:

~~~javascript
// Atualiza o client após 86400000 milissegundos
setTimeout(updateClient, 86400000);
~~~

Bom exemplo:

~~~javascript
const MILLISECONDS_IN_A_DAY = 86400000;
setTimeout(updateClient, MILLISECONDS_IN_A_DAY);
~~~

# **Evite Mapeamento Mental**

Explicito é melhor que implícito.

## Exemplos em Javascript

Mau exemplo:

~~~jsx
const n = [0, 1, 2, 3];
let t = n.reduce((*a*, *v*) => a + v, 0);
~~~

Bom exemplo:

~~~jsx
const numeros = [0, 1, 2, 3];
let total = numeros.reduce((*acumulador*, *valorAtual*) => acumulador + valorAtual, 0);
~~~

# **Não adicione contextos desnecessários**

Se o nome de sua classe/objeto já lhe diz alguma coisa, não as repita nos nomes de suas variáveis.

## Exemplos em Javascript

Mau exemplo:

~~~javascript
const Car = {
  carMake: 'Honda',
  carModel: 'Accord',
  carColor: 'Blue'
};

function paintCar(car) {
  car.carColor = 'Red';
}
~~~

Bom exemplo:
~~~javascript
const Car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
};

function paintCar(car) {
  car.color = 'Red';
}
~~~

# **Nomes de classes**

Classes e objetos devem ter nomes com substantivo(s) (que evidencia a substância, a essência.), como Customer, WikePage, Account e AddressParser. Evite palavras como Gerente, Processador, Dados ou Info.

# **Selecione uma palavra por conceito**

Escolha uma palavra para cada conceito abstrato e fique com ela.

## Exemplos em Javascript

Mau exemplo:

~~~javascript
// Exemplos ruins

const fetchClient;
const retrieveClient;
const getClient;

class ClientManager {
	/** ... */
}

class ClientController {
  /** ... */
}
~~~

Bom exemplo:

~~~javascript
const getClient;

class ClientController {
  /** ... */
}
~~~