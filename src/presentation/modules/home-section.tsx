import { getAllNews } from "@/src/external/lib";
import { NewsCard } from "../components/news-card";
import { HeroNews } from "./hero-news";
export function HomeSection() {
  const allNews = getAllNews();
  const featuredNews = allNews[0];
  const otherNews = allNews.slice(1);

  return (
    <div className="min-h-screen bg-gray-50">

      <main className="container mx-auto px-4 py-8">
        {featuredNews && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Notícia em Destaque
            </h2>
           <div className="mb-12">
            <HeroNews news={allNews}/>
        </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Todas as Notícias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
