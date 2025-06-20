import Link from "next/link"
import Image from "next/image"
import { Calendar, User } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { NewsItem } from "@/src/external/lib"


interface NewsCardProps {
  news: NewsItem
}

export function NewsCard({ news }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link href={`/news/${news.slug}`}>
        <div className="relative h-48 w-full">
          <Image src={news.coverImage || "/placeholder.svg"} alt={news.title} fill className="object-cover" />
          <div className="absolute top-4 left-4">
            <Badge variant="default">
              {news.category}
            </Badge>
          </div>
        </div>
      </Link>

      <CardHeader className="pb-2">
        <Link href={`/news/${news.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
            {news.title}
          </h2>
        </Link>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 mb-4 line-clamp-3">{news.excerpt}</p>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(news.publishedAt)}</span>
            </div>
          </div>
       
        </div>
      </CardContent>
    </Card>
  )
}
