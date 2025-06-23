import { Badge } from "@/components/ui/badge";
import { Post } from "@/src/dtos/Post";
import { Clock, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
type Props = {
  news: Post[];
};
export function HeroNews({ news }: Props) {
const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {news[0] && (
        <div className="lg:col-span-2 h-full">
          <Link href={`/news/${news[0].slug}`} className="group block  h-full">
            <div className="flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300  h-full">
              <div className="relative md:w-2/4 h-64 md:h-80">
                <Image
                  src={news[0].coverPhoto.url || "/placeholder.svg"}
                  alt={news[0].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {news[0].category&& news[0].category.map((category, index) => (
                    <Badge style={{ backgroundColor: category.corDaTag.hex }} key={index}>
                      {category.name}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="md:w-2/4 p-6 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4 ">
                  {news[0].title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-4 text-lg">
                  {news[0].description}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{news[0].autor.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(news[0].publishedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}

      {news[1] && (
        <div className="lg:col-span-1">
          <Link href={`/news/${news[1].slug}`} className="group block  h-full">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="relative h-48">
                <Image
                  src={news[1].coverPhoto.url || "/placeholder.svg"}
                  alt={news[1].title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {news[0].category&& news[0].category.map((category,index)=>(
                    <Badge style={{ backgroundColor: category.corDaTag.hex }} key={index}>{category.name}</Badge>

                  ))}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                  {news[1].title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {news[1].description}
                </p>
                <div className="flex items-center text-sm text-gray-500 space-x-3">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{news[1].autor.name}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{formatDate(news[1].publishedAt)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
