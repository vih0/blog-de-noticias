import Link from "next/link"
import { Newspaper } from "lucide-react"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Newspaper className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NewsHub</span>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Início
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Sobre o Autor
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
