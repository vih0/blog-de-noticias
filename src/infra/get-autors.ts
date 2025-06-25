import { Author } from "./../dtos/Author";
import { gql } from "@apollo/client";
import client from "../external/lib/Apolloclient";

const GET_ALL_AUTORS = gql`
  query GetAutor {
    autors {
      bio
      name
      contato {
        href
        nome
      }
      id
      name
      photo {
        url
      }
      temasAbordados {
        nome
        id
      }
    }
  }
`;
interface AllAuthorsData {
  autors: Author[];
}
export async function getAllAuthors() {
  const { data } = await client.query<AllAuthorsData>({
    query: GET_ALL_AUTORS,
  });

  return {
    autors: data?.autors || [],
  };
}
