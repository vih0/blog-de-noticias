import { Author } from './../dtos/Author';
import { gql } from "@apollo/client";
import client from "../external/lib/Apolloclient";

const GET_ALL_AUTORS = gql`
query GetAutor {
  autors {
    id
    name
    mision
    photo {
      url
    }
    bio
    contato {
      href
      id
      nome
    }
    temasAbordados {
      id
      nome
    }
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


