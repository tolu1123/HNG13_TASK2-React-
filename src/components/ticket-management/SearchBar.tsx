import { Input } from "@/components/ui/input"
import { FiSearch } from "react-icons/fi"

export default function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
      <Input
        type="text"
        placeholder="Search tickets..."
        className="pl-10 bg-white text-gray-700 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-gray-300"
      />
    </div>
  )
}
