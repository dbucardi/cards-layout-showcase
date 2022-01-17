import { chuckNorrisApi, endpoints } from "./api";
import { IJoke } from "./interfaces";

async function getRandomJokeByCategory(category: string): Promise<IJoke> {
  const url = endpoints.randomJokeByCategory(category);
  const reponse = await chuckNorrisApi.get(url);
  return reponse.data;
}

export async function getFiveRandomJokes(category: string): Promise<IJoke[]> {
  return Promise.all([
    getRandomJokeByCategory(category),
    getRandomJokeByCategory(category),
    getRandomJokeByCategory(category),
    getRandomJokeByCategory(category),
    getRandomJokeByCategory(category),
  ]);
}
