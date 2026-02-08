export interface Question {
  id: number
  question: string
  explanation: string
  example: string
  category: string
}

export const questions: Question[] = [
  {
    id: 1,
    question: "O que é Closure em JavaScript?",
    explanation:
      "Closure é quando uma função 'lembra' das variáveis do escopo onde foi criada, mesmo depois que esse escopo terminou de executar. É uma função que tem acesso ao escopo externo mesmo após a função externa ter retornado.",
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
    category: "Fundamentals",
  },
  {
    id: 2,
    question: "Qual a diferença entre var, let e const?",
    explanation:
      "var tem escopo de função e sofre hoisting; let e const têm escopo de bloco. const não permite reatribuição (mas objetos/arrays podem ser mutados). let permite reatribuição.",
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
    category: "Fundamentals",
  },
  {
    id: 3,
    question: "O que é o Event Loop?",
    explanation:
      "O Event Loop é o mecanismo que permite ao JavaScript executar código assíncrono apesar de ser single-threaded. Ele monitora a call stack e a callback queue, movendo callbacks para a stack quando ela está vazia.",
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
    category: "Async",
  },
  {
    id: 4,
    question: "O que é 'this' em JavaScript?",
    explanation:
      "'this' refere-se ao contexto de execução atual. Seu valor depende de como a função é chamada: em métodos de objeto aponta para o objeto, em funções normais aponta para window/global (ou undefined em strict mode), em arrow functions herda do escopo pai.",
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
    category: "Fundamentals",
  },
  {
    id: 5,
    question: "O que são Promises e async/await?",
    explanation:
      "Promises representam valores que estarão disponíveis no futuro. Possuem 3 estados: pending, fulfilled, rejected. Async/await é syntactic sugar sobre Promises que permite escrever código assíncrono de forma mais legível.",
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
    category: "Async",
  },
  {
    id: 6,
    question: "O que é Hoisting?",
    explanation:
      "Hoisting é o comportamento do JavaScript de mover declarações para o topo do escopo antes da execução. Variáveis declaradas com var e declarações de função são 'elevadas', mas apenas a declaração, não a inicialização.",
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
    category: "Fundamentals",
  },
  {
    id: 7,
    question: "Qual a diferença entre == e ===?",
    explanation:
      "== (igualdade abstrata) faz coerção de tipo antes de comparar. === (igualdade estrita) compara valor E tipo sem conversão. Sempre prefira === para evitar bugs.",
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
    category: "Fundamentals",
  },
  {
    id: 8,
    question: "O que são Arrow Functions?",
    explanation:
      "Arrow functions são uma sintaxe mais concisa para escrever funções. Diferenças principais: não têm seu próprio 'this' (herdam do escopo pai), não têm 'arguments', não podem ser usadas como construtores.",
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
    category: "ES6+",
  },
  {
    id: 9,
    question: "O que é Destructuring?",
    explanation:
      "Destructuring permite extrair valores de arrays ou propriedades de objetos em variáveis distintas de forma concisa. É muito útil para trabalhar com dados complexos.",
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
    category: "ES6+",
  },
  {
    id: 10,
    question: "O que é o Spread Operator?",
    explanation:
      "O operador spread (...) expande elementos de um iterável (array, objeto, string) em lugares onde múltiplos elementos são esperados. Útil para copiar, mesclar e passar argumentos.",
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
    category: "ES6+",
  },
  {
    id: 11,
    question: "O que é Prototype e Prototype Chain?",
    explanation:
      "Prototype é o mecanismo de herança do JavaScript. Cada objeto tem um prototype (protótipo) do qual herda propriedades e métodos. A prototype chain é a cadeia de protótipos que o JavaScript percorre ao buscar uma propriedade.",
    example: `function Pessoa(nome) {
  this.nome = nome;
}

Pessoa.prototype.saudar = function() {
  console.log('Olá, sou ' + this.nome);
};

const pessoa1 = new Pessoa('João');
pessoa1.saudar(); // "Olá, sou João"

// Verificando a cadeia
console.log(pessoa1.hasOwnProperty('nome')); // true
console.log(pessoa1.hasOwnProperty('saudar')); // false
console.log('saudar' in pessoa1); // true

// A cadeia: pessoa1 → Pessoa.prototype → Object.prototype → null`,
    category: "OOP",
  },
  {
    id: 12,
    question: "O que são Higher-Order Functions?",
    explanation:
      "Higher-order functions são funções que recebem outras funções como argumentos ou retornam funções. São a base da programação funcional em JavaScript. Exemplos comuns: map, filter, reduce.",
    example: `// Recebe função como argumento
const numeros = [1, 2, 3, 4, 5];

const dobrados = numeros.map(x => x * 2);
// [2, 4, 6, 8, 10]

const pares = numeros.filter(x => x % 2 === 0);
// [2, 4]

// Retorna função
function multiplicador(fator) {
  return function(numero) {
    return numero * fator;
  };
}

const triplicar = multiplicador(3);
console.log(triplicar(5)); // 15

// Compondo funções
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);`,
    category: "Functional",
  },
  {
    id: 13,
    question: "O que é Event Delegation?",
    explanation:
      "Event delegation é uma técnica que aproveita o event bubbling para lidar com eventos em elementos filhos através de um único listener no elemento pai. Melhora performance e funciona com elementos adicionados dinamicamente.",
    example: `// Sem delegation (ineficiente)
document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', handleClick);
});

// Com delegation (eficiente)
document.querySelector('.lista').addEventListener('click', (e) => {
  if (e.target.classList.contains('item')) {
    handleClick(e);
  }
});

// Exemplo prático
const lista = document.getElementById('minhaLista');
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Clicou em:', e.target.textContent);
  }
});

// Funciona mesmo com itens adicionados depois!`,
    category: "DOM",
  },
  {
    id: 14,
    question: "O que é Currying?",
    explanation:
      "Currying transforma uma função que recebe múltiplos argumentos em uma sequência de funções que recebem um argumento cada. Permite criar funções especializadas e facilita a composição.",
    example: `// Função normal
function soma(a, b, c) {
  return a + b + c;
}

// Função com currying
function somaCurried(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

console.log(somaCurried(1)(2)(3)); // 6

// Com arrow functions
const multiply = a => b => a * b;

const dobrar = multiply(2);
const triplicar = multiply(3);

console.log(dobrar(5));    // 10
console.log(triplicar(5)); // 15

// Uso prático
const log = nivel => mensagem => 
  console.log(\`[\${nivel}] \${mensagem}\`);

const logError = log('ERROR');
const logInfo = log('INFO');`,
    category: "Functional",
  },
  {
    id: 15,
    question: "O que é Debounce e Throttle?",
    explanation:
      "Debounce e throttle são técnicas para limitar a frequência de execução de funções. Debounce aguarda um período de inatividade; throttle garante execução em intervalos regulares. Úteis para otimizar performance.",
    example: `// Debounce - executa após parar de chamar
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const buscar = debounce((termo) => {
  console.log('Buscando:', termo);
}, 500);

// Throttle - executa no máximo uma vez por intervalo
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

const scroll = throttle(() => {
  console.log('Scroll detectado');
}, 1000);`,
    category: "Performance",
  },
  {
    id: 16,
    question: "O que é Memoization?",
    explanation:
      "Memoization é uma técnica de otimização que armazena resultados de funções custosas em cache. Quando a função é chamada novamente com os mesmos argumentos, retorna o resultado cacheado ao invés de recalcular.",
    example: `// Sem memoization - lento
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Com memoization - rápido
function fibonacciMemo() {
  const cache = {};
  
  return function fib(n) {
    if (n in cache) return cache[n];
    if (n <= 1) return n;
    
    cache[n] = fib(n - 1) + fib(n - 2);
    return cache[n];
  };
}

const fib = fibonacciMemo();
console.log(fib(40)); // Muito mais rápido!

// Função genérica de memoization
const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    return cache[key] ?? (cache[key] = fn(...args));
  };
};`,
    category: "Performance",
  },
  {
    id: 17,
    question: "O que é Deep Copy vs Shallow Copy?",
    explanation:
      "Shallow copy copia apenas o primeiro nível de um objeto, mantendo referências para objetos aninhados. Deep copy cria uma cópia completamente independente, duplicando todos os níveis de aninhamento.",
    example: `const original = {
  nome: 'João',
  endereco: {
    cidade: 'São Paulo',
    rua: 'Av. Paulista'
  }
};

// Shallow copy - spread ou Object.assign
const shallow = { ...original };
shallow.endereco.cidade = 'Rio';
console.log(original.endereco.cidade); // 'Rio' - modificou!

// Deep copy - JSON (limitado)
const deep1 = JSON.parse(JSON.stringify(original));
deep1.endereco.cidade = 'Brasília';
console.log(original.endereco.cidade); // 'São Paulo' - não modificou

// Deep copy - structuredClone (moderno)
const deep2 = structuredClone(original);

// Deep copy manual (recursivo)
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') return obj;
  const clone = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    clone[key] = deepClone(obj[key]);
  }
  return clone;
}`,
    category: "Fundamentals",
  },
  {
    id: 18,
    question: "O que são Generators?",
    explanation:
      "Generators são funções que podem pausar sua execução e retomá-la depois. Usam a sintaxe function* e yield. Úteis para criar iteradores personalizados, controlar fluxo assíncrono e trabalhar com sequências infinitas.",
    example: `// Generator básico
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const gen = contador();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2

// Generator com parâmetros
function* fibonacci() {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Iterando
for (let num of fibonacci()) {
  if (num > 100) break;
  console.log(num);
}

// Generator assíncrono
async function* buscarPaginas() {
  let pagina = 1;
  while (pagina <= 5) {
    const dados = await fetch(\`/api?page=\${pagina}\`);
    yield dados;
    pagina++;
  }
}`,
    category: "Advanced",
  },
  {
    id: 19,
    question: "O que é Optional Chaining e Nullish Coalescing?",
    explanation:
      "Optional chaining (?.) permite acessar propriedades aninhadas sem verificar cada nível. Nullish coalescing (??) retorna o operando direito apenas se o esquerdo for null ou undefined (diferente de || que considera valores falsy).",
    example: `// Optional Chaining
const usuario = {
  nome: 'Ana',
  endereco: {
    cidade: 'São Paulo'
  }
};

// Sem optional chaining
const rua1 = usuario.endereco && usuario.endereco.rua;

// Com optional chaining
const rua2 = usuario.endereco?.rua;
const pais = usuario.endereco?.pais?.nome; // undefined

// Com métodos
usuario.saudar?.(); // Não dá erro se não existir

// Nullish Coalescing
const valor1 = null ?? 'padrão';     // 'padrão'
const valor2 = undefined ?? 'padrão'; // 'padrão'
const valor3 = 0 ?? 'padrão';        // 0 (diferente de ||)
const valor4 = '' ?? 'padrão';       // '' (diferente de ||)
const valor5 = false ?? 'padrão';    // false (diferente de ||)

// Combinando
const cidade = usuario?.endereco?.cidade ?? 'Não informado';`,
    category: "ES6+",
  },
  {
    id: 20,
    question: "O que é o módulo System (import/export)?",
    explanation:
      "ES6 Modules permitem dividir código em arquivos reutilizáveis usando import e export. Suportam named exports, default exports e importações dinâmicas. Diferem de CommonJS (require/module.exports) por serem estáticos e assíncronos.",
    example: `// math.js - Named exports
export const PI = 3.14159;
export function soma(a, b) {
  return a + b;
}

// pessoa.js - Default export
export default class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

// app.js - Importando
import Pessoa from './pessoa.js';
import { PI, soma } from './math.js';
import { soma as adicionar } from './math.js'; // renomear

// Importar tudo
import * as math from './math.js';
console.log(math.PI);

// Importação dinâmica (assíncrona)
const modulo = await import('./config.js');

// Re-exportar
export { PI } from './math.js';
export * from './utils.js';`,
    category: "Modules",
  },
]
