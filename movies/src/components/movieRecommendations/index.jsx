import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getMovieRecommendations } from "../../api/tmdb-api";
import Spinner from "../spinner";
import MovieList from "../movieList";

const MovieRecommendationsDrawer = ({ id }) => {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["recommendations", id],
    queryFn: () => getMovieRecommendations(id),
  });

  if (isLoading) return <Spinner />;
  if (isError) return <h1>{error.message}</h1>;

  return (
    <MovieList
      movies={data?.results || []}
      gridProps={{ xs: 6, sm: 4, md: 3, lg: 2, xl: 2 }} //
    />
  );
};

export default MovieRecommendationsDrawer;