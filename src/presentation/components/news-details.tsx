import { Post } from "@/src/dtos/Post";
import { RichText } from "@graphcms/rich-text-react-renderer";
import Image from "next/image";

type Props ={
    news:Post
}
export function NewsDetails({news}:Props){
    return(
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
                    <h2 className="text-2xl font-bold my-4 text-zinc-800">
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-xl font-semibold my-3 text-gray-700">
                      {children}
                    </h3>
                  ),
                  h4: ({ children }) => (
                    <h4 className="text-lg font-semibold my-2 text-gray-600">
                      {children}
                    </h4>
                  ),
                  h5: ({ children }) => (
                    <h5 className="text-base font-medium my-2 text-gray-500">
                      {children}
                    </h5>
                  ),
                  h6: ({ children }) => (
                    <h6 className="text-sm font-medium my-1 text-gray-400">
                      {children}
                    </h6>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="border-l-4 border-[#2A5BDA] pl-4 italic my-4 text-gray-700">
                      {children}
                    </blockquote>
                  ),
                  ol: ({ children }) => (
                    <ol className="list-decimal list-inside my-4 text-gray-600">
                      {children}
                    </ol>
                  ),
                  li: ({ children }) => <li className="mb-1">{children}</li>,
                }}
              />
            </div>
    )
}