export default function Header() {
  return (
    <div className="bg-linear-to-b from-slate-900 via-purple-900 to-slate-900 border-b border-white/10 px-2 md:px-4 py-3 md:py-4">
      <div className="max-w-350 mx-auto text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600">
          JavaScript Interview Helper 🚀
        </h1>
        <p className="text-gray-300 text-xs md:text-sm">
          Seu guia de emergência para entrevistas técnicas
        </p>
      </div>
    </div>
  )
}
