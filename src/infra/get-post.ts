import { gql } from "@apollo/client";
import { Post } from "../dtos/Post";
import client from "../external/lib/Apolloclient";

const GET_ALL_POSTS = gql`
 query GetPosts {
  posts {
    id
    title
    slug
    description
    content {
      text
    }
    coverPhoto {
      url
    }
    createdAt
    autor {
      name
      id
      photo{
      url
      }
    }
    category {
      name
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
