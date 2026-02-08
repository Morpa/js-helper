import { Button } from "@/components/ui/button"
import type { Question } from "@/data/questions"

interface Props {
  questions: Question[]
  selectedQuestion: Question | null
  onSelectQuestion: (question: Question) => void
}

export default function QuestionsList({
  questions,
  selectedQuestion,
  onSelectQuestion,
}: Props) {
  return (
    <div className="space-y-3 h-full min-h-0 overflow-y-auto pr-2 custom-scrollbar">
      {questions.map((question) => (
        <Button
          key={question.id}
          onClick={() => onSelectQuestion(question)}
          className={`w-full min-h-10 text-left p-4 rounded-lg transition-all duration-200 ${
            selectedQuestion?.id === question.id
              ? "bg-linear-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/50 text-white"
              : "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/10 text-white"
          }`}
        >
          <div className="flex items-start justify-between gap-2">
            <span className="font-medium text-sm md:text-base flex-1 wrap-break-word">
              {question.question}
            </span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full whitespace-nowrap ml-2 shrink-0">
              {question.category}
            </span>
          </div>
        </Button>
      ))}
      {questions.length === 0 && (
        <div className="text-center text-gray-400 py-8">
          Nenhuma pergunta encontrada
        </div>
      )}
    </div>
  )
}
