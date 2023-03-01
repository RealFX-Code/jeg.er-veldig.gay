
import { getCollection } from 'astro:content';
const articlesCollection = await getCollection('article');

let articles = []

articlesCollection.forEach((value)=>{
  articles.push(
    {
      "title": value.data.title,
      "description": value.data.description,
      "slug": value.slug
    }
  )
})

const techArticlesCollection = await getCollection('tech');

let techArticles = []

techArticlesCollection.forEach((value)=>{
  
techArticles.push(
    {
      "title": value.data.title,
      "description": value.data.description,
      "slug": value.slug
    }
  )
})

export async function get({params, request}) {
  return {
    body: JSON.stringify(
      [
        {
          "collection": "article",
          "articles" : articles
        },
        {
          "collection": "tech",
          "articles" : techArticles
        }
      ]
    ),
  };
}