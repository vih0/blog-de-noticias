'use client'
import { useCallback, useEffect, useState } from "react";
import { NewsCard } from "../components/news-card";
import { HeroNews } from "./hero-news";
import { getAllPosts } from "@/src/infra/get-post";
import { Post } from "@/src/dtos/Post";
export function HomeSection() {
  const [products, setProducts] = useState<{posts:Post[]}>();
  const [loading, setLoading]= useState(false)

  const GetAllPosts = useCallback(()=>{
    getAllPosts().then((products)=>{
      setLoading(true)
      setProducts(products)
    }).finally(()=>{setLoading(false)})
  },[])
  useEffect(() => {
   GetAllPosts()

  }, []);


  const featuredNews = products?.posts.filter(post => post.destaque===true)
  const otherNews = products?.posts.map(post=>post);
  console.log(featuredNews)
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">

        {featuredNews && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Notícia em Destaque
            </h2>
           <div className="mb-12">
            <HeroNews loading={loading} news={featuredNews}/>
        </div>
          </section>
        )}

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Todas as Notícias
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherNews?.map((news) => (
              <NewsCard loading={loading} key={news.id} news={news} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
