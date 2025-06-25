import { Author } from '../dtos/Author';
import { Post } from '../dtos/Post';
import { getAllAuthors } from './get-autors';
import { getAllPosts } from './get-post';



export async function getNewsBySlug(slug: string): Promise<Post | undefined> {
  const fetchedPosts = await getAllPosts();
  if (!fetchedPosts || !fetchedPosts.posts) {
    return undefined;
  }

  return fetchedPosts.posts.find((news) => news.slug === slug);
}
export async function getAuthorById(id: string): Promise<Author | undefined> {
  const fetchedAutors = await getAllAuthors();

  if (!fetchedAutors || !fetchedAutors.autors) {
    return undefined;
  }

  return fetchedAutors.autors.find((autor) => autor.id === id);
}

export async function getPostsByAutor(autorId:string):Promise<Post[] | undefined> {
  const fetchedPosts = await getAllPosts();
 if(!fetchedPosts || !fetchedPosts.posts) {
  return undefined;
}
  return fetchedPosts.posts.filter(post=>post.autor.id === autorId)
}