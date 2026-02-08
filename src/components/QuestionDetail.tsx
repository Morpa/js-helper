import type { Question } from "@/data/questions"

interface Props {
  question: Question | null
}

export default function QuestionDetail({ question }: Props) {
  if (!question) {
    return (
      <div className="bg-white/10 backdrop-blur-sm rounded-lg p-12 border border-white/20 text-center flex flex-col items-center justify-center h-full min-h-0">
        <div className="text-6xl mb-4">👈</div>
        <h3 className="text-xl font-semibold text-gray-300 mb-2">
          Selecione uma pergunta
        </h3>
        <p className="text-gray-400">
          Escolha uma pergunta da lista para ver a explicação e exemplos
        </p>
      </div>
    )
  }

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 space-y-6 h-full min-h-0 overflow-y-auto custom-scrollbar">
      <div>
        <h2 className="text-2xl font-bold mb-2 text-purple-300">
          {question.question}
        </h2>
        <span className="inline-block text-xs bg-purple-500/30 px-3 py-1 rounded-full text-purple-200">
          {question.category}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-pink-300">
          📖 Explicação
        </h3>
        <p className="text-gray-200 leading-relaxed">{question.explanation}</p>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-3 text-pink-300">💡 Exemplo</h3>
        <pre className="bg-slate-950/50 p-4 rounded-lg overflow-x-auto border border-white/10">
          <code className="text-sm text-green-300">{question.example}</code>
        </pre>
      </div>
    </div>
  )
}
