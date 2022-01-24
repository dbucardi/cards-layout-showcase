import { chuckNorrisApi, endpoints } from './api';
import { IJoke } from './interfaces';

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

const seenJokesStorageKey = 'seen_jokes_key';

export function getSeenJokes(): IJoke[] {
  const seenJokesStr = sessionStorage.getItem(seenJokesStorageKey);
  const seenJokes = seenJokesStr ? JSON.parse(seenJokesStr) : [];
  return seenJokes;
}

export function saveSeenJokes(jokes: IJoke[]) {
  const seenJokes = getSeenJokes();
  const newSeenJokes = [...jokes, ...seenJokes];
  sessionStorage.setItem(seenJokesStorageKey, JSON.stringify(newSeenJokes));
}
