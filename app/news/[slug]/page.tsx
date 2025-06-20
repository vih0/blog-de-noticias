import { NewsSection } from "@/src/presentation/modules/news-page";
interface NewsPageProps {
  params: {
    slug: string
  }
}
export default async function NewsPage({params}:NewsPageProps){
      const { slug } = await params
    return(
        <NewsSection slug={slug}/>
    )
}