import { RichTextContent } from "@graphcms/rich-text-types";
import { Category } from "./Categoria";

export interface Post {
  id: string;
  title: string;
  slug: string;
  publishedAt: string;
  description:string
  destaque: boolean
  coverPhoto: {
    url: string;
  };
  conteudo: {
    raw: RichTextContent
  }
  autor: {
    id:string
    name: string;
     photo:{
        url:string
    }
  };
  category:Category[]
}