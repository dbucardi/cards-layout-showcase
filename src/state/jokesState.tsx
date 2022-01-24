import { useEffect, useState } from 'react';
import { IJoke } from '../services/chuckNorris/interfaces';
import { getFiveRandomJokes, getSeenJokes, saveSeenJokes } from '../services/chuckNorris';

export const useJokesState = (jokeCategory: string) => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [loading, setLoading] = useState(false);
  const [seenJokes, setSeenJokes] = useState<IJoke[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    getFiveRandomJokes(jokeCategory)
      .then((jokes) => {
        setJokes(jokes);
        saveSeenJokes(jokes);
      })
      .catch(() => setError(true))
      .finally(() => {
        setLoading(false);
      });

    setSeenJokes(getSeenJokes());
  }, [jokeCategory]);

  return { jokes, seenJokes, loading, error, setSeenJokes };
};
