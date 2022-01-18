import { useLayoutEffect, useState } from 'react';
import { IJoke } from '../services/chuckNorris/interfaces';
import { getFiveRandomJokes, getSeenJokes } from '../services/chuckNorris';

export const useJokesState = (jokeCategory: string) => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [loading, setLoading] = useState(false);
  const [seenJokes, setSeenJokes] = useState<IJoke[]>([]);

  useLayoutEffect(() => {
    setLoading(true);
    getFiveRandomJokes(jokeCategory)
      .then((categoriesData) => {
        setJokes(categoriesData);
      })
      .finally(() => {
        setLoading(false);
      });

    setSeenJokes(getSeenJokes());
  }, [jokeCategory]);

  return { jokes, seenJokes, loading, setSeenJokes };
};
