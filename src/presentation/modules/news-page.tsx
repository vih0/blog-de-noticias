import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { Badge } from "@/components/ui/badge";
import { getNewsBySlug } from "@/src/infra/functions";
import { ShareButtons } from "../components/share-buttons";
import { BackButton } from "../components/back-button";

interface Props {
  slug: string;
}

export async function NewsSection({ slug }: Props) {
  const news = await getNewsBySlug(slug);
  if (!news) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-2xl mx-auto mt-6">
        <BackButton />

        <article className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={news.coverPhoto.url || "/placeholder.svg"}
              alt={news.title}
              fill
              className="object-cover"
            />
            <div className="absolute top-6 left-6 flex gap-2">
              {news.category &&
                news.category.map((categorie, index) => (
                  <Badge
                    style={{ backgroundColor: categorie.corDaTag.hex }}
                    key={index}
                  >
                    {categorie.name}
                  </Badge>
                ))}
            </div>
          </div>

          <div className="p-6 md:p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{news.autor.name}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(news.publishedAt)}</span>
              </div>
            </div>

            <div className="text-xl text-gray-700 mb-8 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-600">
              {news.description}
            </div>

            <div className="prose prose-lg max-w-none text-gray-800 leading-relaxed">
              <RichText
                content={news.conteudo.raw}
                renderers={{
                  p: ({ children }) => <p className="mb-4">{children}</p>,
                  img: ({ src, altText, height, width }) => (
                    <Image
                      src={src as string}
                      alt={altText || ""}
                      className="my-4 rounded"
                      height={height}
                      width={width}
                    />
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-2xl font-bold my-4 text-[#2A5BDA]">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold my-3 text-[#2A5BDA]">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg font-semibold my-2 text-[#2A5BDA]">
                      {children}
                    </h4>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-base font-medium my-2 text-[#2A5BDA]">
                      {children}
                    </h5>
                  ),
                  h6: ({ children }) => (
                    <h6 className="text-sm font-medium my-1 text-[#2A5BDA]">
                      {children}
                    </h6>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#2A5BDA] pl-4 italic my-4 text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside my-4 text-[#2A5BDA]">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                }}
              />
            </div>

            <div className="mt-12 pt-8 border-t">
              <ShareButtons
                url={`/news/${news.slug}`}
                title={news.title}
                description={news.description}
              />
            </div>
          </div>
        </article>

        <div className="max-w-3xl mx-auto mt-8 bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center space-x-4">
            <Image
              src={news.autor.photo.url}
              width={32}
              height={32}
              alt={news.autor.name}
              objectFit="cover"
              className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                {news.autor.name}
              </h3>
              <Link
                href={`/about/${news.autor.id}`}
                className="text-blue-600 hover:text-blue-700 text-sm font-medium"
              >
                Ver perfil completo →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
