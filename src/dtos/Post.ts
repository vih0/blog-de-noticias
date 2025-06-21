export interface Post {
  id: string;
  title: string;
  slug: string;
  createdAt: string;
  description:string
  coverPhoto: {
    url: string;
  };
  content:{
    text:string
  }
  autor: {
    id:string
    name: string;
     photo:{
        url:string
    }
  };
  category:{
    name:string
  }[]
}