import { Author } from './../dtos/Author';
import { gql } from "@apollo/client";
import client from "../external/lib/Apolloclient";

const GET_ALL_AUTORS = gql`
query GetAutor {
 autors {
    bio
    contato {
      href
      nome
    }
    id
    name
    photo {
      url
    }
    temasAbordados{
      nome
id
    }
  
  }
  posts{
    slug
    title
    description
		coverPhoto{
      url
    }
    publishedAt
    
  }
}
`;
interface AllAuthorsData{
    autors:Author[]
}
export async function getAllAuthors() {
  const { data } = await client.query<AllAuthorsData>({query:GET_ALL_AUTORS});

  return {
    autors: data?.autors || [],
  };
}


