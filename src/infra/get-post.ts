import { gql } from "@apollo/client";
import { Post } from "../dtos/Post";
import client from "../external/lib/Apolloclient";

const GET_ALL_POSTS = gql`
 query GetPosts {
  posts {
    id
    slug
    title
    destaque
    description
     category{
      name
      corDaTag{
        hex
      }
    }
    conteudo {
      raw
    }
    publishedAt
    coverPhoto{
      url
    }
    autor{
      id
      name
      photo{
        url
      }
    }
    
  }
}
`;

interface AllPostsData {
  posts: Post[];
}

export async function getAllPosts() {
  const { data } = await client.query<AllPostsData>({query:GET_ALL_POSTS});

  return {
    posts: data?.posts || [],
  };
}
