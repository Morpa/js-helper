interface Props {
  totalQuestions: number
  totalCategories: number
}

export default function QuickStats({ totalQuestions, totalCategories }: Props) {
  return (
    <div className="bg-linear-to-t from-slate-900 via-purple-900 to-slate-900 border-t border-white/10 px-2 md:px-4 py-3">
      <div className="max-w-350 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-200">
            <div className="text-xl md:text-2xl font-bold text-purple-400">
              {totalQuestions}
            </div>
            <div className="text-xs md:text-sm text-gray-300">Perguntas</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-200">
            <div className="text-xl md:text-2xl font-bold text-pink-400">
              {totalCategories}
            </div>
            <div className="text-xs md:text-sm text-gray-300">Categorias</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-200">
            <div className="text-xl md:text-2xl font-bold text-blue-400">
              100%
            </div>
            <div className="text-xs md:text-sm text-gray-300">Grátis</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4 text-center border border-white/20 hover:bg-white/20 transition-colors duration-200">
            <div className="text-xl md:text-2xl font-bold text-green-400">
              ∞
            </div>
            <div className="text-xs md:text-sm text-gray-300">
              Uso ilimitado
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
