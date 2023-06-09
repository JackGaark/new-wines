import * as api from "$lib/api";
import type { MovieDetails, MovieList } from "$lib/types.js";

export async function load({ fetch }) {
  const [trending, now_playing, upcoming] = await Promise.all([
    api.get(fetch, "trending/movie/") as Promise<MovieList>,
    api.get(fetch, "movie/now_playing/") as Promise<MovieList>,
    api.get(fetch, "movie/upcoming/") as Promise<MovieList>,
  ]);
  const featured = (await api.get(fetch, `movie/${trending.results[0].id}`, {
    append_to_response: "images",
  })) as MovieDetails;

  return {
    trending,
    featured,
  };
}
