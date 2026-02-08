# 📝 Guia Rápido: Como Adicionar Novas Perguntas

## Passo a Passo

### 1. Abra o arquivo de perguntas
Navegue até: `src/data/questions.ts`

### 2. Adicione sua pergunta no array
Copie este template e adicione no final do array `questions`:

```typescript
{
  id: 11, // Próximo número sequencial
  question: "Qual sua pergunta?",
  explanation: "Explicação clara em 2-3 frases",
  example: `// Exemplo de código
const exemplo = 'seu código aqui';
console.log(exemplo);`,
  category: "Fundamentals" // Ou crie uma nova categoria
}
```

### 3. Salve o arquivo
As mudanças aparecerão automaticamente se o servidor estiver rodando!

## 📋 Exemplo Real

```typescript
{
  id: 11,
  question: "O que é o Map em JavaScript?",
  explanation: "Map é uma estrutura de dados que armazena pares chave-valor onde as chaves podem ser de qualquer tipo (não só strings como em objetos). Mantém a ordem de inserção e tem métodos úteis como set(), get(), has() e delete().",
  example: `const mapa = new Map();

// Adicionar valores
mapa.set('nome', 'João');
mapa.set(1, 'um');
mapa.set(true, 'verdadeiro');

// Recuperar valores
console.log(mapa.get('nome')); // 'João'

// Verificar existência
console.log(mapa.has(1)); // true

// Iterar
for (let [chave, valor] of mapa) {
  console.log(chave, valor);
}`,
  category: "ES6+"
}
```

## 🏷️ Categorias Sugeridas

- `Fundamentals` - Conceitos básicos
- `Async` - Programação assíncrona
- `ES6+` - Features modernas
- `DOM` - Manipulação do DOM
- `Performance` - Otimização
- `Patterns` - Design patterns
- `Testing` - Testes

## ✅ Checklist

- [ ] ID único e sequencial
- [ ] Pergunta clara e direta
- [ ] Explicação em 2-4 frases
- [ ] Exemplo funcional e comentado
- [ ] Categoria apropriada
- [ ] Vírgula no final do objeto (exceto o último)

## 💡 Dicas

1. **Explicação**: Seja conciso mas completo
2. **Exemplo**: Use console.log para mostrar resultados
3. **Código**: Comente partes importantes
4. **Formatação**: Use template strings para código multi-linha

## 🚫 Evite

- ❌ Explicações muito longas (>5 linhas)
- ❌ Exemplos sem comentários
- ❌ Código sem output/resultado
- ❌ Jargão técnico sem explicação
