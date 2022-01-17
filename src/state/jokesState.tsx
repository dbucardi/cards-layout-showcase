import { useLayoutEffect, useState } from "react";
import { IJoke } from "../services/chuckNorris/interfaces";
import { getFiveRandomJokes } from "../services/chuckNorris";

export const useJokesState = (jokeCategory: string) => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [loading, setLoading] = useState(false);

  useLayoutEffect(() => {
    setLoading(true);
    getFiveRandomJokes(jokeCategory)
      .then((categoriesData) => {
        setJokes(categoriesData);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jokeCategory]);

  return { jokes, loading };
};
