# O que é Clean Code ?

# O Custo de ter um código confuso

- Alteração no código, causa falhas em outras partes do mesmo código.
- Gera confusão no código.
- O aumento da confusão no código, a produtividade da equipe diminui.


Escrever um código limpo, não é apenas em termos de reduzir custos, mas também sobrevivência profissional.


# Nomes significativos

Regras para criação de nomes:

## Use nomes que revelem seu propósito
O nome de uma variável, classe ou função, deve responder as questões mais importantes, como:
  - Por que existe? 
  - O que faz? 
  - E como é usado?

Se o nome de uma variável requer um comentário, então ele não revela o seu propósito.

~~~javascript
// Tempo decorrido em dias.
const d = 0;
~~~

# Faça distinções significativas
Se os nomes precisam ser diferentes, então também deve ter significados distintos.


## Exemplo ruim
~~~javascript
function copyChars(a1, a2) {
  for (let i = 0; i < a1.length; i++) {
    a2[i] = a1[i];
  }
}
~~~

## Bom exemplo

~~~javascript
function copyChars(source, destination) {
  for (let i = 0; i < source.length; i++) {
    destination[i] = source[i];
  }
  return destination;
}
~~~


Outros exemplos:

~~~javascript
// Exemplos ruins

const moneyAmount;
const money;

const account;
const accountData;


const theMessage;
const message;

// -------- // -----

const dinheiroQuantia;
const dinheiro;

const conta;
const contaDados;

const aMensagem;
const mensagem;

// ------- // -----


// Exemplo Ruim

function getData1() { /** ... */}

function getData2() {/** ... */}

function obterDados1() { /** ... */}

function obterDados2() {/** ... */}

// Exemplo bom

function getCustomers() {/** ...*/}

function getProviders() {/** ... */}

function obterClientes() {/** ...*/}

function obterFornecedores() {/** ... */}

~~~

Faça a distinção dos nomes de uma forma que o leitor compreenda as diferenças.


# Use nomes pronunciáveis

Os seres humanos são bons com as palavras. Uma parte considerável do cérebro é respon´savel pelo conceito das palavras. As palavras precisam ser pronunciáveis.

Exemplo ruim:
~~~javascript
class DtaRcrd102 {
  constructor() {
    this.gentymdhms = Date.now();;
    this.modymdhms = Date.now();;
    this.pszqint = "102";
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


# Use nomes passíveis de busca
Utilize nomes fáceis de localizar.

# Nomes de classes
Classes e objetos devem ter nomes com substantivo(s) (que evidencia a substância, a essência.), como Customer, WikePage, Account e AddressParser. Evite palavras como Gerente, Processador, Dados ou Info.

