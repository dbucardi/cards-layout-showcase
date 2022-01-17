import axios from "axios";

export const chuckNorrisApi = axios.create({
  baseURL: process.env.REACT_APP_CHUCK_NORRIS_API,
  headers: {
    /** Preventing IE11 from store cache for api calls */
    "Cache-Control": "no-cache",
    Expires: "Sat, 01 Jan 2000 00:00:00 GMT",
    "If-Modified-Since": "0",
  },
});

export const endpoints = {
  allCategories: "/jokes/categories",
  randomJokeByCategory: (category: string) =>
    `/jokes/random?category=${category}`,
};
