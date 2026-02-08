import { useState } from "react"
import FiltersSection from "@/components/FiltersSection"
import Header from "@/components/Header"
import QuestionDetail from "@/components/QuestionDetail"
import QuestionsList from "@/components/QuestionsList"
import QuickStats from "@/components/QuickStats"
import type { Question } from "@/data/questions"

interface Props {
  questions: Question[]
}

export default function InterviewHelper({ questions }: Props) {
  const [selectedQuestion, setSelectedQuestion] = useState<Question | null>(
    null,
  )
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    "all",
    ...Array.from(new Set(questions.map((q) => q.category))),
  ]

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.explanation.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || q.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="relative min-h-screen w-full bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header - Fixed at top */}
      <div className="fixed top-0 left-0 right-0 w-full z-50">
        <Header />
      </div>

      {/* Filters - Fixed below header */}
      <div className="fixed top-17 md:top-25 left-0 right-0 w-full z-40">
        <FiltersSection
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          categories={categories}
        />
      </div>

      {/* Main Content - Scrollable */}
      <div className="interview-content fixed left-0 right-0 w-full overflow-y-auto overflow-x-hidden px-2 md:px-4 py-4 md:py-6">
        <div className="max-w-350 mx-auto w-full h-full flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 h-full">
            {/* Questions List */}
            <div className="md:col-span-1 h-full min-h-0 overflow-hidden">
              <QuestionsList
                questions={filteredQuestions}
                selectedQuestion={selectedQuestion}
                onSelectQuestion={setSelectedQuestion}
              />
            </div>

            {/* Question Detail */}
            <div className="md:col-span-2 h-full min-h-0 overflow-hidden">
              <QuestionDetail question={selectedQuestion} />
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 w-full z-50">
        <QuickStats
          totalQuestions={questions.length}
          totalCategories={categories.length - 1}
        />
      </div>
    </div>
  )
}
