# JavaScript Interview Helper 🚀

Um guia interativo com as 10 perguntas mais comuns em entrevistas de JavaScript. Perfeito para quando der aquele branco durante a entrevista!

## 🎯 Características

- ✅ 10 perguntas mais comuns de JavaScript
- 📖 Explicações claras e objetivas
- 💡 Exemplos práticos de código
- 🔍 Busca por palavras-chave
- 🏷️ Filtro por categoria
- 📱 Interface responsiva e moderna
- ⚡ Rápido e leve (Astro + React)

## 🚀 Como usar

### Instalação

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview
```

O projeto estará disponível em `http://localhost:4321`

## 📝 Como adicionar novas perguntas

Para adicionar mais perguntas, basta editar o arquivo `src/data/questions.ts`:

```typescript
{
  id: 11, // próximo ID
  question: "Sua pergunta aqui?",
  explanation: "Explicação clara e concisa do conceito",
  example: `// Código de exemplo
const exemplo = 'aqui';`,
  category: "Fundamentals" // ou "Async", "ES6+", etc.
}
```

### Categorias disponíveis

- **Fundamentals**: Conceitos básicos e fundamentais
- **Async**: Assíncrono, Promises, async/await
- **ES6+**: Recursos modernos do JavaScript

Você pode criar novas categorias simplesmente usando um novo nome no campo `category`.

## 🎨 Personalização

O projeto usa **Tailwind CSS** para estilização. Você pode personalizar:

- **Cores**: Edite o gradiente e cores no componente `InterviewHelper.tsx`
- **Layout**: Ajuste as classes do Tailwind conforme necessário
- **Fontes**: Adicione fontes customizadas no arquivo `index.astro`

## 📦 Estrutura do Projeto

```
interview-helper/
├── src/
│   ├── components/
│   │   └── InterviewHelper.tsx    # Componente principal React
│   ├── data/
│   │   └── questions.ts           # Arquivo com as perguntas (EDITE AQUI!)
│   └── pages/
│       └── index.astro            # Página principal
├── astro.config.mjs               # Configuração do Astro
├── tailwind.config.mjs            # Configuração do Tailwind
├── tsconfig.json                  # Configuração TypeScript
└── package.json
```

## 💡 Dicas de uso

1. **Durante a entrevista**: Tenha o app aberto em uma aba separada
2. **Estudo**: Use a busca para revisar conceitos específicos
3. **Filtros**: Use as categorias para focar em áreas específicas
4. **Mobile**: O app é totalmente responsivo, use no celular se precisar

## 🛠️ Tecnologias

- **Astro** - Framework web moderno e rápido
- **React** - Para interatividade
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilização utilitária

## 📄 Licença

Livre para uso pessoal e educacional!

---

**Boa sorte na sua entrevista! 🍀**
