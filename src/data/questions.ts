export interface Question {
  id: number;
  question: string;
  explanation: string;
  example: string;
  category: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "O que é Closure em JavaScript?",
    explanation: "Closure é quando uma função 'lembra' das variáveis do escopo onde foi criada, mesmo depois que esse escopo terminou de executar. É uma função que tem acesso ao escopo externo mesmo após a função externa ter retornado.",
    example: `function criarContador() {
  let contador = 0;
  
  return function() {
    contador++;
    return contador;
  }
}

const meuContador = criarContador();
console.log(meuContador()); // 1
console.log(meuContador()); // 2
console.log(meuContador()); // 3`,
    category: "Fundamentals"
  },
  {
    id: 2,
    question: "Qual a diferença entre var, let e const?",
    explanation: "var tem escopo de função e sofre hoisting; let e const têm escopo de bloco. const não permite reatribuição (mas objetos/arrays podem ser mutados). let permite reatribuição.",
    example: `// var - escopo de função
function exemploVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - funciona!
}

// let - escopo de bloco
function exemploLet() {
  if (true) {
    let y = 10;
  }
  console.log(y); // Erro! y não existe aqui
}

// const - não permite reatribuição
const PI = 3.14;
PI = 3; // Erro!

const pessoa = { nome: "Ana" };
pessoa.nome = "João"; // OK - mutação é permitida`,
    category: "Fundamentals"
  },
  {
    id: 3,
    question: "O que é o Event Loop?",
    explanation: "O Event Loop é o mecanismo que permite ao JavaScript executar código assíncrono apesar de ser single-threaded. Ele monitora a call stack e a callback queue, movendo callbacks para a stack quando ela está vazia.",
    example: `console.log('1');

setTimeout(() => {
  console.log('2');
}, 0);

Promise.resolve().then(() => {
  console.log('3');
});

console.log('4');

// Output: 1, 4, 3, 2
// Promises (microtasks) têm prioridade sobre setTimeout (macrotasks)`,
    category: "Async"
  },
  {
    id: 4,
    question: "O que é 'this' em JavaScript?",
    explanation: "'this' refere-se ao contexto de execução atual. Seu valor depende de como a função é chamada: em métodos de objeto aponta para o objeto, em funções normais aponta para window/global (ou undefined em strict mode), em arrow functions herda do escopo pai.",
    example: `const pessoa = {
  nome: 'Maria',
  saudar: function() {
    console.log('Olá, ' + this.nome);
  },
  saudarArrow: () => {
    console.log('Olá, ' + this.nome); // this não é 'pessoa'!
  }
};

pessoa.saudar(); // "Olá, Maria"
pessoa.saudarArrow(); // "Olá, undefined"

const saudar = pessoa.saudar;
saudar(); // "Olá, undefined" - perdeu o contexto`,
    category: "Fundamentals"
  },
  {
    id: 5,
    question: "O que são Promises e async/await?",
    explanation: "Promises representam valores que estarão disponíveis no futuro. Possuem 3 estados: pending, fulfilled, rejected. Async/await é syntactic sugar sobre Promises que permite escrever código assíncrono de forma mais legível.",
    example: `// Promise
function buscarUsuario(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, nome: 'João' });
      } else {
        reject('ID inválido');
      }
    }, 1000);
  });
}

// Usando .then
buscarUsuario(1)
  .then(usuario => console.log(usuario))
  .catch(erro => console.error(erro));

// Usando async/await
async function getUsuario() {
  try {
    const usuario = await buscarUsuario(1);
    console.log(usuario);
  } catch (erro) {
    console.error(erro);
  }
}`,
    category: "Async"
  },
  {
    id: 6,
    question: "O que é Hoisting?",
    explanation: "Hoisting é o comportamento do JavaScript de mover declarações para o topo do escopo antes da execução. Variáveis declaradas com var e declarações de função são 'elevadas', mas apenas a declaração, não a inicialização.",
    example: `// Isso funciona por causa do hoisting
console.log(x); // undefined (não erro!)
var x = 5;

// É interpretado como:
var x;
console.log(x);
x = 5;

// Funções também sofrem hoisting
minhaFuncao(); // Funciona!

function minhaFuncao() {
  console.log('Olá!');
}

// let e const NÃO funcionam assim
console.log(y); // ReferenceError!
let y = 10;`,
    category: "Fundamentals"
  },
  {
    id: 7,
    question: "Qual a diferença entre == e ===?",
    explanation: "== (igualdade abstrata) faz coerção de tipo antes de comparar. === (igualdade estrita) compara valor E tipo sem conversão. Sempre prefira === para evitar bugs.",
    example: `// == faz conversão de tipo
console.log(5 == '5');     // true
console.log(0 == false);   // true
console.log(null == undefined); // true

// === compara tipo e valor
console.log(5 === '5');    // false
console.log(0 === false);  // false
console.log(null === undefined); // false

// Casos problemáticos com ==
console.log('' == 0);      // true
console.log([] == false);  // true
console.log([1] == 1);     // true`,
    category: "Fundamentals"
  },
  {
    id: 8,
    question: "O que são Arrow Functions?",
    explanation: "Arrow functions são uma sintaxe mais concisa para escrever funções. Diferenças principais: não têm seu próprio 'this' (herdam do escopo pai), não têm 'arguments', não podem ser usadas como construtores.",
    example: `// Sintaxe tradicional
function soma(a, b) {
  return a + b;
}

// Arrow function
const somaArrow = (a, b) => a + b;

// Com um parâmetro, parênteses são opcionais
const dobro = x => x * 2;

// Diferença do 'this'
const objeto = {
  valor: 10,
  metodoTradicional: function() {
    setTimeout(function() {
      console.log(this.valor); // undefined
    }, 100);
  },
  metodoArrow: function() {
    setTimeout(() => {
      console.log(this.valor); // 10
    }, 100);
  }
};`,
    category: "ES6+"
  },
  {
    id: 9,
    question: "O que é Destructuring?",
    explanation: "Destructuring permite extrair valores de arrays ou propriedades de objetos em variáveis distintas de forma concisa. É muito útil para trabalhar com dados complexos.",
    example: `// Object destructuring
const pessoa = { 
  nome: 'Ana', 
  idade: 25, 
  cidade: 'São Paulo' 
};

const { nome, idade } = pessoa;
console.log(nome); // 'Ana'

// Com renomeação
const { nome: nomePessoa } = pessoa;

// Com valores padrão
const { profissao = 'Não informado' } = pessoa;

// Array destructuring
const numeros = [1, 2, 3, 4, 5];
const [primeiro, segundo, ...resto] = numeros;
console.log(primeiro); // 1
console.log(resto);    // [3, 4, 5]

// Em parâmetros de função
function exibirPessoa({ nome, idade }) {
  console.log(\`\${nome} tem \${idade} anos\`);
}`,
    category: "ES6+"
  },
  {
    id: 10,
    question: "O que é o Spread Operator?",
    explanation: "O operador spread (...) expande elementos de um iterável (array, objeto, string) em lugares onde múltiplos elementos são esperados. Útil para copiar, mesclar e passar argumentos.",
    example: `// Copiar arrays
const original = [1, 2, 3];
const copia = [...original];

// Mesclar arrays
const arr1 = [1, 2];
const arr2 = [3, 4];
const mesclado = [...arr1, ...arr2]; // [1, 2, 3, 4]

// Copiar objetos
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 }; // { a: 1, b: 2, c: 3 }

// Passar argumentos
const numeros = [1, 5, 3, 9, 2];
console.log(Math.max(...numeros)); // 9

// String para array
const letras = [...'Olá']; // ['O', 'l', 'á']`,
    category: "ES6+"
  }
];
