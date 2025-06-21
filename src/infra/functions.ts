import { Author } from '../dtos/Author';
import { Post } from '../dtos/Post';
import { getAllAuthors } from './get-autors';
import { getAllPosts } from './get-post';


export function getNewsById(id: string): NewsItem | undefined {
  return newsData.find((news) => news.id === id)
}

export async function getNewsBySlug(slug: string): Promise<Post | undefined> {
  const fetchedProducts = await getAllPosts();

  if (!fetchedProducts || !fetchedProducts.posts) {
    return undefined;
  }

  return fetchedProducts.posts.find((news) => news.slug === slug);
}
export async function getAuthorBySlug(id: string): Promise<Author | undefined> {
  const fetchedAutors = await getAllAuthors();

  if (!fetchedAutors || !fetchedAutors.autors) {
    return undefined;
  }

  return fetchedAutors.autors.find((autor) => autor.id === id);
}

