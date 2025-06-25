import { MessageCircleMore } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <p className="text-xl font-bold text-blue-600">Clecio Bertozzi</p>
          </Link>

          <div className="flex items-center space-x-6">
            <Link href="/" className="flex items-center justify-center gap-2 text-green-600 hover:text-blue-600 transition-colors font-medium">
              Fale comigo!
              <MessageCircleMore size={20}/>
            </Link>
            
          </div>
        </nav>
      </div>
    </header>
  )
}
