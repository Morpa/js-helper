import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  searchTerm: string
  onSearchChange: (value: string) => void
  selectedCategory: string
  onCategoryChange: (value: string) => void
  categories: string[]
}

export default function FiltersSection({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
}: Props) {
  return (
    <div className="px-2 md:px-4 py-4 border-b border-white/10 bg-slate-900/50">
      <div className="max-w-350 mx-auto flex flex-col md:flex-row gap-4">
        <Input
          type="text"
          placeholder="Buscar pergunta..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all text-white placeholder:text-gray-400"
        />

        <Select value={selectedCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full md:w-60 px-4 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all text-white cursor-pointer select-trigger-hover">
            <SelectValue placeholder="Selecione uma categoria" />
          </SelectTrigger>
          <SelectContent className="bg-slate-900 border-white/20">
            {categories.map((cat) => (
              <SelectItem
                key={cat}
                value={cat}
                className="text-white hover:bg-purple-600/50 focus:bg-purple-600/50 cursor-pointer hover:text-white focus:text-white"
              >
                {cat === "all" ? "Todas as categorias" : cat}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
